"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamClientResourceGroup = exports.IamClientResourceTag = exports.IamClientResourceAuthorizationCheck = exports.IamClientResourceAuthorization = exports.IamClientResource = exports.IamClientReferenceResourceType = exports.IamClientReferenceResource = exports.IamClientReferenceAction = exports.IamClientReference = exports.IamClientPolicy = exports.IamClientPermissionsGroup = exports.IamClientLogUrl = exports.IamClientLogSubscription = exports.IamClientLogKind = exports.IamClientLog = exports.IamClientAuthorizationCheck = exports.IamClientAuthorization = exports.IamClient = void 0;
const path_1 = require("../../../core/path");
class IamClient {
    client;
    authorization;
    log;
    permissionsGroup;
    policy;
    reference;
    resource;
    resourceGroup;
    constructor(client) {
        this.client = client;
        this.authorization = new IamClientAuthorization(client);
        this.log = new IamClientLog(client);
        this.permissionsGroup = new IamClientPermissionsGroup(client);
        this.policy = new IamClientPolicy(client);
        this.reference = new IamClientReference(client);
        this.resource = new IamClientResource(client);
        this.resourceGroup = new IamClientResourceGroup(client);
    }
}
exports.IamClient = IamClient;
class IamClientAuthorization {
    client;
    check;
    constructor(client) {
        this.client = client;
        this.check = new IamClientAuthorizationCheck(client);
    }
}
exports.IamClientAuthorization = IamClientAuthorization;
class IamClientAuthorizationCheck {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Validate your authorizations on given resources */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/iam/authorization/check", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientAuthorizationCheck = IamClientAuthorizationCheck;
class IamClientLog {
    client;
    kind;
    subscription;
    url;
    constructor(client) {
        this.client = client;
        this.kind = new IamClientLogKind(client);
        this.subscription = new IamClientLogSubscription(client);
        this.url = new IamClientLogUrl(client);
    }
}
exports.IamClientLog = IamClientLog;
class IamClientLogKind {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available log kinds */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/log/kind", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available log kinds. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/iam/log/kind", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available log kinds. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/iam/log/kind", params), buildRequestOptions(params, [], []));
    }
    /** Get a log kind */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/log/kind/{name}", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientLogKind = IamClientLogKind;
class IamClientLogSubscription {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List subscription IDs for a cluster */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/log/subscription", params), buildRequestOptions(params, ["kind"], []));
    }
    /** Iterate over List subscription IDs for a cluster. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/iam/log/subscription", params), buildRequestOptions(params, ["kind"], []));
    }
    /** Load all pages for List subscription IDs for a cluster. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/iam/log/subscription", params), buildRequestOptions(params, ["kind"], []));
    }
    /** Create a subscription from logs to a pre-existing LDP stream */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/iam/log/subscription", params), buildRequestOptions(params, [], []));
    }
    /** Delete a subscription */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/iam/log/subscription/{subscriptionId}", params), buildRequestOptions(params, [], []));
    }
    /** Get subscription details */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/log/subscription/{subscriptionId}", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientLogSubscription = IamClientLogSubscription;
class IamClientLogUrl {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Generate a temporary URL to retrieve logs */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/iam/log/url", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientLogUrl = IamClientLogUrl;
class IamClientPermissionsGroup {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieve all permissions groups */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/permissionsGroup", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Retrieve all permissions groups. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/iam/permissionsGroup", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Retrieve all permissions groups. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/iam/permissionsGroup", params), buildRequestOptions(params, [], []));
    }
    /** Create a permissions group */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/iam/permissionsGroup", params), buildRequestOptions(params, [], []));
    }
    /** Delete the given permissions group */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/iam/permissionsGroup/{permissionsGroupURN}", params), buildRequestOptions(params, [], []));
    }
    /** Retrieve the given permissions group */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/permissionsGroup/{permissionsGroupURN}", params), buildRequestOptions(params, [], []));
    }
    /** Update a permissions group */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/iam/permissionsGroup/{permissionsGroupURN}", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientPermissionsGroup = IamClientPermissionsGroup;
