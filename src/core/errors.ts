export interface OvhApiErrorOptions {
  status: number;
  statusText: string;
  message: string;
  headers: Headers;
  queryId?: string;
  body: unknown;
}

export class OvhApiError extends Error {
  readonly name = 'OvhApiError';
  readonly status: number;
  readonly statusText: string;
  readonly headers: Headers;
  readonly queryId?: string;
  readonly body: unknown;

  constructor(options: OvhApiErrorOptions) {
    super(options.message);
    this.status = options.status;
    this.statusText = options.statusText;
    this.headers = options.headers;
    this.queryId = options.queryId;
    this.body = options.body;
  }
}

