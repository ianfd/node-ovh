"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationClientRoot = exports.LocationClient = void 0;
const path_1 = require("../../../core/path");
class LocationClient {
    client;
    root;
    constructor(client) {
        this.client = client;
        this.root = new LocationClientRoot(client);
    }
}
exports.LocationClient = LocationClient;
class LocationClientRoot {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available regions and their availability zones */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/location", params), buildRequestOptions(params, ["availabilityZone", "cityCode", "cityName", "code", "countryCode", "countryName", "datacenter", "geographyCode", "geographyName", "ids", "language", "location", "name", "services", "specificType", "type"], []));
    }
    /** Iterate over List available regions and their availability zones. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/location", params), buildRequestOptions(params, ["availabilityZone", "cityCode", "cityName", "code", "countryCode", "countryName", "datacenter", "geographyCode", "geographyName", "ids", "language", "location", "name", "services", "specificType", "type"], []));
    }
    /** Load all pages for List available regions and their availability zones. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/location", params), buildRequestOptions(params, ["availabilityZone", "cityCode", "cityName", "code", "countryCode", "countryName", "datacenter", "geographyCode", "geographyName", "ids", "language", "location", "name", "services", "specificType", "type"], []));
    }
    /** Get available region and its availability zones */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/location/{name}", params), buildRequestOptions(params, [], []));
    }
}
exports.LocationClientRoot = LocationClientRoot;
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
