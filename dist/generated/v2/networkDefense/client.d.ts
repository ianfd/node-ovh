import type { OvhClient } from '../../../core/client';
import type { RequestOptions } from '../../../core/types';
import type { NetworkDefenseRegionEnum, NetworkDefenseVacEventsResponse, NetworkDefenseVacTrafficResponse } from './types';
export interface VacEventGetParams extends RequestOptions {
    after?: string;
    before?: string;
    ongoingOnly?: boolean;
    region?: NetworkDefenseRegionEnum;
    subnets?: string[];
}
export interface VacTrafficGetParams extends RequestOptions {
    after: string;
    before?: string;
    subnet: string;
}
export declare class NetworkDefenseClient {
    private readonly client;
    readonly vac: NetworkDefenseClientVac;
    constructor(client: OvhClient);
}
export declare class NetworkDefenseClientVac {
    private readonly client;
    readonly event: NetworkDefenseClientVacEvent;
    readonly traffic: NetworkDefenseClientVacTraffic;
    constructor(client: OvhClient);
}
export declare class NetworkDefenseClientVacEvent {
    private readonly client;
    constructor(client: OvhClient);
    /** Get all Network Defense events */
    get(params?: VacEventGetParams): Promise<NetworkDefenseVacEventsResponse>;
}
export declare class NetworkDefenseClientVacTraffic {
    private readonly client;
    constructor(client: OvhClient);
    /** Get all Network Defense traffic statistics */
    get(params: VacTrafficGetParams): Promise<NetworkDefenseVacTrafficResponse>;
}
//# sourceMappingURL=client.d.ts.map