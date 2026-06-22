"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainClientNameTask = exports.DomainClientName = exports.DomainClientAlldomTask = exports.DomainClientAlldom = exports.DomainClient = void 0;
const path_1 = require("../../../core/path");
class DomainClient {
    client;
    alldom;
    name;
    constructor(client) {
        this.client = client;
        this.alldom = new DomainClientAlldom(client);
        this.name = new DomainClientName(client);
    }
}
exports.DomainClient = DomainClient;
class DomainClientAlldom {
    client;
    task;
    constructor(client) {
        this.client = client;
        this.task = new DomainClientAlldomTask(client);
    }
    /** List all the AllDom resources */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/domain/alldom", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List all the AllDom resources. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/domain/alldom", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List all the AllDom resources. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/domain/alldom", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Get an AllDom resource */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/domain/alldom/{alldomName}", params), buildRequestOptions(params, [], []));
    }
}
exports.DomainClientAlldom = DomainClientAlldom;
class DomainClientAlldomTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List tasks related to a managed AllDom resource */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/domain/alldom/{alldomName}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List tasks related to a managed AllDom resource. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/domain/alldom/{alldomName}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List tasks related to a managed AllDom resource. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/domain/alldom/{alldomName}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get a specific task related to a managed AllDom resource */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/domain/alldom/{alldomName}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.DomainClientAlldomTask = DomainClientAlldomTask;
class DomainClientName {
    client;
    task;
    constructor(client) {
        this.client = client;
        this.task = new DomainClientNameTask(client);
    }
    /** List all domain name resources */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/domain/name", params), buildRequestOptions(params, ["additionalStates", "contactAdministrator", "contactBilling", "contactOwner", "contactTechnical", "iamTags", "mainState", "searchValue", "suspensionState"], []));
    }
    /** Iterate over List all domain name resources. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/domain/name", params), buildRequestOptions(params, ["additionalStates", "contactAdministrator", "contactBilling", "contactOwner", "contactTechnical", "iamTags", "mainState", "searchValue", "suspensionState"], []));
    }
    /** Load all pages for List all domain name resources. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/domain/name", params), buildRequestOptions(params, ["additionalStates", "contactAdministrator", "contactBilling", "contactOwner", "contactTechnical", "iamTags", "mainState", "searchValue", "suspensionState"], []));
    }
    /** Get a domain name resource */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/domain/name/{domainName}", params), buildRequestOptions(params, [], []));
    }
    /** Update an existing domain name by modifying various configurations through the targetSpec */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/domain/name/{domainName}", params), buildRequestOptions(params, [], []));
    }
}
exports.DomainClientName = DomainClientName;
class DomainClientNameTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List tasks related to a managed domain name resource */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/domain/name/{domainName}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List tasks related to a managed domain name resource. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/domain/name/{domainName}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List tasks related to a managed domain name resource. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/domain/name/{domainName}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get a specific task related to a managed domain name resource */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/domain/name/{domainName}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
    /** Update a domain name task with additional details */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/domain/name/{domainName}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.DomainClientNameTask = DomainClientNameTask;
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
