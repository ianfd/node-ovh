import type { AuthProvider } from './auth';
import type { OvhEndpoint } from './endpoints';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type QueryValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Date
  | QueryValue[]
  | Record<string, unknown>;

export type QueryParams = Record<string, QueryValue>;

export interface PaginationRequest {
  cursor?: string;
  size?: number;
}

export interface RequestOptions {
  query?: QueryParams;
  body?: unknown;
  headers?: HeadersInit;
  schemaVersion?: string;
  signal?: AbortSignal;
  timeout?: number;
  pagination?: PaginationRequest;
}

export interface OvhResponse<T> {
  data: T;
  headers: Headers;
  status: number;
  queryId?: string;
  schemaVersion?: string;
  nextCursor?: string;
}

export interface OvhClientOptions {
  endpoint?: OvhEndpoint;
  baseUrl?: string;
  legacyBaseUrl?: string;
  auth?: AuthProvider;
  fetch?: typeof fetch;
  timeout?: number;
  schemaVersion?: string;
  userAgent?: string;
}

export interface PaginatedListOptions extends RequestOptions {
  pageSize?: number;
}
