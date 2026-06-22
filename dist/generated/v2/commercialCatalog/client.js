"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommercialCatalogClientOffers = exports.CommercialCatalogClient = void 0;
const path_1 = require("../../../core/path");
class CommercialCatalogClient {
    client;
    offers;
    constructor(client) {
        this.client = client;
        this.offers = new CommercialCatalogClientOffers(client);
    }
}
exports.CommercialCatalogClient = CommercialCatalogClient;
class CommercialCatalogClientOffers {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all offers */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/commercialCatalog/offers", params), buildRequestOptions(params, ["merchants", "nature", "productCode", "state", "technicalRequirements", "type"], []));
    }
    /** Iterate over List all offers. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/commercialCatalog/offers", params), buildRequestOptions(params, ["merchants", "nature", "productCode", "state", "technicalRequirements", "type"], []));
    }
    /** Load all pages for List all offers. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/commercialCatalog/offers", params), buildRequestOptions(params, ["merchants", "nature", "productCode", "state", "technicalRequirements", "type"], []));
    }
    /** Get details of an offer */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/commercialCatalog/offers/{id}", params), buildRequestOptions(params, [], []));
    }
}
exports.CommercialCatalogClientOffers = CommercialCatalogClientOffers;
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
