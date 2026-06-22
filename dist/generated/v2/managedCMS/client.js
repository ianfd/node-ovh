"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedCMSClientResourceWebsiteResetDatabasePassword = exports.ManagedCMSClientResourceWebsiteFlushCDN = exports.ManagedCMSClientResourceWebsite = exports.ManagedCMSClientResourceTask = exports.ManagedCMSClientResourceLogUrl = exports.ManagedCMSClientResourceLogSubscription = exports.ManagedCMSClientResourceLogKind = exports.ManagedCMSClientResourceLog = exports.ManagedCMSClientResourceFlushCDN = exports.ManagedCMSClientResource = exports.ManagedCMSClientReferenceSupportedPHPVersions = exports.ManagedCMSClientReferenceAvailableLanguages = exports.ManagedCMSClientReferenceAvailableCMS = exports.ManagedCMSClientReference = exports.ManagedCMSClient = void 0;
const path_1 = require("../../../core/path");
class ManagedCMSClient {
    client;
    reference;
    resource;
    constructor(client) {
        this.client = client;
        this.reference = new ManagedCMSClientReference(client);
        this.resource = new ManagedCMSClientResource(client);
    }
}
exports.ManagedCMSClient = ManagedCMSClient;
class ManagedCMSClientReference {
    client;
    availableCMS;
    availableLanguages;
    supportedPHPVersions;
    constructor(client) {
        this.client = client;
        this.availableCMS = new ManagedCMSClientReferenceAvailableCMS(client);
        this.availableLanguages = new ManagedCMSClientReferenceAvailableLanguages(client);
        this.supportedPHPVersions = new ManagedCMSClientReferenceSupportedPHPVersions(client);
    }
}
exports.ManagedCMSClientReference = ManagedCMSClientReference;
class ManagedCMSClientReferenceAvailableCMS {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List the available content management systems */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/reference/availableCMS", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List the available content management systems. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/managedCMS/reference/availableCMS", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List the available content management systems. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/managedCMS/reference/availableCMS", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientReferenceAvailableCMS = ManagedCMSClientReferenceAvailableCMS;
class ManagedCMSClientReferenceAvailableLanguages {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List the available languages when creating a new website */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/reference/availableLanguages", params), buildRequestOptions(params, ["cms"], []));
    }
    /** Iterate over List the available languages when creating a new website. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/managedCMS/reference/availableLanguages", params), buildRequestOptions(params, ["cms"], []));
    }
    /** Load all pages for List the available languages when creating a new website. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/managedCMS/reference/availableLanguages", params), buildRequestOptions(params, ["cms"], []));
    }
}
exports.ManagedCMSClientReferenceAvailableLanguages = ManagedCMSClientReferenceAvailableLanguages;
class ManagedCMSClientReferenceSupportedPHPVersions {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List supported PHP versions */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/reference/supportedPHPVersions", params), buildRequestOptions(params, ["cms"], []));
    }
    /** Iterate over List supported PHP versions. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/managedCMS/reference/supportedPHPVersions", params), buildRequestOptions(params, ["cms"], []));
    }
    /** Load all pages for List supported PHP versions. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/managedCMS/reference/supportedPHPVersions", params), buildRequestOptions(params, ["cms"], []));
    }
}
exports.ManagedCMSClientReferenceSupportedPHPVersions = ManagedCMSClientReferenceSupportedPHPVersions;
class ManagedCMSClientResource {
    client;
    flushCDN;
    log;
    task;
    website;
    constructor(client) {
        this.client = client;
        this.flushCDN = new ManagedCMSClientResourceFlushCDN(client);
        this.log = new ManagedCMSClientResourceLog(client);
        this.task = new ManagedCMSClientResourceTask(client);
        this.website = new ManagedCMSClientResourceWebsite(client);
    }
    /** Get all services of your account */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over Get all services of your account. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/managedCMS/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for Get all services of your account. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/managedCMS/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Get a service */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}", params), buildRequestOptions(params, [], []));
    }
    /** Edit a service */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientResource = ManagedCMSClientResource;
