"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicCloudClientReferenceRancherVersion = exports.PublicCloudClientReferenceRancherPlan = exports.PublicCloudClientReferenceRancher = exports.PublicCloudClientReference = exports.PublicCloudClientProjectStorageBlockVolume = exports.PublicCloudClientProjectStorageBlockSnapshot = exports.PublicCloudClientProjectStorageBlockBackup = exports.PublicCloudClientProjectStorageBlock = exports.PublicCloudClientProjectStorage = exports.PublicCloudClientProjectReferenceRegion = exports.PublicCloudClientProjectReferenceRancherVersion = exports.PublicCloudClientProjectReferenceRancherPlan = exports.PublicCloudClientProjectReferenceRancherEligibility = exports.PublicCloudClientProjectReferenceRancher = exports.PublicCloudClientProjectReference = exports.PublicCloudClientProjectRancherTask = exports.PublicCloudClientProjectRancherEvent = exports.PublicCloudClientProjectRancherCapabilitiesVersion = exports.PublicCloudClientProjectRancherCapabilitiesPlan = exports.PublicCloudClientProjectRancherCapabilities = exports.PublicCloudClientProjectRancherAdminCredentials = exports.PublicCloudClientProjectRancher = exports.PublicCloudClientProject = exports.PublicCloudClient = void 0;
const path_1 = require("../../../core/path");
class PublicCloudClient {
    client;
    project;
    reference;
    constructor(client) {
        this.client = client;
        this.project = new PublicCloudClientProject(client);
        this.reference = new PublicCloudClientReference(client);
    }
}
exports.PublicCloudClient = PublicCloudClient;
class PublicCloudClientProject {
    client;
    rancher;
    reference;
    storage;
    constructor(client) {
        this.client = client;
        this.rancher = new PublicCloudClientProjectRancher(client);
        this.reference = new PublicCloudClientProjectReference(client);
        this.storage = new PublicCloudClientProjectStorage(client);
    }
    /** List all Public Cloud projects */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Iterate over List all Public Cloud projects. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Load all pages for List all Public Cloud projects. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project", params), buildRequestOptions(params, ["iamTags"], []));
    }
    /** Get details on a Public Cloud project */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProject = PublicCloudClientProject;
class PublicCloudClientProjectRancher {
    client;
    adminCredentials;
    capabilities;
    event;
    task;
    constructor(client) {
        this.client = client;
        this.adminCredentials = new PublicCloudClientProjectRancherAdminCredentials(client);
        this.capabilities = new PublicCloudClientProjectRancherCapabilities(client);
        this.event = new PublicCloudClientProjectRancherEvent(client);
        this.task = new PublicCloudClientProjectRancherTask(client);
    }
    /** List managed Rancher services */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List managed Rancher services. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List managed Rancher services. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher", params), buildRequestOptions(params, [], []));
    }
    /** Create a new managed Rancher service */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher", params), buildRequestOptions(params, [], []));
    }
    /** Delete a managed Rancher service */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}", params), buildRequestOptions(params, [], []));
    }
    /** Get a managed Rancher service */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}", params), buildRequestOptions(params, [], []));
    }
    /** Update an existing managed Rancher service */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectRancher = PublicCloudClientProjectRancher;
