"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodePath = encodePath;
function encodePath(path, params) {
    const values = params;
    return path.replace(/\{([^}]+)\}/g, (_, name) => {
        const value = values[name];
        if (value === undefined) {
            throw new Error(`Missing path parameter: ${name}`);
        }
        return encodeURIComponent(String(value));
    });
}
