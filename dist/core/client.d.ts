import { type GeneratedClients } from '../generated/v2/attach';
import { ObjectStorageClient } from '../object-storage/client';
import type { HttpMethod, OvhClientOptions, OvhResponse, PaginatedListOptions, RequestOptions } from './types';
export interface OvhClient extends GeneratedClients {
}
export declare class OvhClient {
    private readonly endpoint;
    private readonly baseUrl;
    private readonly legacyBaseUrl;
    private readonly fetchImpl;
    private readonly timeout?;
    private readonly schemaVersion?;
    private readonly userAgent?;
    private readonly auth?;
    readonly objectStorage: ObjectStorageClient;
    readonly s3: ObjectStorageClient;
    constructor(options?: OvhClientOptions);
    request<T>(method: HttpMethod, path: string, options?: RequestOptions): Promise<T>;
    requestLegacy<T>(method: HttpMethod, path: string, options?: RequestOptions): Promise<T>;
    requestLegacyWithResponse<T>(method: HttpMethod, path: string, options?: RequestOptions): Promise<OvhResponse<T>>;
    requestWithResponse<T>(method: HttpMethod, path: string, options?: RequestOptions): Promise<OvhResponse<T>>;
    private requestWithBaseUrl;
    iterate<T>(method: HttpMethod, path: string, options?: PaginatedListOptions): AsyncGenerator<T, void, void>;
    listAll<T>(method: HttpMethod, path: string, options?: PaginatedListOptions): Promise<T[]>;
}
//# sourceMappingURL=client.d.ts.map