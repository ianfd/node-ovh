import type { OvhClient } from '../../../core/client';
import type { RequestOptions } from '../../../core/types';
import type { VersionsVersionAccountVersion, VersionsVersionAccountVersionInput } from './types';
export interface VersionGetParams extends RequestOptions {
}
export interface VersionUpdateParams extends RequestOptions {
    body: VersionsVersionAccountVersionInput;
}
export declare class AccountClient {
    private readonly client;
    readonly version: AccountClientVersion;
    constructor(client: OvhClient);
}
export declare class AccountClientVersion {
    private readonly client;
    constructor(client: OvhClient);
    /** Get the current and available API versions */
    get(params?: RequestOptions): Promise<VersionsVersionAccountVersion>;
    /** Update the current API version */
    update(params: VersionUpdateParams): Promise<VersionsVersionAccountVersion>;
}
//# sourceMappingURL=client.d.ts.map