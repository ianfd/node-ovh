"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2ClientCredentialsAuth = exports.oauth2 = exports.LegacyApplicationKeyAuth = exports.legacyApplicationKey = exports.OvhApiError = exports.OvhClient = void 0;
var client_1 = require("./core/client");
Object.defineProperty(exports, "OvhClient", { enumerable: true, get: function () { return client_1.OvhClient; } });
var errors_1 = require("./core/errors");
Object.defineProperty(exports, "OvhApiError", { enumerable: true, get: function () { return errors_1.OvhApiError; } });
var auth_1 = require("./core/auth");
Object.defineProperty(exports, "legacyApplicationKey", { enumerable: true, get: function () { return auth_1.legacyApplicationKey; } });
Object.defineProperty(exports, "LegacyApplicationKeyAuth", { enumerable: true, get: function () { return auth_1.LegacyApplicationKeyAuth; } });
Object.defineProperty(exports, "oauth2", { enumerable: true, get: function () { return auth_1.oauth2; } });
Object.defineProperty(exports, "OAuth2ClientCredentialsAuth", { enumerable: true, get: function () { return auth_1.OAuth2ClientCredentialsAuth; } });
__exportStar(require("./object-storage/client"), exports);
__exportStar(require("./generated/v2"), exports);
