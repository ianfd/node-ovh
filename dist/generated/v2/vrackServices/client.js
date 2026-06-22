"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VrackServicesClientResourceTask = exports.VrackServicesClientResourceEligibleManagedService = exports.VrackServicesClientResource = exports.VrackServicesClientReferenceRegion = exports.VrackServicesClientReferenceCompatibleManagedServiceType = exports.VrackServicesClientReference = exports.VrackServicesClient = void 0;
const path_1 = require("../../../core/path");
class VrackServicesClient {
    client;
    reference;
    resource;
    constructor(client) {
        this.client = client;
        this.reference = new VrackServicesClientReference(client);
        this.resource = new VrackServicesClientResource(client);
    }
}
exports.VrackServicesClient = VrackServicesClient;
class VrackServicesClientReference {
    client;
    compatibleManagedServiceType;
    region;
    constructor(client) {
        this.client = client;
        this.compatibleManagedServiceType = new VrackServicesClientReferenceCompatibleManagedServiceType(client);
        this.region = new VrackServicesClientReferenceRegion(client);
    }
}
exports.VrackServicesClientReference = VrackServicesClientReference;
class VrackServicesClientReferenceCompatibleManagedServiceType {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all managed service types that are compatible with vRack Services (IAM resource types) */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/vrackServices/reference/compatibleManagedServiceType", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all managed service types that are compatible with vRack Services (IAM resource types). */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vrackServices/reference/compatibleManagedServiceType", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all managed service types that are compatible with vRack Services (IAM resource types). */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vrackServices/reference/compatibleManagedServiceType", params), buildRequestOptions(params, [], []));
    }
}
exports.VrackServicesClientReferenceCompatibleManagedServiceType = VrackServicesClientReferenceCompatibleManagedServiceType;
class VrackServicesClientReferenceRegion {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all vRack Services regions */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/vrackServices/reference/region", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all vRack Services regions. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vrackServices/reference/region", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all vRack Services regions. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vrackServices/reference/region", params), buildRequestOptions(params, [], []));
    }
}
exports.VrackServicesClientReferenceRegion = VrackServicesClientReferenceRegion;
class VrackServicesClientResource {
    client;
    eligibleManagedService;
    task;
    constructor(client) {
        this.client = client;
        this.eligibleManagedService = new VrackServicesClientResourceEligibleManagedService(client);
        this.task = new VrackServicesClientResourceTask(client);
    }
    /** List all vRack Services */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/vrackServices/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List all vRack Services. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vrackServices/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List all vRack Services. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vrackServices/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Retrieve a vRack Services */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vrackServices/resource/{vrackServicesId}", params), buildRequestOptions(params, [], []));
    }
    /** Request updates on the vRack Services configuration */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/vrackServices/resource/{vrackServicesId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VrackServicesClientResource = VrackServicesClientResource;
class VrackServicesClientResourceEligibleManagedService {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List every managed service eligible to the requested vRack Services */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vrackServices/resource/{vrackServicesId}/eligibleManagedService", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List every managed service eligible to the requested vRack Services. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vrackServices/resource/{vrackServicesId}/eligibleManagedService", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List every managed service eligible to the requested vRack Services. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vrackServices/resource/{vrackServicesId}/eligibleManagedService", params), buildRequestOptions(params, [], []));
    }
}
exports.VrackServicesClientResourceEligibleManagedService = VrackServicesClientResourceEligibleManagedService;
class VrackServicesClientResourceTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all asynchronous operations related to the vRack Services */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vrackServices/resource/{vrackServicesId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all asynchronous operations related to the vRack Services. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vrackServices/resource/{vrackServicesId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all asynchronous operations related to the vRack Services. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vrackServices/resource/{vrackServicesId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get the task */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vrackServices/resource/{vrackServicesId}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VrackServicesClientResourceTask = VrackServicesClientResourceTask;
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
