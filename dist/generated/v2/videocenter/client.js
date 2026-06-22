"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideocenterClientResourceAuthToken = exports.VideocenterClientResourceAuth = exports.VideocenterClientResource = exports.VideocenterClient = void 0;
const path_1 = require("../../../core/path");
class VideocenterClient {
    client;
    resource;
    constructor(client) {
        this.client = client;
        this.resource = new VideocenterClientResource(client);
    }
}
exports.VideocenterClient = VideocenterClient;
class VideocenterClientResource {
    client;
    auth;
    constructor(client) {
        this.client = client;
        this.auth = new VideocenterClientResourceAuth(client);
    }
    /** Get all services */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/videocenter/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over Get all services. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/videocenter/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for Get all services. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/videocenter/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Get a service */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/videocenter/resource/{serviceId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VideocenterClientResource = VideocenterClientResource;
class VideocenterClientResourceAuth {
    client;
    token;
    constructor(client) {
        this.client = client;
        this.token = new VideocenterClientResourceAuthToken(client);
    }
}
exports.VideocenterClientResourceAuth = VideocenterClientResourceAuth;
class VideocenterClientResourceAuthToken {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Generate an Auth Token */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/videocenter/resource/{serviceId}/auth/token", params), buildRequestOptions(params, [], []));
    }
}
exports.VideocenterClientResourceAuthToken = VideocenterClientResourceAuthToken;
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
