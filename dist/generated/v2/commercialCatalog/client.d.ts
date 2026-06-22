import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommercialCatalogMerchantEnum, CommercialCatalogOffer, CommercialCatalogOfferNatureEnum, CommercialCatalogOfferStateEnum, CommercialCatalogOfferTypeEnum } from './types';
export interface OffersListParams extends PaginatedListOptions {
    merchants?: CommercialCatalogMerchantEnum[];
    nature?: CommercialCatalogOfferNatureEnum;
    productCode?: string;
    state?: CommercialCatalogOfferStateEnum[];
    technicalRequirements?: string[];
    type?: CommercialCatalogOfferTypeEnum;
}
export interface OffersGetParams extends RequestOptions {
    id: string;
}
export declare class CommercialCatalogClient {
    private readonly client;
    readonly offers: CommercialCatalogClientOffers;
    constructor(client: OvhClient);
}
export declare class CommercialCatalogClientOffers {
    private readonly client;
    constructor(client: OvhClient);
    /** List all offers */
    list(params?: OffersListParams): Promise<CommercialCatalogOffer[]>;
    /** Iterate over List all offers. */
    iterate(params?: OffersListParams): AsyncGenerator<CommercialCatalogOffer, void, void>;
    /** Load all pages for List all offers. */
    listAll(params?: OffersListParams): Promise<CommercialCatalogOffer[]>;
    /** Get details of an offer */
    get(params: OffersGetParams): Promise<CommercialCatalogOffer>;
}
//# sourceMappingURL=client.d.ts.map