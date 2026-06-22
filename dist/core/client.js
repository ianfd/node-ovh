"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OvhClient = void 0;
const attach_1 = require("../generated/v2/attach");
const client_1 = require("../object-storage/client");
const errors_1 = require("./errors");
const endpoints_1 = require("./endpoints");
const query_1 = require("./query");
class OvhClient {
    endpoint;
    baseUrl;
    legacyBaseUrl;
    fetchImpl;
    timeout;
    schemaVersion;
    userAgent;
    auth;
    objectStorage;
    s3;
    constructor(options = {}) {
        this.endpoint = endpoints_1.endpoints[options.endpoint ?? 'ovh-eu'];
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
        this.objectStorage = new client_1.ObjectStorageClient(this);
        this.s3 = this.objectStorage;
        Object.assign(this, (0, attach_1.createGeneratedClients)(this));
    }
    async request(method, path, options = {}) {
        const response = await this.requestWithResponse(method, path, options);
        return response.data;
    }
    async requestLegacy(method, path, options = {}) {
        const response = await this.requestLegacyWithResponse(method, path, options);
        return response.data;
    }
    async requestLegacyWithResponse(method, path, options = {}) {
        return this.requestWithBaseUrl(this.legacyBaseUrl, method, path, options);
    }
    async requestWithResponse(method, path, options = {}) {
        return this.requestWithBaseUrl(this.baseUrl, method, path, options);
    }
    async requestWithBaseUrl(baseUrl, method, path, options = {}) {
        const url = new URL(joinPath(baseUrl, path));
        (0, query_1.appendQuery)(url, options.query);
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
            throw new errors_1.OvhApiError({
                status: response.status,
                statusText: response.statusText,
                message: extractErrorMessage(data, response),
                headers: response.headers,
                queryId: response.headers.get('X-Ovh-Queryid') ?? undefined,
                body: data,
            });
        }
        return {
            data: data,
            headers: response.headers,
            status: response.status,
            queryId: response.headers.get('X-Ovh-Queryid') ?? undefined,
            schemaVersion: response.headers.get('X-Schemas-Version') ?? undefined,
            nextCursor: response.headers.get('X-Pagination-Cursor-Next') ?? undefined,
        };
    }
    async *iterate(method, path, options = {}) {
        let cursor = options.pagination?.cursor;
        do {
            const response = await this.requestWithResponse(method, path, {
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
    async listAll(method, path, options = {}) {
        const results = [];
        for await (const item of this.iterate(method, path, options)) {
            results.push(item);
        }
        return results;
    }
}
exports.OvhClient = OvhClient;
function joinPath(baseUrl, path) {
    const base = baseUrl.toString().replace(/\/$/, '');
    const suffix = path.startsWith('/') ? path : `/${path}`;
    return `${base}${suffix}`;
}
function deriveLegacyBaseUrl(baseUrl, endpoint) {
    const explicitLegacyBaseUrl = endpoint.legacyBaseUrl;
    const base = baseUrl.toString().replace(/\/$/, '');
    if (base.endsWith('/v2')) {
        return `${base.slice(0, -3)}/1.0`;
    }
    return explicitLegacyBaseUrl;
}
function serializeBody(method, body, headers) {
    if (body === undefined || method === 'GET' || method === 'DELETE') {
        return undefined;
    }
    if (!headers.has('Content-Type')) {
        headers.set('Content-Type', 'application/json');
    }
    return typeof body === 'string' ? body : JSON.stringify(body);
}
async function parseResponseBody(response) {
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
function extractErrorMessage(data, response) {
    if (data && typeof data === 'object' && 'message' in data && typeof data.message === 'string') {
        return data.message;
    }
    if (typeof data === 'string' && data.length > 0) {
        return data;
    }
    return response.statusText || `OVH API request failed with status ${response.status}`;
}
function createSignal(inputSignal, timeout) {
    if (!timeout) {
        return inputSignal;
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    if (inputSignal) {
        if (inputSignal.aborted) {
            clearTimeout(timeoutId);
            controller.abort();
        }
        else {
            inputSignal.addEventListener('abort', () => {
                clearTimeout(timeoutId);
                controller.abort();
            }, { once: true });
        }
    }
    controller.signal.addEventListener('abort', () => clearTimeout(timeoutId), { once: true });
    return controller.signal;
}
