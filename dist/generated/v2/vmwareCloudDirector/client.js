"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VmwareCloudDirectorClientReferenceRegion = exports.VmwareCloudDirectorClientReference = exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegmentTask = exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegment = exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterTask = exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterStorage = exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterOrderableResource = exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterCompute = exports.VmwareCloudDirectorClientOrganizationVirtualDataCenter = exports.VmwareCloudDirectorClientOrganizationTask = exports.VmwareCloudDirectorClientOrganizationPassword = exports.VmwareCloudDirectorClientOrganizationNetworkAcl = exports.VmwareCloudDirectorClientOrganization = exports.VmwareCloudDirectorClientMigration = exports.VmwareCloudDirectorClientBackupTask = exports.VmwareCloudDirectorClientBackup = exports.VmwareCloudDirectorClient = void 0;
const path_1 = require("../../../core/path");
class VmwareCloudDirectorClient {
    client;
    backup;
    migration;
    organization;
    reference;
    constructor(client) {
        this.client = client;
        this.backup = new VmwareCloudDirectorClientBackup(client);
        this.migration = new VmwareCloudDirectorClientMigration(client);
        this.organization = new VmwareCloudDirectorClientOrganization(client);
        this.reference = new VmwareCloudDirectorClientReference(client);
    }
}
exports.VmwareCloudDirectorClient = VmwareCloudDirectorClient;
class VmwareCloudDirectorClientBackup {
    client;
    task;
    constructor(client) {
        this.client = client;
        this.task = new VmwareCloudDirectorClientBackupTask(client);
    }
    /** List VMware Cloud Director Backup services */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/backup", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List VMware Cloud Director Backup services. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/backup", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List VMware Cloud Director Backup services. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/backup", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Get VMware Cloud Director Backup service */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/backup/{backupId}", params), buildRequestOptions(params, [], []));
    }
    /** Update VMware Cloud Director Backup service */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/vmwareCloudDirector/backup/{backupId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientBackup = VmwareCloudDirectorClientBackup;
class VmwareCloudDirectorClientBackupTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all asynchronous operations related to the VMware Cloud Director backup service */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/backup/{backupId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all asynchronous operations related to the VMware Cloud Director backup service. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/backup/{backupId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all asynchronous operations related to the VMware Cloud Director backup service. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/backup/{backupId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get a specific task related to the VMware Cloud Director backup service */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/backup/{backupId}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientBackupTask = VmwareCloudDirectorClientBackupTask;
class VmwareCloudDirectorClientMigration {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List VMware Cloud Director Migration services */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/migration", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List VMware Cloud Director Migration services. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/migration", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List VMware Cloud Director Migration services. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/migration", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Status of VMware Cloud Director Migration Service */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/migration/{migrationId}", params), buildRequestOptions(params, [], []));
    }
    /** Update VMware Cloud Director Migration Service */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/vmwareCloudDirector/migration/{migrationId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientMigration = VmwareCloudDirectorClientMigration;
class VmwareCloudDirectorClientOrganization {
    client;
    networkAcl;
    password;
    task;
    virtualDataCenter;
    constructor(client) {
        this.client = client;
        this.networkAcl = new VmwareCloudDirectorClientOrganizationNetworkAcl(client);
        this.password = new VmwareCloudDirectorClientOrganizationPassword(client);
        this.task = new VmwareCloudDirectorClientOrganizationTask(client);
        this.virtualDataCenter = new VmwareCloudDirectorClientOrganizationVirtualDataCenter(client);
    }
    /** List VMware Cloud Director organizations */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List VMware Cloud Director organizations. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List VMware Cloud Director organizations. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Get VMware Cloud Director organization details */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}", params), buildRequestOptions(params, [], []));
    }
    /** Update VMware Cloud Director organization details */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganization = VmwareCloudDirectorClientOrganization;
class VmwareCloudDirectorClientOrganizationNetworkAcl {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List organization network access control list resources */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/networkAcl", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List organization network access control list resources. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/networkAcl", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List organization network access control list resources. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/networkAcl", params), buildRequestOptions(params, [], []));
    }
    /** Get organization network access control list resources */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/networkAcl/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Update organization network access control list resources */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/networkAcl/{id}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationNetworkAcl = VmwareCloudDirectorClientOrganizationNetworkAcl;
class VmwareCloudDirectorClientOrganizationPassword {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Reset the VMware Cloud Director organization administrator password */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/password", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationPassword = VmwareCloudDirectorClientOrganizationPassword;
class VmwareCloudDirectorClientOrganizationTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all asynchronous operations related to the VMware Cloud Director resources */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all asynchronous operations related to the VMware Cloud Director resources. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all asynchronous operations related to the VMware Cloud Director resources. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get a specific task related to the VMware Cloud Director resources */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationTask = VmwareCloudDirectorClientOrganizationTask;
class VmwareCloudDirectorClientOrganizationVirtualDataCenter {
    client;
    compute;
    orderableResource;
    storage;
    task;
    vrackSegment;
    constructor(client) {
        this.client = client;
        this.compute = new VmwareCloudDirectorClientOrganizationVirtualDataCenterCompute(client);
        this.orderableResource = new VmwareCloudDirectorClientOrganizationVirtualDataCenterOrderableResource(client);
        this.storage = new VmwareCloudDirectorClientOrganizationVirtualDataCenterStorage(client);
        this.task = new VmwareCloudDirectorClientOrganizationVirtualDataCenterTask(client);
        this.vrackSegment = new VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegment(client);
    }
    /** List all organization Virtual DataCenters */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List all organization Virtual DataCenters. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List all organization Virtual DataCenters. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Get organization Virtual DataCenter details */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}", params), buildRequestOptions(params, [], []));
    }
    /** Update organization Virtual DataCenter details */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationVirtualDataCenter = VmwareCloudDirectorClientOrganizationVirtualDataCenter;
class VmwareCloudDirectorClientOrganizationVirtualDataCenterCompute {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List organization Virtual DataCenter associated compute resources */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List organization Virtual DataCenter associated compute resources. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List organization Virtual DataCenter associated compute resources. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute", params), buildRequestOptions(params, [], []));
    }
    /** Delete compute resources associated with an organization's Virtual DataCenter */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute/{computeId}", params), buildRequestOptions(params, [], []));
    }
    /** Get organization Virtual DataCenter associated compute resources */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute/{computeId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterCompute = VmwareCloudDirectorClientOrganizationVirtualDataCenterCompute;
class VmwareCloudDirectorClientOrganizationVirtualDataCenterOrderableResource {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all orderable resources related to the organization Virtual DataCenter */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/orderableResource", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterOrderableResource = VmwareCloudDirectorClientOrganizationVirtualDataCenterOrderableResource;
class VmwareCloudDirectorClientOrganizationVirtualDataCenterStorage {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List organization Virtual DataCenter associated storage resources */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List organization Virtual DataCenter associated storage resources. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List organization Virtual DataCenter associated storage resources. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage", params), buildRequestOptions(params, [], []));
    }
    /** Delete organization Virtual DataCenter storage resource */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage/{storageId}", params), buildRequestOptions(params, [], []));
    }
    /** Get organization Virtual DataCenter associated storage resources */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage/{storageId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterStorage = VmwareCloudDirectorClientOrganizationVirtualDataCenterStorage;
class VmwareCloudDirectorClientOrganizationVirtualDataCenterTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all asynchronous operations related to the organization Virtual DataCenter resource */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all asynchronous operations related to the organization Virtual DataCenter resource. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all asynchronous operations related to the organization Virtual DataCenter resource. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get a specific task related to the organization Virtual DataCenter resource */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterTask = VmwareCloudDirectorClientOrganizationVirtualDataCenterTask;
class VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegment {
    client;
    task;
    constructor(client) {
        this.client = client;
        this.task = new VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegmentTask(client);
    }
    /** List organization Virtual DataCenter associated vrack segment resources */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List organization Virtual DataCenter associated vrack segment resources. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List organization Virtual DataCenter associated vrack segment resources. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment", params), buildRequestOptions(params, [], []));
    }
    /** Delete VMware Cloud Director vrack segment resources */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Get organization Virtual DataCenter associated vrack segment resources */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Update VMware Cloud Director vrack segment resources */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegment = VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegment;
class VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegmentTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get a specific task related to the organization Virtual DataCenter vRack segment resource */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegmentTask = VmwareCloudDirectorClientOrganizationVirtualDataCenterVrackSegmentTask;
class VmwareCloudDirectorClientReference {
    client;
    region;
    constructor(client) {
        this.client = client;
        this.region = new VmwareCloudDirectorClientReferenceRegion(client);
    }
}
exports.VmwareCloudDirectorClientReference = VmwareCloudDirectorClientReference;
class VmwareCloudDirectorClientReferenceRegion {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get region details */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/vmwareCloudDirector/reference/region", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Get region details. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/vmwareCloudDirector/reference/region", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Get region details. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/vmwareCloudDirector/reference/region", params), buildRequestOptions(params, [], []));
    }
}
exports.VmwareCloudDirectorClientReferenceRegion = VmwareCloudDirectorClientReferenceRegion;
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
