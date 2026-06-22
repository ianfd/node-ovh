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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZimbraTypes = exports.WebhostingTypes = exports.VrackServicesTypes = exports.VmwareCloudDirectorTypes = exports.VideocenterTypes = exports.PublicCloudTypes = exports.OkmsTypes = exports.NotificationTypes = exports.NetworkDefenseTypes = exports.ManagedCMSTypes = exports.LocationTypes = exports.IamTypes = exports.FinopsTypes = exports.DomainTypes = exports.CommercialCatalogTypes = exports.BackupServicesTypes = exports.AccountTypes = exports.ZimbraClient = exports.WebhostingClient = exports.VrackServicesClient = exports.VmwareCloudDirectorClient = exports.VideocenterClient = exports.PublicCloudClient = exports.OkmsClient = exports.NotificationClient = exports.NetworkDefenseClient = exports.ManagedCMSClient = exports.LocationClient = exports.IamClient = exports.FinopsClient = exports.DomainClient = exports.CommercialCatalogClient = exports.BackupServicesClient = exports.AccountClient = void 0;
var client_1 = require("./account/client");
Object.defineProperty(exports, "AccountClient", { enumerable: true, get: function () { return client_1.AccountClient; } });
var client_2 = require("./backupServices/client");
Object.defineProperty(exports, "BackupServicesClient", { enumerable: true, get: function () { return client_2.BackupServicesClient; } });
var client_3 = require("./commercialCatalog/client");
Object.defineProperty(exports, "CommercialCatalogClient", { enumerable: true, get: function () { return client_3.CommercialCatalogClient; } });
var client_4 = require("./domain/client");
Object.defineProperty(exports, "DomainClient", { enumerable: true, get: function () { return client_4.DomainClient; } });
var client_5 = require("./finops/client");
Object.defineProperty(exports, "FinopsClient", { enumerable: true, get: function () { return client_5.FinopsClient; } });
var client_6 = require("./iam/client");
Object.defineProperty(exports, "IamClient", { enumerable: true, get: function () { return client_6.IamClient; } });
var client_7 = require("./location/client");
Object.defineProperty(exports, "LocationClient", { enumerable: true, get: function () { return client_7.LocationClient; } });
var client_8 = require("./managedCMS/client");
Object.defineProperty(exports, "ManagedCMSClient", { enumerable: true, get: function () { return client_8.ManagedCMSClient; } });
var client_9 = require("./networkDefense/client");
Object.defineProperty(exports, "NetworkDefenseClient", { enumerable: true, get: function () { return client_9.NetworkDefenseClient; } });
var client_10 = require("./notification/client");
Object.defineProperty(exports, "NotificationClient", { enumerable: true, get: function () { return client_10.NotificationClient; } });
var client_11 = require("./okms/client");
Object.defineProperty(exports, "OkmsClient", { enumerable: true, get: function () { return client_11.OkmsClient; } });
var client_12 = require("./publicCloud/client");
Object.defineProperty(exports, "PublicCloudClient", { enumerable: true, get: function () { return client_12.PublicCloudClient; } });
var client_13 = require("./videocenter/client");
Object.defineProperty(exports, "VideocenterClient", { enumerable: true, get: function () { return client_13.VideocenterClient; } });
var client_14 = require("./vmwareCloudDirector/client");
Object.defineProperty(exports, "VmwareCloudDirectorClient", { enumerable: true, get: function () { return client_14.VmwareCloudDirectorClient; } });
var client_15 = require("./vrackServices/client");
Object.defineProperty(exports, "VrackServicesClient", { enumerable: true, get: function () { return client_15.VrackServicesClient; } });
var client_16 = require("./webhosting/client");
Object.defineProperty(exports, "WebhostingClient", { enumerable: true, get: function () { return client_16.WebhostingClient; } });
var client_17 = require("./zimbra/client");
Object.defineProperty(exports, "ZimbraClient", { enumerable: true, get: function () { return client_17.ZimbraClient; } });
exports.AccountTypes = __importStar(require("./account/types"));
exports.BackupServicesTypes = __importStar(require("./backupServices/types"));
exports.CommercialCatalogTypes = __importStar(require("./commercialCatalog/types"));
exports.DomainTypes = __importStar(require("./domain/types"));
exports.FinopsTypes = __importStar(require("./finops/types"));
exports.IamTypes = __importStar(require("./iam/types"));
exports.LocationTypes = __importStar(require("./location/types"));
exports.ManagedCMSTypes = __importStar(require("./managedCMS/types"));
exports.NetworkDefenseTypes = __importStar(require("./networkDefense/types"));
exports.NotificationTypes = __importStar(require("./notification/types"));
exports.OkmsTypes = __importStar(require("./okms/types"));
exports.PublicCloudTypes = __importStar(require("./publicCloud/types"));
exports.VideocenterTypes = __importStar(require("./videocenter/types"));
exports.VmwareCloudDirectorTypes = __importStar(require("./vmwareCloudDirector/types"));
exports.VrackServicesTypes = __importStar(require("./vrackServices/types"));
exports.WebhostingTypes = __importStar(require("./webhosting/types"));
exports.ZimbraTypes = __importStar(require("./zimbra/types"));