class IamClientPolicy {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieve all policies */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/policy", params), buildRequestOptions(params, ["action", "details", "identity", "readOnly", "resourceURN"], []));
    }
    /** Iterate over Retrieve all policies. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/iam/policy", params), buildRequestOptions(params, ["action", "details", "identity", "readOnly", "resourceURN"], []));
    }
    /** Load all pages for Retrieve all policies. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/iam/policy", params), buildRequestOptions(params, ["action", "details", "identity", "readOnly", "resourceURN"], []));
    }
    /** Create a new policy */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/iam/policy", params), buildRequestOptions(params, [], []));
    }
    /** Delete the given policy */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/iam/policy/{policyId}", params), buildRequestOptions(params, [], []));
    }
    /** Retrieve the given policy */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/policy/{policyId}", params), buildRequestOptions(params, ["details"], []));
    }
    /** Update an existing policy */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/iam/policy/{policyId}", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientPolicy = IamClientPolicy;
class IamClientReference {
    client;
    action;
    resource;
    constructor(client) {
        this.client = client;
        this.action = new IamClientReferenceAction(client);
        this.resource = new IamClientReferenceResource(client);
    }
}
exports.IamClientReference = IamClientReference;
class IamClientReferenceAction {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieve all actions */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/reference/action", params), buildRequestOptions(params, ["resourceType"], []));
    }
    /** Iterate over Retrieve all actions. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/iam/reference/action", params), buildRequestOptions(params, ["resourceType"], []));
    }
    /** Load all pages for Retrieve all actions. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/iam/reference/action", params), buildRequestOptions(params, ["resourceType"], []));
    }
}
exports.IamClientReferenceAction = IamClientReferenceAction;
class IamClientReferenceResource {
    client;
    type;
    constructor(client) {
        this.client = client;
        this.type = new IamClientReferenceResourceType(client);
    }
}
exports.IamClientReferenceResource = IamClientReferenceResource;
class IamClientReferenceResourceType {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieve all resource types */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/reference/resource/type", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Retrieve all resource types. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/iam/reference/resource/type", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Retrieve all resource types. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/iam/reference/resource/type", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientReferenceResourceType = IamClientReferenceResourceType;
class IamClientResource {
    client;
    authorization;
    tag;
    constructor(client) {
        this.client = client;
        this.authorization = new IamClientResourceAuthorization(client);
        this.tag = new IamClientResourceTag(client);
    }
    /** List all resources */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/resource", params), buildRequestOptions(params, ["resourceName", "resourceType", "resourceURN", "tags"], []));
    }
    /** Iterate over List all resources. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/iam/resource", params), buildRequestOptions(params, ["resourceName", "resourceType", "resourceURN", "tags"], []));
    }
    /** Load all pages for List all resources. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/iam/resource", params), buildRequestOptions(params, ["resourceName", "resourceType", "resourceURN", "tags"], []));
    }
    /** Retrieve a resource */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/resource/{resourceURN}", params), buildRequestOptions(params, [], []));
    }
    /** Update an existing resource */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/iam/resource/{resourceURN}", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientResource = IamClientResource;
class IamClientResourceAuthorization {
    client;
    check;
    constructor(client) {
        this.client = client;
        this.check = new IamClientResourceAuthorizationCheck(client);
    }
}
exports.IamClientResourceAuthorization = IamClientResourceAuthorization;
class IamClientResourceAuthorizationCheck {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Validate authorizations on a given resource */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/iam/resource/{resourceURN}/authorization/check", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientResourceAuthorizationCheck = IamClientResourceAuthorizationCheck;
class IamClientResourceTag {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Remove a tag from a resource */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/iam/resource/{resourceURN}/tag/{key}", params), buildRequestOptions(params, [], []));
    }
    /** Add a tag to a resource */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/iam/resource/{resourceURN}/tag", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientResourceTag = IamClientResourceTag;
class IamClientResourceGroup {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieve all resource groups */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/resourceGroup", params), buildRequestOptions(params, ["details"], []));
    }
    /** Iterate over Retrieve all resource groups. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/iam/resourceGroup", params), buildRequestOptions(params, ["details"], []));
    }
    /** Load all pages for Retrieve all resource groups. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/iam/resourceGroup", params), buildRequestOptions(params, ["details"], []));
    }
    /** Create a new resource group */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/iam/resourceGroup", params), buildRequestOptions(params, [], []));
    }
    /** Delete the given resource group */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/iam/resourceGroup/{groupId}", params), buildRequestOptions(params, [], []));
    }
    /** Retrieve the given resource group */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/iam/resourceGroup/{groupId}", params), buildRequestOptions(params, ["details"], []));
    }
    /** Update an existing resource group */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/iam/resourceGroup/{groupId}", params), buildRequestOptions(params, [], []));
    }
}
exports.IamClientResourceGroup = IamClientResourceGroup;
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
