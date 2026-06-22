import { createGeneratedClients, type GeneratedClients } from '../generated/v2/attach';
import { ObjectStorageClient } from '../object-storage/client';
import { OvhApiError } from './errors';
import { endpoints, type EndpointConfig } from './endpoints';
import { appendQuery } from './query';
import type {
  HttpMethod,
  OvhClientOptions,
  OvhResponse,
  PaginatedListOptions,
  RequestOptions,
} from './types';

export interface OvhClient extends GeneratedClients {}

export class OvhClient {
  private readonly endpoint: EndpointConfig;
  private readonly baseUrl: URL;
  private readonly legacyBaseUrl: URL;
  private readonly fetchImpl: typeof fetch;
  private readonly timeout?: number;
  private readonly schemaVersion?: string;
  private readonly userAgent?: string;
  private readonly auth?: OvhClientOptions['auth'];
  readonly objectStorage: ObjectStorageClient;
  readonly s3: ObjectStorageClient;

  constructor(options: OvhClientOptions = {}) {
    this.endpoint = endpoints[options.endpoint ?? 'ovh-eu'];
    if (!this.endpoint && !options.baseUrl) {
      throw new Error(`Unknown OVH endpoint: ${options.endpoint}`);
    }

    this.baseUrl = new URL(options.baseUrl ?? this.endpoint.baseUrl);
    this.legacyBaseUrl = new URL(options.legacyBaseUrl ?? deriveLegacyBaseUrl(this.baseUrl, this.endpoint));
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    if (!this.fetchImpl) {
      throw new Error('A fetch implementation is required');
    }
    this.timeout = options.timeout;
    this.schemaVersion = options.schemaVersion;
    this.userAgent = options.userAgent;
    this.auth = options.auth;
    this.objectStorage = new ObjectStorageClient(this);
    this.s3 = this.objectStorage;

    Object.assign(this, createGeneratedClients(this));
  }

  async request<T>(method: HttpMethod, path: string, options: RequestOptions = {}): Promise<T> {
    const response = await this.requestWithResponse<T>(method, path, options);
    return response.data;
  }

  async requestLegacy<T>(method: HttpMethod, path: string, options: RequestOptions = {}): Promise<T> {
    const response = await this.requestLegacyWithResponse<T>(method, path, options);
    return response.data;
  }

  async requestLegacyWithResponse<T>(
    method: HttpMethod,
    path: string,
    options: RequestOptions = {},
  ): Promise<OvhResponse<T>> {
    return this.requestWithBaseUrl<T>(this.legacyBaseUrl, method, path, options);
  }

  async requestWithResponse<T>(
    method: HttpMethod,
    path: string,
    options: RequestOptions = {},
  ): Promise<OvhResponse<T>> {
    return this.requestWithBaseUrl<T>(this.baseUrl, method, path, options);
  }

  private async requestWithBaseUrl<T>(
    baseUrl: URL,
    method: HttpMethod,
    path: string,
    options: RequestOptions = {},
  ): Promise<OvhResponse<T>> {
    const url = new URL(joinPath(baseUrl, path));
    appendQuery(url, options.query);

    const headers = new Headers(options.headers);
    headers.set('Accept', 'application/json');
    if (this.userAgent) {
      headers.set('User-Agent', this.userAgent);
    }

    const schemaVersion = options.schemaVersion ?? this.schemaVersion;
    if (schemaVersion) {
      headers.set('X-Schemas-Version', schemaVersion);
    }

    if (options.pagination?.cursor) {
      headers.set('X-Pagination-Cursor', options.pagination.cursor);
    }
    if (options.pagination?.size !== undefined) {
      headers.set('X-Pagination-Size', String(options.pagination.size));
    }

    const bodyText = serializeBody(method, options.body, headers);
    if (this.auth) {
      await this.auth.apply(headers, {
        endpoint: this.endpoint,
        fetch: this.fetchImpl,
        method,
        url,
        bodyText,
      });
    }

    const signal = createSignal(options.signal, options.timeout ?? this.timeout);
    const response = await this.fetchImpl(url, {
      method,
      headers,
      body: bodyText,
      signal,
    });

    const data = await parseResponseBody(response);
    if (!response.ok) {
      throw new OvhApiError({
        status: response.status,
        statusText: response.statusText,
        message: extractErrorMessage(data, response),
        headers: response.headers,
        queryId: response.headers.get('X-Ovh-Queryid') ?? undefined,
        body: data,
      });
    }

    return {
      data: data as T,
      headers: response.headers,
      status: response.status,
      queryId: response.headers.get('X-Ovh-Queryid') ?? undefined,
      schemaVersion: response.headers.get('X-Schemas-Version') ?? undefined,
      nextCursor: response.headers.get('X-Pagination-Cursor-Next') ?? undefined,
    };
  }

  async *iterate<T>(
    method: HttpMethod,
    path: string,
    options: PaginatedListOptions = {},
  ): AsyncGenerator<T, void, void> {
    let cursor = options.pagination?.cursor;
    do {
      const response = await this.requestWithResponse<T[]>(method, path, {
        ...options,
        pagination: {
          ...options.pagination,
          cursor,
          size: options.pageSize ?? options.pagination?.size,
        },
      });

      for (const item of response.data) {
        yield item;
      }
      cursor = response.nextCursor;
    } while (cursor);
  }

  async listAll<T>(
    method: HttpMethod,
    path: string,
    options: PaginatedListOptions = {},
  ): Promise<T[]> {
    const results: T[] = [];
    for await (const item of this.iterate<T>(method, path, options)) {
      results.push(item);
    }
    return results;
  }
}

function joinPath(baseUrl: URL, path: string): string {
  const base = baseUrl.toString().replace(/\/$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
}

function deriveLegacyBaseUrl(baseUrl: URL, endpoint: EndpointConfig): string {
  const explicitLegacyBaseUrl = endpoint.legacyBaseUrl;
  const base = baseUrl.toString().replace(/\/$/, '');
  if (base.endsWith('/v2')) {
    return `${base.slice(0, -3)}/1.0`;
  }
  return explicitLegacyBaseUrl;
}

function serializeBody(method: HttpMethod, body: unknown, headers: Headers): string | undefined {
  if (body === undefined || method === 'GET' || method === 'DELETE') {
    return undefined;
  }

  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  return typeof body === 'string' ? body : JSON.stringify(body);
}

async function parseResponseBody(response: Response): Promise<unknown> {
  if (response.status === 204) {
    return null;
  }

  const text = await response.text();
  if (!text) {
    return null;
  }

  const contentType = response.headers.get('Content-Type') ?? '';
  if (contentType.includes('json')) {
    return JSON.parse(text);
  }
  return text;
}

function extractErrorMessage(data: unknown, response: Response): string {
  if (data && typeof data === 'object' && 'message' in data && typeof data.message === 'string') {
    return data.message;
  }
  if (typeof data === 'string' && data.length > 0) {
    return data;
  }
  return response.statusText || `OVH API request failed with status ${response.status}`;
}

function createSignal(inputSignal: AbortSignal | undefined, timeout: number | undefined): AbortSignal | undefined {
  if (!timeout) {
    return inputSignal;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  if (inputSignal) {
    if (inputSignal.aborted) {
      clearTimeout(timeoutId);
      controller.abort();
    } else {
      inputSignal.addEventListener(
        'abort',
        () => {
          clearTimeout(timeoutId);
          controller.abort();
        },
        { once: true },
      );
    }
  }

  controller.signal.addEventListener('abort', () => clearTimeout(timeoutId), { once: true });
  return controller.signal;
}
