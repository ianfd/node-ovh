"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhostingClientResourceWebsiteDomain = exports.WebhostingClientResourceWebsite = exports.WebhostingClientResourceCertificate = exports.WebhostingClientResourceAttachedDomain = exports.WebhostingClientResource = exports.WebhostingClientAttachedDomain = exports.WebhostingClient = void 0;
const path_1 = require("../../../core/path");
class WebhostingClient {
    client;
    attachedDomain;
    resource;
    constructor(client) {
        this.client = client;
        this.attachedDomain = new WebhostingClientAttachedDomain(client);
        this.resource = new WebhostingClientResource(client);
    }
}
exports.WebhostingClient = WebhostingClient;
class WebhostingClientAttachedDomain {
    client;
    constructor(client) {
        this.client = client;
    }
    /** /webhosting/attachedDomain */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/webhosting/attachedDomain", params), buildRequestOptions(params, ["domain"], []));
    }
    /** Iterate over /webhosting/attachedDomain. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/webhosting/attachedDomain", params), buildRequestOptions(params, ["domain"], []));
    }
    /** Load all pages for /webhosting/attachedDomain. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/webhosting/attachedDomain", params), buildRequestOptions(params, ["domain"], []));
    }
}
exports.WebhostingClientAttachedDomain = WebhostingClientAttachedDomain;
class WebhostingClientResource {
    client;
    attachedDomain;
    certificate;
    website;
    constructor(client) {
        this.client = client;
        this.attachedDomain = new WebhostingClientResourceAttachedDomain(client);
        this.certificate = new WebhostingClientResourceCertificate(client);
        this.website = new WebhostingClientResourceWebsite(client);
    }
    /** /webhosting/resource */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/webhosting/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over /webhosting/resource. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/webhosting/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for /webhosting/resource. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/webhosting/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** /webhosting/resource/{name} */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/webhosting/resource/{name}", params), buildRequestOptions(params, [], []));
    }
}
exports.WebhostingClientResource = WebhostingClientResource;
class WebhostingClientResourceAttachedDomain {
    client;
    constructor(client) {
        this.client = client;
    }
    /** /webhosting/resource/{name}/attachedDomain */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/attachedDomain", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over /webhosting/resource/{name}/attachedDomain. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/attachedDomain", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for /webhosting/resource/{name}/attachedDomain. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/attachedDomain", params), buildRequestOptions(params, [], []));
    }
}
exports.WebhostingClientResourceAttachedDomain = WebhostingClientResourceAttachedDomain;
class WebhostingClientResourceCertificate {
    client;
    constructor(client) {
        this.client = client;
    }
    /** /webhosting/resource/{name}/certificate */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/certificate", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over /webhosting/resource/{name}/certificate. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/certificate", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for /webhosting/resource/{name}/certificate. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/certificate", params), buildRequestOptions(params, [], []));
    }
}
exports.WebhostingClientResourceCertificate = WebhostingClientResourceCertificate;
class WebhostingClientResourceWebsite {
    client;
    domain;
    constructor(client) {
        this.client = client;
        this.domain = new WebhostingClientResourceWebsiteDomain(client);
    }
    /** /webhosting/resource/{name}/website */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/website", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over /webhosting/resource/{name}/website. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/website", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for /webhosting/resource/{name}/website. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/website", params), buildRequestOptions(params, [], []));
    }
    /** Create a website */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/webhosting/resource/{name}/website", params), buildRequestOptions(params, [], []));
    }
    /** /webhosting/resource/{name}/website/{websiteId} */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/website/{websiteId}", params), buildRequestOptions(params, [], []));
    }
    /** Update an existing website */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/webhosting/resource/{name}/website/{websiteId}", params), buildRequestOptions(params, [], []));
    }
}
exports.WebhostingClientResourceWebsite = WebhostingClientResourceWebsite;
class WebhostingClientResourceWebsiteDomain {
    client;
    constructor(client) {
        this.client = client;
    }
    /** /webhosting/resource/{name}/website/{websiteId}/domain */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/website/{websiteId}/domain", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over /webhosting/resource/{name}/website/{websiteId}/domain. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/website/{websiteId}/domain", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for /webhosting/resource/{name}/website/{websiteId}/domain. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/webhosting/resource/{name}/website/{websiteId}/domain", params), buildRequestOptions(params, [], []));
    }
}
exports.WebhostingClientResourceWebsiteDomain = WebhostingClientResourceWebsiteDomain;
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