class PublicCloudClientProjectRancherAdminCredentials {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Reset the admin password */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/adminCredentials", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectRancherAdminCredentials = PublicCloudClientProjectRancherAdminCredentials;
class PublicCloudClientProjectRancherCapabilities {
    client;
    plan;
    version;
    constructor(client) {
        this.client = client;
        this.plan = new PublicCloudClientProjectRancherCapabilitiesPlan(client);
        this.version = new PublicCloudClientProjectRancherCapabilitiesVersion(client);
    }
}
exports.PublicCloudClientProjectRancherCapabilities = PublicCloudClientProjectRancherCapabilities;
class PublicCloudClientProjectRancherCapabilitiesPlan {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available and current plans for the given managed Rancher service */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/capabilities/plan", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available and current plans for the given managed Rancher service. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/capabilities/plan", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available and current plans for the given managed Rancher service. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/capabilities/plan", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectRancherCapabilitiesPlan = PublicCloudClientProjectRancherCapabilitiesPlan;
class PublicCloudClientProjectRancherCapabilitiesVersion {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available and current versions for the given managed Rancher service */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/capabilities/version", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available and current versions for the given managed Rancher service. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/capabilities/version", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available and current versions for the given managed Rancher service. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/capabilities/version", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectRancherCapabilitiesVersion = PublicCloudClientProjectRancherCapabilitiesVersion;
class PublicCloudClientProjectRancherEvent {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all events related to the managed Rancher service */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/event", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all events related to the managed Rancher service. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/event", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all events related to the managed Rancher service. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/event", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectRancherEvent = PublicCloudClientProjectRancherEvent;
class PublicCloudClientProjectRancherTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List all asynchronous operations related to the managed Rancher service */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List all asynchronous operations related to the managed Rancher service. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List all asynchronous operations related to the managed Rancher service. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get a specific task related to the managed Rancher service */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/rancher/{rancherId}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectRancherTask = PublicCloudClientProjectRancherTask;
class PublicCloudClientProjectReference {
    client;
    rancher;
    region;
    constructor(client) {
        this.client = client;
        this.rancher = new PublicCloudClientProjectReferenceRancher(client);
        this.region = new PublicCloudClientProjectReferenceRegion(client);
    }
}
exports.PublicCloudClientProjectReference = PublicCloudClientProjectReference;
class PublicCloudClientProjectReferenceRancher {
    client;
    eligibility;
    plan;
    version;
    constructor(client) {
        this.client = client;
        this.eligibility = new PublicCloudClientProjectReferenceRancherEligibility(client);
        this.plan = new PublicCloudClientProjectReferenceRancherPlan(client);
        this.version = new PublicCloudClientProjectReferenceRancherVersion(client);
    }
}
exports.PublicCloudClientProjectReferenceRancher = PublicCloudClientProjectReferenceRancher;
class PublicCloudClientProjectReferenceRancherEligibility {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available eligibility for creating a managed Rancher service */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/rancher/eligibility", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectReferenceRancherEligibility = PublicCloudClientProjectReferenceRancherEligibility;
class PublicCloudClientProjectReferenceRancherPlan {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available plans for creating a managed Rancher service */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/rancher/plan", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available plans for creating a managed Rancher service. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/rancher/plan", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available plans for creating a managed Rancher service. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/rancher/plan", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectReferenceRancherPlan = PublicCloudClientProjectReferenceRancherPlan;
class PublicCloudClientProjectReferenceRancherVersion {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available versions for creating a managed Rancher service */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/rancher/version", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available versions for creating a managed Rancher service. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/rancher/version", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available versions for creating a managed Rancher service. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/rancher/version", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectReferenceRancherVersion = PublicCloudClientProjectReferenceRancherVersion;
class PublicCloudClientProjectReferenceRegion {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available regions */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/region", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available regions. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/region", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available regions. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/region", params), buildRequestOptions(params, [], []));
    }
    /** Get a region */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/reference/region/{name}", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectReferenceRegion = PublicCloudClientProjectReferenceRegion;
class PublicCloudClientProjectStorage {
    client;
    block;
    constructor(client) {
        this.client = client;
        this.block = new PublicCloudClientProjectStorageBlock(client);
    }
}
exports.PublicCloudClientProjectStorage = PublicCloudClientProjectStorage;
class PublicCloudClientProjectStorageBlock {
    client;
    backup;
    snapshot;
    volume;
    constructor(client) {
        this.client = client;
        this.backup = new PublicCloudClientProjectStorageBlockBackup(client);
        this.snapshot = new PublicCloudClientProjectStorageBlockSnapshot(client);
        this.volume = new PublicCloudClientProjectStorageBlockVolume(client);
    }
}
exports.PublicCloudClientProjectStorageBlock = PublicCloudClientProjectStorageBlock;
class PublicCloudClientProjectStorageBlockBackup {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List Public Cloud block storage backups */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/backup", params), buildRequestOptions(params, ["volumeId"], []));
    }
    /** Iterate over List Public Cloud block storage backups. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/backup", params), buildRequestOptions(params, ["volumeId"], []));
    }
    /** Load all pages for List Public Cloud block storage backups. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/backup", params), buildRequestOptions(params, ["volumeId"], []));
    }
    /** Create a new Public Cloud block storage backup */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/backup", params), buildRequestOptions(params, [], []));
    }
    /** Delete a Public Cloud block storage backup */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/backup/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Get a Public Cloud block storage backup */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/backup/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Update an existing Public Cloud block storage backup */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/backup/{id}", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectStorageBlockBackup = PublicCloudClientProjectStorageBlockBackup;
class PublicCloudClientProjectStorageBlockSnapshot {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List Public Cloud block storage volume snapshots */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/snapshot", params), buildRequestOptions(params, ["volumeId"], []));
    }
    /** Iterate over List Public Cloud block storage volume snapshots. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/snapshot", params), buildRequestOptions(params, ["volumeId"], []));
    }
    /** Load all pages for List Public Cloud block storage volume snapshots. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/snapshot", params), buildRequestOptions(params, ["volumeId"], []));
    }
    /** Create a new Public Cloud block storage volume snapshot */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/snapshot", params), buildRequestOptions(params, [], []));
    }
    /** Delete a Public Cloud block storage volume snapshot */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/snapshot/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Get a Public Cloud block storage volume snapshot */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/snapshot/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Update an existing Public Cloud block storage volume snapshot */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/snapshot/{id}", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectStorageBlockSnapshot = PublicCloudClientProjectStorageBlockSnapshot;
class PublicCloudClientProjectStorageBlockVolume {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List Public Cloud block storage volumes */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/volume", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List Public Cloud block storage volumes. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/volume", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List Public Cloud block storage volumes. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/volume", params), buildRequestOptions(params, [], []));
    }
    /** Create a new Public Cloud block storage volume */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/volume", params), buildRequestOptions(params, [], []));
    }
    /** Delete a Public Cloud block storage volume */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/volume/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Get a Public Cloud block storage volume */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/volume/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Update an existing Public Cloud block storage volume */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/publicCloud/project/{projectId}/storage/block/volume/{id}", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientProjectStorageBlockVolume = PublicCloudClientProjectStorageBlockVolume;
class PublicCloudClientReference {
    client;
    rancher;
    constructor(client) {
        this.client = client;
        this.rancher = new PublicCloudClientReferenceRancher(client);
    }
}
exports.PublicCloudClientReference = PublicCloudClientReference;
class PublicCloudClientReferenceRancher {
    client;
    plan;
    version;
    constructor(client) {
        this.client = client;
        this.plan = new PublicCloudClientReferenceRancherPlan(client);
        this.version = new PublicCloudClientReferenceRancherVersion(client);
    }
}
exports.PublicCloudClientReferenceRancher = PublicCloudClientReferenceRancher;
class PublicCloudClientReferenceRancherPlan {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available plans for creating a managed Rancher service */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/reference/rancher/plan", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available plans for creating a managed Rancher service. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/reference/rancher/plan", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available plans for creating a managed Rancher service. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/reference/rancher/plan", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientReferenceRancherPlan = PublicCloudClientReferenceRancherPlan;
class PublicCloudClientReferenceRancherVersion {
    client;
    constructor(client) {
        this.client = client;
    }
    /** List available versions for creating a managed Rancher service */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/publicCloud/reference/rancher/version", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List available versions for creating a managed Rancher service. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/publicCloud/reference/rancher/version", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List available versions for creating a managed Rancher service. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/publicCloud/reference/rancher/version", params), buildRequestOptions(params, [], []));
    }
}
exports.PublicCloudClientReferenceRancherVersion = PublicCloudClientReferenceRancherVersion;
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
