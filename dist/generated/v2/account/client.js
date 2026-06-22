"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountClientVersion = exports.AccountClient = void 0;
const path_1 = require("../../../core/path");
class AccountClient {
    client;
    version;
    constructor(client) {
        this.client = client;
        this.version = new AccountClientVersion(client);
    }
}
exports.AccountClient = AccountClient;
class AccountClientVersion {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get the current and available API versions */
    get(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/account/version", params), buildRequestOptions(params, [], []));
    }
    /** Update the current API version */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/account/version", params), buildRequestOptions(params, [], []));
    }
}
exports.AccountClientVersion = AccountClientVersion;
function buildRequestOptions(params, queryKeys, headerKeys) {
    const request = params;
    const headers = mergeHeaders(request.headers, pickDefined(params, headerKeys));
    const pageSize = typeof params.pageSize === "number" ? params.pageSize : undefined;
    return {
        ...request,
        query: pickDefined(params, queryKeys),
        headers,
        pagination: request.pagination ?? (pageSize === undefined ? undefined : { size: pageSize }),
        body: request.body,
    };
}
function pickDefined(source, keys) {
    const result = {};
    for (const key of keys) {
        if (source[key] !== undefined)
            result[key] = source[key];
    }
    return result;
}
function mergeHeaders(base, extra) {
    const headers = new Headers(base);
    for (const [key, value] of Object.entries(extra)) {
        if (value !== undefined && value !== null)
            headers.set(key, String(value));
    }
    return headers;
}
