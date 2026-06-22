"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinopsClientBucketExportTask = exports.FinopsClientBucketExportEvent = exports.FinopsClientBucketExport = exports.FinopsClient = void 0;
const path_1 = require("../../../core/path");
class FinopsClient {
    client;
    bucketExport;
    constructor(client) {
        this.client = client;
        this.bucketExport = new FinopsClientBucketExport(client);
    }
}
exports.FinopsClient = FinopsClient;
class FinopsClientBucketExport {
    client;
    event;
    task;
    constructor(client) {
        this.client = client;
        this.event = new FinopsClientBucketExportEvent(client);
        this.task = new FinopsClientBucketExportTask(client);
    }
    /** List FinOps bucket export configurations. The target bucket must be S3™*-compatible */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/finops/bucketExport", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over List FinOps bucket export configurations. The target bucket must be S3™*-compatible. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/finops/bucketExport", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for List FinOps bucket export configurations. The target bucket must be S3™*-compatible. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/finops/bucketExport", params), buildRequestOptions(params, [], []));
    }
    /** Create a FinOps bucket export configuration. The target bucket must be S3™*-compatible */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/finops/bucketExport", params), buildRequestOptions(params, [], []));
    }
    /** Delete a FinOps bucket export configuration. The target bucket must be S3™*-compatible */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/finops/bucketExport/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Get a FinOps bucket export configuration. The target bucket must be S3™*-compatible */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/finops/bucketExport/{id}", params), buildRequestOptions(params, [], []));
    }
    /** Modify a FinOps bucket export configuration. The target bucket must be S3™*-compatible */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/finops/bucketExport/{id}", params), buildRequestOptions(params, [], []));
    }
}
exports.FinopsClientBucketExport = FinopsClientBucketExport;
class FinopsClientBucketExportEvent {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get a list of events */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/finops/bucketExport/{id}/event", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Get a list of events. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/finops/bucketExport/{id}/event", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Get a list of events. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/finops/bucketExport/{id}/event", params), buildRequestOptions(params, [], []));
    }
}
exports.FinopsClientBucketExportEvent = FinopsClientBucketExportEvent;
class FinopsClientBucketExportTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get a list of tasks */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/finops/bucketExport/{id}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Get a list of tasks. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/finops/bucketExport/{id}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Get a list of tasks. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/finops/bucketExport/{id}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get a single task */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/finops/bucketExport/{id}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.FinopsClientBucketExportTask = FinopsClientBucketExportTask;
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
