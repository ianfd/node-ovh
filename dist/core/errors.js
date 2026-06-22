"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OvhApiError = void 0;
class OvhApiError extends Error {
    name = 'OvhApiError';
    status;
    statusText;
    headers;
    queryId;
    body;
    constructor(options) {
        super(options.message);
        this.status = options.status;
        this.statusText = options.statusText;
        this.headers = options.headers;
        this.queryId = options.queryId;
        this.body = options.body;
    }
}
exports.OvhApiError = OvhApiError;
