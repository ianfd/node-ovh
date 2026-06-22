import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommonTask, IamResourceTagFilter, ZimbraAccountPostPayload, ZimbraAccountPutPayload, ZimbraAccountResponse, ZimbraAliasPostPayload, ZimbraAliasResponse, ZimbraDomainDiagnosisPostPayload, ZimbraDomainDiagnosisResponse, ZimbraDomainPostPayload, ZimbraDomainPutPayload, ZimbraDomainResponse, ZimbraOfferEnum, ZimbraOrganizationPostPayload, ZimbraOrganizationPutPayload, ZimbraOrganizationResponse, ZimbraPlatformPutPayload, ZimbraPlatformResponse, ZimbraPlatformResponseWithIAM, ZimbraRedirectionPostPayload, ZimbraRedirectionResponse, ZimbraSlotResponse } from './types';
export interface PlatformListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
    projectId?: string;
}
export interface PlatformGetParams extends RequestOptions {
    platformId: string;
}
export interface PlatformUpdateParams extends RequestOptions {
    platformId: string;
    body: ZimbraPlatformPutPayload;
}
export interface PlatformAccountListParams extends PaginatedListOptions {
    platformId: string;
    domainId?: string;
    email?: string;
    offer?: ZimbraOfferEnum;
    organizationId?: string;
    organizationLabel?: string;
}
export interface PlatformAccountCreateParams extends RequestOptions {
    platformId: string;
    body: ZimbraAccountPostPayload;
}
export interface PlatformAccountDeleteParams extends RequestOptions {
    accountId: string;
    platformId: string;
}
export interface PlatformAccountGetParams extends RequestOptions {
    accountId: string;
    platformId: string;
}
export interface PlatformAccountUpdateParams extends RequestOptions {
    accountId: string;
    platformId: string;
    body: ZimbraAccountPutPayload;
}
export interface PlatformAliasListParams extends PaginatedListOptions {
    platformId: string;
    alias?: string;
    aliasOrganizationId?: string;
    aliasOrganizationLabel?: string;
    aliasTargetId?: string;
}
export interface PlatformAliasCreateParams extends RequestOptions {
    platformId: string;
    body: ZimbraAliasPostPayload;
}
export interface PlatformAliasDeleteParams extends RequestOptions {
    aliasId: string;
    platformId: string;
}
export interface PlatformAliasGetParams extends RequestOptions {
    aliasId: string;
    platformId: string;
}
export interface PlatformDiagnosticDomainCreateParams extends RequestOptions {
    platformId: string;
    body: ZimbraDomainDiagnosisPostPayload;
}
export interface PlatformDomainListParams extends PaginatedListOptions {
    platformId: string;
    domainName?: string;
    organizationId?: string;
    organizationLabel?: string;
}
export interface PlatformDomainCreateParams extends RequestOptions {
    platformId: string;
    body: ZimbraDomainPostPayload;
}
export interface PlatformDomainDeleteParams extends RequestOptions {
    domainId: string;
    platformId: string;
}
export interface PlatformDomainGetParams extends RequestOptions {
    domainId: string;
    platformId: string;
}
export interface PlatformDomainUpdateParams extends RequestOptions {
    domainId: string;
    platformId: string;
    body: ZimbraDomainPutPayload;
}
export interface PlatformOrganizationListParams extends PaginatedListOptions {
    platformId: string;
    organizationName?: string;
}
export interface PlatformOrganizationCreateParams extends RequestOptions {
    platformId: string;
    body: ZimbraOrganizationPostPayload;
}
export interface PlatformOrganizationDeleteParams extends RequestOptions {
    organizationId: string;
    platformId: string;
}
export interface PlatformOrganizationGetParams extends RequestOptions {
    organizationId: string;
    platformId: string;
}
export interface PlatformOrganizationUpdateParams extends RequestOptions {
    organizationId: string;
    platformId: string;
    body: ZimbraOrganizationPutPayload;
}
export interface PlatformRedirectionListParams extends PaginatedListOptions {
    platformId: string;
    destination?: string;
    domainId?: string;
    organizationId?: string;
    source?: string;
}
export interface PlatformRedirectionCreateParams extends RequestOptions {
    platformId: string;
    body: ZimbraRedirectionPostPayload;
}
export interface PlatformRedirectionDeleteParams extends RequestOptions {
    platformId: string;
    redirectionId: string;
}
export interface PlatformRedirectionGetParams extends RequestOptions {
    platformId: string;
    redirectionId: string;
}
export interface PlatformRefreshQuotaUsageCreateParams extends RequestOptions {
    platformId: string;
}
export interface PlatformSlotListParams extends PaginatedListOptions {
    platformId: string;
    accountId?: string;
    billingStatus?: string;
    email?: string;
    offer?: string;
    used?: boolean;
}
export interface PlatformSlotGetParams extends RequestOptions {
    platformId: string;
    slotId: string;
}
export interface PlatformTaskListParams extends PaginatedListOptions {
    platformId: string;
    organizationId?: string;
    organizationLabel?: string;
}
export declare class ZimbraClient {
    private readonly client;
    readonly platform: ZimbraClientPlatform;
    constructor(client: OvhClient);
}
export declare class ZimbraClientPlatform {
    private readonly client;
    readonly account: ZimbraClientPlatformAccount;
    readonly alias: ZimbraClientPlatformAlias;
    readonly diagnostic: ZimbraClientPlatformDiagnostic;
    readonly domain: ZimbraClientPlatformDomain;
    readonly organization: ZimbraClientPlatformOrganization;
    readonly redirection: ZimbraClientPlatformRedirection;
    readonly refreshQuotaUsage: ZimbraClientPlatformRefreshQuotaUsage;
    readonly slot: ZimbraClientPlatformSlot;
    readonly task: ZimbraClientPlatformTask;
    constructor(client: OvhClient);
    /** Get a list of Zimbra Platforms */
    list(params?: PlatformListParams): Promise<ZimbraPlatformResponseWithIAM[]>;
    /** Iterate over Get a list of Zimbra Platforms. */
    iterate(params?: PlatformListParams): AsyncGenerator<ZimbraPlatformResponseWithIAM, void, void>;
    /** Load all pages for Get a list of Zimbra Platforms. */
    listAll(params?: PlatformListParams): Promise<ZimbraPlatformResponseWithIAM[]>;
    /** Get a Zimbra Platform */
    get(params: PlatformGetParams): Promise<ZimbraPlatformResponseWithIAM>;
    /** Modify a platform */
    update(params: PlatformUpdateParams): Promise<ZimbraPlatformResponse>;
}
export declare class ZimbraClientPlatformAccount {
    private readonly client;
    constructor(client: OvhClient);
    /** Get list of accounts */
    list(params: PlatformAccountListParams): Promise<ZimbraAccountResponse[]>;
    /** Iterate over Get list of accounts. */
    iterate(params: PlatformAccountListParams): AsyncGenerator<ZimbraAccountResponse, void, void>;
    /** Load all pages for Get list of accounts. */
    listAll(params: PlatformAccountListParams): Promise<ZimbraAccountResponse[]>;
    /** Create an account */
    create(params: PlatformAccountCreateParams): Promise<ZimbraAccountResponse>;
    /** Delete an account */
    delete(params: PlatformAccountDeleteParams): Promise<void>;
    /** Get an account */
    get(params: PlatformAccountGetParams): Promise<ZimbraAccountResponse>;
    /** Modify an account */
    update(params: PlatformAccountUpdateParams): Promise<ZimbraAccountResponse>;
}
export declare class ZimbraClientPlatformAlias {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieve the list of platform aliases */
    list(params: PlatformAliasListParams): Promise<ZimbraAliasResponse[]>;
    /** Iterate over Retrieve the list of platform aliases. */
    iterate(params: PlatformAliasListParams): AsyncGenerator<ZimbraAliasResponse, void, void>;
    /** Load all pages for Retrieve the list of platform aliases. */
    listAll(params: PlatformAliasListParams): Promise<ZimbraAliasResponse[]>;
    /** Create an alias */
    create(params: PlatformAliasCreateParams): Promise<ZimbraAliasResponse>;
    /** Delete an alias */
    delete(params: PlatformAliasDeleteParams): Promise<void>;
    /** Retrieve a platform alias */
    get(params: PlatformAliasGetParams): Promise<ZimbraAliasResponse>;
}
export declare class ZimbraClientPlatformDiagnostic {
    private readonly client;
    readonly domain: ZimbraClientPlatformDiagnosticDomain;
    constructor(client: OvhClient);
}
export declare class ZimbraClientPlatformDiagnosticDomain {
    private readonly client;
    constructor(client: OvhClient);
    /** /zimbra/platform/{platformId}/diagnostic/domain */
    create(params: PlatformDiagnosticDomainCreateParams): Promise<ZimbraDomainDiagnosisResponse[]>;
}
export declare class ZimbraClientPlatformDomain {
    private readonly client;
    constructor(client: OvhClient);
    /** Get list of domains */
    list(params: PlatformDomainListParams): Promise<ZimbraDomainResponse[]>;
    /** Iterate over Get list of domains. */
    iterate(params: PlatformDomainListParams): AsyncGenerator<ZimbraDomainResponse, void, void>;
    /** Load all pages for Get list of domains. */
    listAll(params: PlatformDomainListParams): Promise<ZimbraDomainResponse[]>;
    /** Create a domain */
    create(params: PlatformDomainCreateParams): Promise<ZimbraDomainResponse>;
    /** Delete a domain */
    delete(params: PlatformDomainDeleteParams): Promise<void>;
    /** Get a domain */
    get(params: PlatformDomainGetParams): Promise<ZimbraDomainResponse>;
    /** Modify a domain */
    update(params: PlatformDomainUpdateParams): Promise<ZimbraDomainResponse>;
}
export declare class ZimbraClientPlatformOrganization {
    private readonly client;
    constructor(client: OvhClient);
    /** Get list of organizations */
    list(params: PlatformOrganizationListParams): Promise<ZimbraOrganizationResponse[]>;
    /** Iterate over Get list of organizations. */
    iterate(params: PlatformOrganizationListParams): AsyncGenerator<ZimbraOrganizationResponse, void, void>;
    /** Load all pages for Get list of organizations. */
    listAll(params: PlatformOrganizationListParams): Promise<ZimbraOrganizationResponse[]>;
    /** Create an organization */
    create(params: PlatformOrganizationCreateParams): Promise<ZimbraOrganizationResponse>;
    /** Delete an organization */
    delete(params: PlatformOrganizationDeleteParams): Promise<void>;
    /** Get an organization */
    get(params: PlatformOrganizationGetParams): Promise<ZimbraOrganizationResponse>;
    /** Modify an organization */
    update(params: PlatformOrganizationUpdateParams): Promise<ZimbraOrganizationResponse>;
}
export declare class ZimbraClientPlatformRedirection {
    private readonly client;
    constructor(client: OvhClient);
    /** Get a platform redirection list */
    list(params: PlatformRedirectionListParams): Promise<ZimbraRedirectionResponse[]>;
    /** Iterate over Get a platform redirection list. */
    iterate(params: PlatformRedirectionListParams): AsyncGenerator<ZimbraRedirectionResponse, void, void>;
    /** Load all pages for Get a platform redirection list. */
    listAll(params: PlatformRedirectionListParams): Promise<ZimbraRedirectionResponse[]>;
    /** Create an redirection */
    create(params: PlatformRedirectionCreateParams): Promise<ZimbraRedirectionResponse>;
    /** Delete an redirection */
    delete(params: PlatformRedirectionDeleteParams): Promise<void>;
    /** Get a platform redirection */
    get(params: PlatformRedirectionGetParams): Promise<ZimbraRedirectionResponse>;
}
export declare class ZimbraClientPlatformRefreshQuotaUsage {
    private readonly client;
    constructor(client: OvhClient);
    /** /zimbra/platform/{platformId}/refreshQuotaUsage */
    create(params: PlatformRefreshQuotaUsageCreateParams): Promise<void>;
}
export declare class ZimbraClientPlatformSlot {
    private readonly client;
    constructor(client: OvhClient);
    /** Get a platform slot list */
    list(params: PlatformSlotListParams): Promise<ZimbraSlotResponse[]>;
    /** Iterate over Get a platform slot list. */
    iterate(params: PlatformSlotListParams): AsyncGenerator<ZimbraSlotResponse, void, void>;
    /** Load all pages for Get a platform slot list. */
    listAll(params: PlatformSlotListParams): Promise<ZimbraSlotResponse[]>;
    /** Get a platform slot */
    get(params: PlatformSlotGetParams): Promise<ZimbraSlotResponse>;
}
export declare class ZimbraClientPlatformTask {
    private readonly client;
    constructor(client: OvhClient);
    /** Get a list of platform tasks */
    list(params: PlatformTaskListParams): Promise<CommonTask[]>;
    /** Iterate over Get a list of platform tasks. */
    iterate(params: PlatformTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for Get a list of platform tasks. */
    listAll(params: PlatformTaskListParams): Promise<CommonTask[]>;
}
//# sourceMappingURL=client.d.ts.map