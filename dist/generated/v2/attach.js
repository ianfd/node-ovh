"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedClients = createGeneratedClients;
const client_1 = require("./account/client");
const client_2 = require("./backupServices/client");
const client_3 = require("./commercialCatalog/client");
const client_4 = require("./domain/client");
const client_5 = require("./finops/client");
const client_6 = require("./iam/client");
const client_7 = require("./location/client");
const client_8 = require("./managedCMS/client");
const client_9 = require("./networkDefense/client");
const client_10 = require("./notification/client");
const client_11 = require("./okms/client");
const client_12 = require("./publicCloud/client");
const client_13 = require("./videocenter/client");
const client_14 = require("./vmwareCloudDirector/client");
const client_15 = require("./vrackServices/client");
const client_16 = require("./webhosting/client");
const client_17 = require("./zimbra/client");
function createGeneratedClients(client) {
    return {
        account: new client_1.AccountClient(client),
        backupServices: new client_2.BackupServicesClient(client),
        commercialCatalog: new client_3.CommercialCatalogClient(client),
        domain: new client_4.DomainClient(client),
        finops: new client_5.FinopsClient(client),
        iam: new client_6.IamClient(client),
        location: new client_7.LocationClient(client),
        managedCMS: new client_8.ManagedCMSClient(client),
        networkDefense: new client_9.NetworkDefenseClient(client),
        notification: new client_10.NotificationClient(client),
        okms: new client_11.OkmsClient(client),
        publicCloud: new client_12.PublicCloudClient(client),
        videocenter: new client_13.VideocenterClient(client),
        vmwareCloudDirector: new client_14.VmwareCloudDirectorClient(client),
        vrackServices: new client_15.VrackServicesClient(client),
        webhosting: new client_16.WebhostingClient(client),
        zimbra: new client_17.ZimbraClient(client),
    };
}
