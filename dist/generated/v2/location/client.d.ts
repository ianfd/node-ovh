import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommonLanguageEnum, LocationLocation, LocationServicesEnum, LocationSpecificTypeEnum, LocationTypeEnum } from './types';
export interface RootListParams extends PaginatedListOptions {
    availabilityZone?: string;
    cityCode?: string;
    cityName?: string;
    code?: string;
    countryCode?: string;
    countryName?: string;
    datacenter?: string;
    geographyCode?: string;
    geographyName?: string;
    ids?: number[];
    language?: CommonLanguageEnum;
    location?: string;
    name?: string;
    services?: LocationServicesEnum;
    specificType?: LocationSpecificTypeEnum;
    type?: LocationTypeEnum;
}
export interface RootGetParams extends RequestOptions {
    name: string;
}
export declare class LocationClient {
    private readonly client;
    readonly root: LocationClientRoot;
    constructor(client: OvhClient);
}
export declare class LocationClientRoot {
    private readonly client;
    constructor(client: OvhClient);
    /** List available regions and their availability zones */
    list(params?: RootListParams): Promise<LocationLocation[]>;
    /** Iterate over List available regions and their availability zones. */
    iterate(params?: RootListParams): AsyncGenerator<LocationLocation, void, void>;
    /** Load all pages for List available regions and their availability zones. */
    listAll(params?: RootListParams): Promise<LocationLocation[]>;
    /** Get available region and its availability zones */
    get(params: RootGetParams): Promise<LocationLocation>;
}
//# sourceMappingURL=client.d.ts.map