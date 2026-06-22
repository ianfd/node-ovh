"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationClientRouting = exports.NotificationClientReference = exports.NotificationClientHistoryAttachment = exports.NotificationClientHistory = exports.NotificationClientContactMeanValidate = exports.NotificationClientContactMeanTask = exports.NotificationClientContactMeanRestartValidation = exports.NotificationClientContactMean = exports.NotificationClient = void 0;
const path_1 = require("../../../core/path");
class NotificationClient {
    client;
    contactMean;
    history;
    reference;
    routing;
    constructor(client) {
        this.client = client;
        this.contactMean = new NotificationClientContactMean(client);
        this.history = new NotificationClientHistory(client);
        this.reference = new NotificationClientReference(client);
        this.routing = new NotificationClientRouting(client);
    }
}
exports.NotificationClient = NotificationClient;
class NotificationClientContactMean {
    client;
    restartValidation;
    task;
    validate;
    constructor(client) {
        this.client = client;
        this.restartValidation = new NotificationClientContactMeanRestartValidation(client);
        this.task = new NotificationClientContactMeanTask(client);
        this.validate = new NotificationClientContactMeanValidate(client);
    }
    /** Retrieve every contact mean */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/contactMean", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Retrieve every contact mean. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/notification/contactMean", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Retrieve every contact mean. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/notification/contactMean", params), buildRequestOptions(params, [], []));
    }
    /** Create a contact mean */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/notification/contactMean", params), buildRequestOptions(params, [], []));
    }
    /** Delete the contact mean */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}", params), buildRequestOptions(params, [], []));
    }
    /** Retrieve information about a contact mean */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}", params), buildRequestOptions(params, [], []));
    }
    /** Update a contact mean */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}", params), buildRequestOptions(params, [], []));
    }
}
exports.NotificationClientContactMean = NotificationClientContactMean;
class NotificationClientContactMeanRestartValidation {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Restart the validation process for this contact mean, if you did not receive the OTP */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}/restartValidation", params), buildRequestOptions(params, [], []));
    }
}
exports.NotificationClientContactMeanRestartValidation = NotificationClientContactMeanRestartValidation;
class NotificationClientContactMeanTask {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get the list of tasks on a contact mean */
    list(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Get the list of tasks on a contact mean. */
    iterate(params) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Get the list of tasks on a contact mean. */
    listAll(params) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}/task", params), buildRequestOptions(params, [], []));
    }
    /** Get a task on a contact mean */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
    /** Update a task on a contact mean */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}/task/{taskId}", params), buildRequestOptions(params, [], []));
    }
}
exports.NotificationClientContactMeanTask = NotificationClientContactMeanTask;
class NotificationClientContactMeanValidate {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Validate this contact mean */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/notification/contactMean/{contactMeanId}/validate", params), buildRequestOptions(params, [], []));
    }
}
exports.NotificationClientContactMeanValidate = NotificationClientContactMeanValidate;
class NotificationClientHistory {
    client;
    attachment;
    constructor(client) {
        this.client = client;
        this.attachment = new NotificationClientHistoryAttachment(client);
    }
    /** Retrieve every notification sent to you */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/history", params), buildRequestOptions(params, ["category", "createdAfter", "createdBefore", "priority", "sortCreatedAt", "titleContains", "withSummary"], []));
    }
    /** Iterate over Retrieve every notification sent to you. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/notification/history", params), buildRequestOptions(params, ["category", "createdAfter", "createdBefore", "priority", "sortCreatedAt", "titleContains", "withSummary"], []));
    }
    /** Load all pages for Retrieve every notification sent to you. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/notification/history", params), buildRequestOptions(params, ["category", "createdAfter", "createdBefore", "priority", "sortCreatedAt", "titleContains", "withSummary"], []));
    }
    /** Retrieve information about a notification sent to you */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/history/{notificationId}", params), buildRequestOptions(params, [], []));
    }
}
exports.NotificationClientHistory = NotificationClientHistory;
class NotificationClientHistoryAttachment {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get a notification attachment */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/history/{notificationId}/attachment/{attachmentName}", params), buildRequestOptions(params, [], []));
    }
}
exports.NotificationClientHistoryAttachment = NotificationClientHistoryAttachment;
class NotificationClientReference {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieve data referential for /notification endpoints */
    get(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/reference", params), buildRequestOptions(params, [], []));
    }
}
exports.NotificationClientReference = NotificationClientReference;
class NotificationClientRouting {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Retrieve every routing */
    list(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/routing", params), buildRequestOptions(params, [], []));
    }
    /** Iterate over Retrieve every routing. */
    iterate(params = {}) {
        return this.client.iterate("GET", (0, path_1.encodePath)("/notification/routing", params), buildRequestOptions(params, [], []));
    }
    /** Load all pages for Retrieve every routing. */
    listAll(params = {}) {
        return this.client.listAll("GET", (0, path_1.encodePath)("/notification/routing", params), buildRequestOptions(params, [], []));
    }
    /** Create a routing */
    create(params) {
        return this.client.request("POST", (0, path_1.encodePath)("/notification/routing", params), buildRequestOptions(params, [], []));
    }
    /** Delete the routing */
    delete(params) {
        return this.client.request("DELETE", (0, path_1.encodePath)("/notification/routing/{routingId}", params), buildRequestOptions(params, [], []));
    }
    /** Retrieve information about a routing */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/notification/routing/{routingId}", params), buildRequestOptions(params, [], []));
    }
    /** Update a routing */
    update(params) {
        return this.client.request("PUT", (0, path_1.encodePath)("/notification/routing/{routingId}", params), buildRequestOptions(params, [], []));
    }
}
exports.NotificationClientRouting = NotificationClientRouting;
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