class ManagedCMSClientResourceFlushCDN {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Flush CDN for all websites of the service */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/flushCDN", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientResourceFlushCDN = ManagedCMSClientResourceFlushCDN;
class ManagedCMSClientResourceLog {
    client;
    kind;
    subscription;
    url;
    constructor(client) {
        this.client = client;
        this.kind = new ManagedCMSClientResourceLogKind(client);
        this.subscription = new ManagedCMSClientResourceLogSubscription(client);
        this.url = new ManagedCMSClientResourceLogUrl(client);
    }
}
exports.ManagedCMSClientResourceLog = ManagedCMSClientResourceLog;
class ManagedCMSClientResourceLogKind {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available log kinds */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/kind", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available log kinds. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/kind", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available log kinds. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/kind", params), buildRequestOptions(params, [], []));
    }
    /** Get a log kind */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/kind/{name}", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientResourceLogKind = ManagedCMSClientResourceLogKind;
class ManagedCMSClientResourceLogSubscription {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List subscription IDs for a cluster */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/subscription", params), buildRequestOptions(params, ["kind"], []));
    }
    /** Iterate over List subscription IDs for a cluster. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/subscription", params), buildRequestOptions(params, ["kind"], []));
    }
    /** Load all pages for List subscription IDs for a cluster. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/subscription", params), buildRequestOptions(params, ["kind"], []));
    }
    /** Create a subscription from logs to a pre-existing LDP stream */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/subscription", params), buildRequestOptions(params, [], []));
    }
    /** Delete a subscription */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/subscription/{subscriptionId}", params), buildRequestOptions(params, [], []));
    }
    /** Get subscription details */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/subscription/{subscriptionId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientResourceLogSubscription = ManagedCMSClientResourceLogSubscription;
class ManagedCMSClientResourceLogUrl {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Generate a temporary URL to retrieve logs */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/log/url", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientResourceLogUrl = ManagedCMSClientResourceLogUrl;
class ManagedCMSClientResourceTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get current and recent tasks on the service */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Get current and recent tasks on the service. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Get current and recent tasks on the service. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/task", params), buildRequestOptions(params, [], []));
    }
    /** /managedCMS/resource/{serviceId}/task/{taskId} */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
    /** Edit a task to provide user input */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientResourceTask = ManagedCMSClientResourceTask;
class ManagedCMSClientResourceWebsite {
    client;
    flushCDN;
    resetDatabasePassword;
    constructor(client) {
        this.client = client;
        this.flushCDN = new ManagedCMSClientResourceWebsiteFlushCDN(client);
        this.resetDatabasePassword = new ManagedCMSClientResourceWebsiteResetDatabasePassword(client);
    }
    /** Get all websites of a service */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/website", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Get all websites of a service. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/website", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Get all websites of a service. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/website", params), buildRequestOptions(params, [], []));
    }
    /** Create or import a website */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/website", params), buildRequestOptions(params, [], []));
    }
    /** Delete a website */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/website/{websiteId}", params), buildRequestOptions(params, [], []));
    }
    /** Get a website */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/website/{websiteId}", params), buildRequestOptions(params, [], []));
    }
    /** Edit a website */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/website/{websiteId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientResourceWebsite = ManagedCMSClientResourceWebsite;
class ManagedCMSClientResourceWebsiteFlushCDN {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Flush CDN for the website */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/website/{websiteId}/flushCDN", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientResourceWebsiteFlushCDN = ManagedCMSClientResourceWebsiteFlushCDN;
class ManagedCMSClientResourceWebsiteResetDatabasePassword {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Reset password of the website's database */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/managedCMS/resource/{serviceId}/website/{websiteId}/resetDatabasePassword", params), buildRequestOptions(params, [], []));
    }
}
exports.ManagedCMSClientResourceWebsiteResetDatabasePassword = ManagedCMSClientResourceWebsiteResetDatabasePassword;
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
