export interface OvhApiErrorOptions {
    status: number;
    statusText: string;
    message: string;
    headers: Headers;
    queryId?: string;
    body: unknown;
}
export declare class OvhApiError extends Error {
    readonly name = "OvhApiError";
    readonly status: number;
    readonly statusText: string;
    readonly headers: Headers;
    readonly queryId?: string;
    readonly body: unknown;
    constructor(options: OvhApiErrorOptions);
}
//# sourceMappingURL=errors.d.ts.map