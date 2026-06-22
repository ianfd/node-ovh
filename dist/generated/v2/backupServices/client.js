"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupServicesClientTenantVspcManagementAgent = exports.BackupServicesClientTenantVspcBackupPolicies = exports.BackupServicesClientTenantVspcBackupAgent = exports.BackupServicesClientTenantVspc = exports.BackupServicesClientTenantVault = exports.BackupServicesClientTenant = exports.BackupServicesClient = void 0;
const path_1 = require("../../../core/path");
class BackupServicesClient {
    client;
    tenant;
    constructor(client) {
        this.client = client;
        this.tenant = new BackupServicesClientTenant(client);
    }
}
exports.BackupServicesClient = BackupServicesClient;
class BackupServicesClientTenant {
    client;
    vault;
    vspc;
    constructor(client) {
        this.client = client;
        this.vault = new BackupServicesClientTenantVault(client);
        this.vspc = new BackupServicesClientTenantVspc(client);
    }
    /** Retrieves the backup tenants you manage */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over Retrieves the backup tenants you manage. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/backupServices/tenant", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for Retrieves the backup tenants you manage. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/backupServices/tenant", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Retrieves the details of your backup tenant */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}", params), buildRequestOptions(params, [], []));
    }
}
exports.BackupServicesClientTenant = BackupServicesClientTenant;
class BackupServicesClientTenantVault {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Lists vaults for your tenant */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vault", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over Lists vaults for your tenant. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vault", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for Lists vaults for your tenant. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vault", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Retrieves specific vault details */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vault/{vaultId}", params), buildRequestOptions(params, [], []));
    }
    /** Updates vault display name and cloud repository */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vault/{vaultId}", params), buildRequestOptions(params, [], []));
    }
}
exports.BackupServicesClientTenantVault = BackupServicesClientTenantVault;
class BackupServicesClientTenantVspc {
    client;
    backupAgent;
    backupPolicies;
    managementAgent;
    constructor(client) {
        this.client = client;
        this.backupAgent = new BackupServicesClientTenantVspcBackupAgent(client);
        this.backupPolicies = new BackupServicesClientTenantVspcBackupPolicies(client);
        this.managementAgent = new BackupServicesClientTenantVspcManagementAgent(client);
    }
    /** Retrieves list of VSPC tenants */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over Retrieves list of VSPC tenants. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for Retrieves list of VSPC tenants. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Retrieves details of a specific VSPC tenant */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}", params), buildRequestOptions(params, [], []));
    }
    /** Updates the display name of a VSPC tenant */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}", params), buildRequestOptions(params, [], []));
    }
}
exports.BackupServicesClientTenantVspc = BackupServicesClientTenantVspc;
class BackupServicesClientTenantVspcBackupAgent {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Lists backup agents */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Lists backup agents. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Lists backup agents. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent", params), buildRequestOptions(params, [], []));
    }
    /** Creates backup agent */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent", params), buildRequestOptions(params, [], []));
    }
    /** Deletes backup agent */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent/{backupAgentId}", params), buildRequestOptions(params, [], []));
    }
    /** Gets specific backup agent details */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent/{backupAgentId}", params), buildRequestOptions(params, [], []));
    }
    /** Updates backup agent */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupAgent/{backupAgentId}", params), buildRequestOptions(params, [], []));
    }
}
exports.BackupServicesClientTenantVspcBackupAgent = BackupServicesClientTenantVspcBackupAgent;
class BackupServicesClientTenantVspcBackupPolicies {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieves the list of backup policies available in your VSPC */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupPolicies", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Retrieves the list of backup policies available in your VSPC. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupPolicies", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Retrieves the list of backup policies available in your VSPC. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/backupPolicies", params), buildRequestOptions(params, [], []));
    }
}
exports.BackupServicesClientTenantVspcBackupPolicies = BackupServicesClientTenantVspcBackupPolicies;
class BackupServicesClientTenantVspcManagementAgent {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieves the download link for the management agent */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/backupServices/tenant/{backupServicesId}/vspc/{vspcTenantId}/managementAgent", params), buildRequestOptions(params, [], []));
    }
}
exports.BackupServicesClientTenantVspcManagementAgent = BackupServicesClientTenantVspcManagementAgent;
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
