"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OkmsClientResourceServiceKey = exports.OkmsClientResourceSecretConfig = exports.OkmsClientResourceSecretVersion = exports.OkmsClientResourceSecret = exports.OkmsClientResourceLogUrl = exports.OkmsClientResourceLogSubscription = exports.OkmsClientResourceLogKind = exports.OkmsClientResourceLog = exports.OkmsClientResourceCredential = exports.OkmsClientResource = exports.OkmsClientReferenceServiceKey = exports.OkmsClientReferenceSecretConfig = exports.OkmsClientReferenceRegions = exports.OkmsClientReference = exports.OkmsClient = void 0;
const path_1 = require("../../../core/path");
class OkmsClient {
    client;
    reference;
    resource;
    constructor(client) {
        this.client = client;
        this.reference = new OkmsClientReference(client);
        this.resource = new OkmsClientResource(client);
    }
}
exports.OkmsClient = OkmsClient;
class OkmsClientReference {
    client;
    regions;
    secretConfig;
    serviceKey;
    constructor(client) {
        this.client = client;
        this.regions = new OkmsClientReferenceRegions(client);
        this.secretConfig = new OkmsClientReferenceSecretConfig(client);
        this.serviceKey = new OkmsClientReferenceServiceKey(client);
    }
}
exports.OkmsClientReference = OkmsClientReference;
class OkmsClientReferenceRegions {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available regions */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/reference/regions", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available regions. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/okms/reference/regions", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available regions. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/okms/reference/regions", params), buildRequestOptions(params, [], []));
    }
}
exports.OkmsClientReferenceRegions = OkmsClientReferenceRegions;
class OkmsClientReferenceSecretConfig {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get secret engine default configuration */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/reference/secretConfig", params), buildRequestOptions(params, ["region"], []));
    }
}
exports.OkmsClientReferenceSecretConfig = OkmsClientReferenceSecretConfig;
class OkmsClientReferenceServiceKey {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get service key type, size, curve and operations combination */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/reference/serviceKey", params), buildRequestOptions(params, ["region"], []));
    }
    /** Iterate over Get service key type, size, curve and operations combination. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/okms/reference/serviceKey", params), buildRequestOptions(params, ["region"], []));
    }
    /** Load all pages for Get service key type, size, curve and operations combination. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/okms/reference/serviceKey", params), buildRequestOptions(params, ["region"], []));
    }
}
exports.OkmsClientReferenceServiceKey = OkmsClientReferenceServiceKey;
class OkmsClientResource {
    client;
    credential;
    log;
    secret;
    secretConfig;
    serviceKey;
    constructor(client) {
        this.client = client;
        this.credential = new OkmsClientResourceCredential(client);
        this.log = new OkmsClientResourceLog(client);
        this.secret = new OkmsClientResourceSecret(client);
        this.secretConfig = new OkmsClientResourceSecretConfig(client);
        this.serviceKey = new OkmsClientResourceServiceKey(client);
    }
    /** List OVHcloud KMS services */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List OVHcloud KMS services. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/okms/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List OVHcloud KMS services. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/okms/resource", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Get an OVHcloud KMS service */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}", params), buildRequestOptions(params, ["publicCA"], []));
    }
    /** Update an OVHcloud KMS service */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/okms/resource/{okmsId}", params), buildRequestOptions(params, [], []));
    }
}
exports.OkmsClientResource = OkmsClientResource;
class OkmsClientResourceCredential {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all access credentials */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/credential", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all access credentials. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/credential", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all access credentials. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/credential", params), buildRequestOptions(params, [], []));
    }
    /** Request a new access credential */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/okms/resource/{okmsId}/credential", params), buildRequestOptions(params, [], []));
    }
    /** Revoke and delete an access credential */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/okms/resource/{okmsId}/credential/{credentialId}", params), buildRequestOptions(params, [], []));
    }
    /** Get an access credential */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/credential/{credentialId}", params), buildRequestOptions(params, [], []));
    }
}
exports.OkmsClientResourceCredential = OkmsClientResourceCredential;
class OkmsClientResourceLog {
    client;
    kind;
    subscription;
    url;
    constructor(client) {
        this.client = client;
        this.kind = new OkmsClientResourceLogKind(client);
        this.subscription = new OkmsClientResourceLogSubscription(client);
        this.url = new OkmsClientResourceLogUrl(client);
    }
}
exports.OkmsClientResourceLog = OkmsClientResourceLog;
class OkmsClientResourceLogKind {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available log kinds */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/kind", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available log kinds. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/kind", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available log kinds. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/kind", params), buildRequestOptions(params, [], []));
    }
    /** Get a log kind */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/kind/{name}", params), buildRequestOptions(params, [], []));
    }
}
exports.OkmsClientResourceLogKind = OkmsClientResourceLogKind;
class OkmsClientResourceLogSubscription {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List subscription IDs for a cluster */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/subscription", params), buildRequestOptions(params, ["kind"], []));
    }
    /** Iterate over List subscription IDs for a cluster. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/subscription", params), buildRequestOptions(params, ["kind"], []));
    }
    /** Load all pages for List subscription IDs for a cluster. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/subscription", params), buildRequestOptions(params, ["kind"], []));
    }
    /** Create a subscription from logs to a pre-existing LDP stream */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/subscription", params), buildRequestOptions(params, [], []));
    }
    /** Delete a subscription */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/subscription/{subscriptionId}", params), buildRequestOptions(params, [], []));
    }
    /** Get subscription details */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/subscription/{subscriptionId}", params), buildRequestOptions(params, [], []));
    }
}
exports.OkmsClientResourceLogSubscription = OkmsClientResourceLogSubscription;
class OkmsClientResourceLogUrl {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Generate a temporary URL to retrieve logs */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/okms/resource/{okmsId}/log/url", params), buildRequestOptions(params, [], []));
    }
}
exports.OkmsClientResourceLogUrl = OkmsClientResourceLogUrl;
class OkmsClientResourceSecret {
    client;
    version;
    constructor(client) {
        this.client = client;
        this.version = new OkmsClientResourceSecretVersion(client);
    }
    /** List all secrets */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List all secrets. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List all secrets. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Create a secret */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret", params), buildRequestOptions(params, [], []));
    }
    /** Delete a secret and all its versions */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret/{path}", params), buildRequestOptions(params, [], []));
    }
    /** Retrieve a secret */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret/{path}", params), buildRequestOptions(params, ["includeData", "version"], []));
    }
    /** Update a secret */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret/{path}", params), buildRequestOptions(params, ["cas"], []));
    }
}
exports.OkmsClientResourceSecret = OkmsClientResourceSecret;
class OkmsClientResourceSecretVersion {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List the versions of a secret */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret/{path}/version", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List the versions of a secret. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret/{path}/version", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List the versions of a secret. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret/{path}/version", params), buildRequestOptions(params, [], []));
    }
    /** Create a secret version */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret/{path}/version", params), buildRequestOptions(params, ["cas"], []));
    }
    /** Retrieve a secret version */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret/{path}/version/{version}", params), buildRequestOptions(params, ["includeData"], []));
    }
    /** Update the state of a secret version */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/okms/resource/{okmsId}/secret/{path}/version/{version}", params), buildRequestOptions(params, [], []));
    }
}
exports.OkmsClientResourceSecretVersion = OkmsClientResourceSecretVersion;
class OkmsClientResourceSecretConfig {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieve secrets configuration */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/secretConfig", params), buildRequestOptions(params, [], []));
    }
    /** Update secrets configuration */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/okms/resource/{okmsId}/secretConfig", params), buildRequestOptions(params, [], []));
    }
}
exports.OkmsClientResourceSecretConfig = OkmsClientResourceSecretConfig;
class OkmsClientResourceServiceKey {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all keys */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/serviceKey", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List all keys. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/serviceKey", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List all keys. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/serviceKey", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Create or import a service key */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/okms/resource/{okmsId}/serviceKey", params), buildRequestOptions(params, [], []));
    }
    /** Delete the given service key */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/okms/resource/{okmsId}/serviceKey/{keyId}", params), buildRequestOptions(params, [], []));
    }
    /** Retrieve a key */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/okms/resource/{okmsId}/serviceKey/{keyId}", params), buildRequestOptions(params, ["format"], []));
    }
    /** Update a service key */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/okms/resource/{okmsId}/serviceKey/{keyId}", params), buildRequestOptions(params, [], []));
    }
}
exports.OkmsClientResourceServiceKey = OkmsClientResourceServiceKey;
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
