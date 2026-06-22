"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkDefenseClientVacTraffic = exports.NetworkDefenseClientVacEvent = exports.NetworkDefenseClientVac = exports.NetworkDefenseClient = void 0;
const path_1 = require("../../../core/path");
class NetworkDefenseClient {
    client;
    vac;
    constructor(client) {
        this.client = client;
        this.vac = new NetworkDefenseClientVac(client);
    }
}
exports.NetworkDefenseClient = NetworkDefenseClient;
class NetworkDefenseClientVac {
    client;
    event;
    traffic;
    constructor(client) {
        this.client = client;
        this.event = new NetworkDefenseClientVacEvent(client);
        this.traffic = new NetworkDefenseClientVacTraffic(client);
    }
}
exports.NetworkDefenseClientVac = NetworkDefenseClientVac;
class NetworkDefenseClientVacEvent {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get all Network Defense events */
    get(params = {}) {
        return this.client.request("GET", (0, path_1.encodePath)("/networkDefense/vac/event", params), buildRequestOptions(params, ["after", "before", "ongoingOnly", "region", "subnets"], []));
    }
}
exports.NetworkDefenseClientVacEvent = NetworkDefenseClientVacEvent;
class NetworkDefenseClientVacTraffic {
    client;
    constructor(client) {
        this.client = client;
    }
    /** Get all Network Defense traffic statistics */
    get(params) {
        return this.client.request("GET", (0, path_1.encodePath)("/networkDefense/vac/traffic", params), buildRequestOptions(params, ["after", "before", "subnet"], []));
    }
}
exports.NetworkDefenseClientVacTraffic = NetworkDefenseClientVacTraffic;
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
