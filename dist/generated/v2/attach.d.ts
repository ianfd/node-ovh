import type { OvhClient } from '../../core/client';
import { AccountClient } from './account/client';
import { BackupServicesClient } from './backupServices/client';
import { CommercialCatalogClient } from './commercialCatalog/client';
import { DomainClient } from './domain/client';
import { FinopsClient } from './finops/client';
import { IamClient } from './iam/client';
import { LocationClient } from './location/client';
import { ManagedCMSClient } from './managedCMS/client';
import { NetworkDefenseClient } from './networkDefense/client';
import { NotificationClient } from './notification/client';
import { OkmsClient } from './okms/client';
import { PublicCloudClient } from './publicCloud/client';
import { VideocenterClient } from './videocenter/client';
import { VmwareCloudDirectorClient } from './vmwareCloudDirector/client';
import { VrackServicesClient } from './vrackServices/client';
import { WebhostingClient } from './webhosting/client';
import { ZimbraClient } from './zimbra/client';
export interface GeneratedClients {
    account: AccountClient;
    backupServices: BackupServicesClient;
    commercialCatalog: CommercialCatalogClient;
    domain: DomainClient;
    finops: FinopsClient;
    iam: IamClient;
    location: LocationClient;
    managedCMS: ManagedCMSClient;
    networkDefense: NetworkDefenseClient;
    notification: NotificationClient;
    okms: OkmsClient;
    publicCloud: PublicCloudClient;
    videocenter: VideocenterClient;
    vmwareCloudDirector: VmwareCloudDirectorClient;
    vrackServices: VrackServicesClient;
    webhosting: WebhostingClient;
    zimbra: ZimbraClient;
}
export declare function createGeneratedClients(client: OvhClient): GeneratedClients;
//# sourceMappingURL=attach.d.ts.map