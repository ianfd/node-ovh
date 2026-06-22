"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendQuery = appendQuery;
function appendQuery(url, query) {
    if (!query) {
        return;
    }
    for (const [key, value] of Object.entries(query)) {
        appendQueryValue(url, key, value);
    }
}
function appendQueryValue(url, key, value) {
    if (value === undefined || value === null) {
        return;
    }
    if (Array.isArray(value)) {
        for (const item of value) {
            appendQueryValue(url, key, item);
        }
        return;
    }
    if (value instanceof Date) {
        url.searchParams.append(key, value.toISOString());
        return;
    }
    if (typeof value === 'object') {
        url.searchParams.append(key, JSON.stringify(value));
        return;
    }
    url.searchParams.append(key, String(value));
}
