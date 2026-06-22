"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZimbraClientPlatformTask = exports.ZimbraClientPlatformSlot = exports.ZimbraClientPlatformRefreshQuotaUsage = exports.ZimbraClientPlatformRedirection = exports.ZimbraClientPlatformOrganization = exports.ZimbraClientPlatformDomain = exports.ZimbraClientPlatformDiagnosticDomain = exports.ZimbraClientPlatformDiagnostic = exports.ZimbraClientPlatformAlias = exports.ZimbraClientPlatformAccount = exports.ZimbraClientPlatform = exports.ZimbraClient = void 0;
const path_1 = require("../../../core/path");
class ZimbraClient {
    client;
    platform;
    constructor(client) {
        this.client = client;
        this.platform = new ZimbraClientPlatform(client);
    }
}
exports.ZimbraClient = ZimbraClient;
class ZimbraClientPlatform {
    client;
    account;
    alias;
    diagnostic;
    domain;
    organization;
    redirection;
    refreshQuotaUsage;
    slot;
    task;
    constructor(client) {
        this.client = client;
        this.account = new ZimbraClientPlatformAccount(client);
        this.alias = new ZimbraClientPlatformAlias(client);
        this.diagnostic = new ZimbraClientPlatformDiagnostic(client);
        this.domain = new ZimbraClientPlatformDomain(client);
        this.organization = new ZimbraClientPlatformOrganization(client);
        this.redirection = new ZimbraClientPlatformRedirection(client);
        this.refreshQuotaUsage = new ZimbraClientPlatformRefreshQuotaUsage(client);
        this.slot = new ZimbraClientPlatformSlot(client);
        this.task = new ZimbraClientPlatformTask(client);
    }
    /** Get a list of Zimbra Platforms */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform", params), buildRequestOptions(params, ["iamTags", "projectId"], []));
    }
    /** Iterate over Get a list of Zimbra Platforms. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/zimbra/platform", params), buildRequestOptions(params, ["iamTags", "projectId"], []));
    }
    /** Load all pages for Get a list of Zimbra Platforms. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/zimbra/platform", params), buildRequestOptions(params, ["iamTags", "projectId"], []));
    }
    /** Get a Zimbra Platform */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}", params), buildRequestOptions(params, [], []));
    }
    /** Modify a platform */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/zimbra/platform/{platformId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ZimbraClientPlatform = ZimbraClientPlatform;
class ZimbraClientPlatformAccount {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get list of accounts */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/account", params), buildRequestOptions(params, ["domainId", "email", "offer", "organizationId", "organizationLabel"], []));
    }
    /** Iterate over Get list of accounts. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/account", params), buildRequestOptions(params, ["domainId", "email", "offer", "organizationId", "organizationLabel"], []));
    }
    /** Load all pages for Get list of accounts. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/account", params), buildRequestOptions(params, ["domainId", "email", "offer", "organizationId", "organizationLabel"], []));
    }
    /** Create an account */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/zimbra/platform/{platformId}/account", params), buildRequestOptions(params, [], []));
    }
    /** Delete an account */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/zimbra/platform/{platformId}/account/{accountId}", params), buildRequestOptions(params, [], []));
    }
    /** Get an account */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/account/{accountId}", params), buildRequestOptions(params, [], []));
    }
    /** Modify an account */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/zimbra/platform/{platformId}/account/{accountId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ZimbraClientPlatformAccount = ZimbraClientPlatformAccount;
class ZimbraClientPlatformAlias {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieve the list of platform aliases */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/alias", params), buildRequestOptions(params, ["alias", "aliasOrganizationId", "aliasOrganizationLabel", "aliasTargetId"], []));
    }
    /** Iterate over Retrieve the list of platform aliases. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/alias", params), buildRequestOptions(params, ["alias", "aliasOrganizationId", "aliasOrganizationLabel", "aliasTargetId"], []));
    }
    /** Load all pages for Retrieve the list of platform aliases. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/alias", params), buildRequestOptions(params, ["alias", "aliasOrganizationId", "aliasOrganizationLabel", "aliasTargetId"], []));
    }
    /** Create an alias */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/zimbra/platform/{platformId}/alias", params), buildRequestOptions(params, [], []));
    }
    /** Delete an alias */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/zimbra/platform/{platformId}/alias/{aliasId}", params), buildRequestOptions(params, [], []));
    }
    /** Retrieve a platform alias */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/alias/{aliasId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ZimbraClientPlatformAlias = ZimbraClientPlatformAlias;
class ZimbraClientPlatformDiagnostic {
    client;
    domain;
    constructor(client) {
        this.client = client;
        this.domain = new ZimbraClientPlatformDiagnosticDomain(client);
    }
}
exports.ZimbraClientPlatformDiagnostic = ZimbraClientPlatformDiagnostic;
class ZimbraClientPlatformDiagnosticDomain {
    client;
    constructor(client) {
        this.client = client;
    }
    /** /zimbra/platform/{platformId}/diagnostic/domain */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/zimbra/platform/{platformId}/diagnostic/domain", params), buildRequestOptions(params, [], []));
    }
}
exports.ZimbraClientPlatformDiagnosticDomain = ZimbraClientPlatformDiagnosticDomain;
class ZimbraClientPlatformDomain {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get list of domains */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/domain", params), buildRequestOptions(params, ["domainName", "organizationId", "organizationLabel"], []));
    }
    /** Iterate over Get list of domains. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/domain", params), buildRequestOptions(params, ["domainName", "organizationId", "organizationLabel"], []));
    }
    /** Load all pages for Get list of domains. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/domain", params), buildRequestOptions(params, ["domainName", "organizationId", "organizationLabel"], []));
    }
    /** Create a domain */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/zimbra/platform/{platformId}/domain", params), buildRequestOptions(params, [], []));
    }
    /** Delete a domain */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/zimbra/platform/{platformId}/domain/{domainId}", params), buildRequestOptions(params, [], []));
    }
    /** Get a domain */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/domain/{domainId}", params), buildRequestOptions(params, [], []));
    }
    /** Modify a domain */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/zimbra/platform/{platformId}/domain/{domainId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ZimbraClientPlatformDomain = ZimbraClientPlatformDomain;
class ZimbraClientPlatformOrganization {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get list of organizations */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/organization", params), buildRequestOptions(params, ["organizationName"], []));
    }
    /** Iterate over Get list of organizations. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/organization", params), buildRequestOptions(params, ["organizationName"], []));
    }
    /** Load all pages for Get list of organizations. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/organization", params), buildRequestOptions(params, ["organizationName"], []));
    }
    /** Create an organization */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/zimbra/platform/{platformId}/organization", params), buildRequestOptions(params, [], []));
    }
    /** Delete an organization */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/zimbra/platform/{platformId}/organization/{organizationId}", params), buildRequestOptions(params, [], []));
    }
    /** Get an organization */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/organization/{organizationId}", params), buildRequestOptions(params, [], []));
    }
    /** Modify an organization */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/zimbra/platform/{platformId}/organization/{organizationId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ZimbraClientPlatformOrganization = ZimbraClientPlatformOrganization;
class ZimbraClientPlatformRedirection {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get a platform redirection list */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/redirection", params), buildRequestOptions(params, ["destination", "domainId", "organizationId", "source"], []));
    }
    /** Iterate over Get a platform redirection list. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/redirection", params), buildRequestOptions(params, ["destination", "domainId", "organizationId", "source"], []));
    }
    /** Load all pages for Get a platform redirection list. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/redirection", params), buildRequestOptions(params, ["destination", "domainId", "organizationId", "source"], []));
    }
    /** Create an redirection */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/zimbra/platform/{platformId}/redirection", params), buildRequestOptions(params, [], []));
    }
    /** Delete an redirection */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/zimbra/platform/{platformId}/redirection/{redirectionId}", params), buildRequestOptions(params, [], []));
    }
    /** Get a platform redirection */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/redirection/{redirectionId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ZimbraClientPlatformRedirection = ZimbraClientPlatformRedirection;
class ZimbraClientPlatformRefreshQuotaUsage {
    client;
    constructor(client) {
        this.client = client;
    }
    /** /zimbra/platform/{platformId}/refreshQuotaUsage */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/zimbra/platform/{platformId}/refreshQuotaUsage", params), buildRequestOptions(params, [], []));
    }
}
exports.ZimbraClientPlatformRefreshQuotaUsage = ZimbraClientPlatformRefreshQuotaUsage;
class ZimbraClientPlatformSlot {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get a platform slot list */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/slot", params), buildRequestOptions(params, ["accountId", "billingStatus", "email", "offer", "used"], []));
    }
    /** Iterate over Get a platform slot list. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/slot", params), buildRequestOptions(params, ["accountId", "billingStatus", "email", "offer", "used"], []));
    }
    /** Load all pages for Get a platform slot list. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/slot", params), buildRequestOptions(params, ["accountId", "billingStatus", "email", "offer", "used"], []));
    }
    /** Get a platform slot */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/slot/{slotId}", params), buildRequestOptions(params, [], []));
    }
}
exports.ZimbraClientPlatformSlot = ZimbraClientPlatformSlot;
class ZimbraClientPlatformTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get a list of platform tasks */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/task", params), buildRequestOptions(params, ["organizationId", "organizationLabel"], []));
    }
    /** Iterate over Get a list of platform tasks. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/task", params), buildRequestOptions(params, ["organizationId", "organizationLabel"], []));
    }
    /** Load all pages for Get a list of platform tasks. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/zimbra/platform/{platformId}/task", params), buildRequestOptions(params, ["organizationId", "organizationLabel"], []));
    }
}
exports.ZimbraClientPlatformTask = ZimbraClientPlatformTask;
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
