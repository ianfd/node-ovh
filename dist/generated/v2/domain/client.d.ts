import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommonTask, DomainAlldomWithIAM, DomainDomain, DomainDomainWithIAM, DomainResourceCurrentStateAdditionalStatesEnum, DomainResourceCurrentStateMainStateEnum, DomainResourceCurrentStateSuspensionStateEnum, DomainTaskAdditionalDetails, IamResourceTagFilter } from './types';
export interface AlldomListParams extends PaginatedListOptions {
    iamTags?: Record<string, IamResourceTagFilter[]>;
}
export interface AlldomGetParams extends RequestOptions {
    alldomName: string;
}
export interface AlldomTaskListParams extends PaginatedListOptions {
    alldomName: string;
}
export interface AlldomTaskGetParams extends RequestOptions {
    alldomName: string;
    taskId: string;
}
export interface NameListParams extends PaginatedListOptions {
    additionalStates?: DomainResourceCurrentStateAdditionalStatesEnum[];
    contactAdministrator?: string[];
    contactBilling?: string[];
    contactOwner?: string[];
    contactTechnical?: string[];
    iamTags?: Record<string, IamResourceTagFilter[]>;
    mainState?: DomainResourceCurrentStateMainStateEnum[];
    searchValue?: string;
    suspensionState?: DomainResourceCurrentStateSuspensionStateEnum[];
}
export interface NameGetParams extends RequestOptions {
    domainName: string;
}
export interface NameUpdateParams extends RequestOptions {
    domainName: string;
    body: DomainDomain;
}
export interface NameTaskListParams extends PaginatedListOptions {
    domainName: string;
}
export interface NameTaskGetParams extends RequestOptions {
    domainName: string;
    taskId: string;
}
export interface NameTaskUpdateParams extends RequestOptions {
    domainName: string;
    taskId: string;
    body: DomainTaskAdditionalDetails;
}
export declare class DomainClient {
    private readonly client;
    readonly alldom: DomainClientAlldom;
    readonly name: DomainClientName;
    constructor(client: OvhClient);
}
export declare class DomainClientAlldom {
    private readonly client;
    readonly task: DomainClientAlldomTask;
    constructor(client: OvhClient);
    /** List all the AllDom resources */
    list(params?: AlldomListParams): Promise<DomainAlldomWithIAM[]>;
    /** Iterate over List all the AllDom resources. */
    iterate(params?: AlldomListParams): AsyncGenerator<DomainAlldomWithIAM, void, void>;
    /** Load all pages for List all the AllDom resources. */
    listAll(params?: AlldomListParams): Promise<DomainAlldomWithIAM[]>;
    /** Get an AllDom resource */
    get(params: AlldomGetParams): Promise<DomainAlldomWithIAM>;
}
export declare class DomainClientAlldomTask {
    private readonly client;
    constructor(client: OvhClient);
    /** List tasks related to a managed AllDom resource */
    list(params: AlldomTaskListParams): Promise<CommonTask[]>;
    /** Iterate over List tasks related to a managed AllDom resource. */
    iterate(params: AlldomTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for List tasks related to a managed AllDom resource. */
    listAll(params: AlldomTaskListParams): Promise<CommonTask[]>;
    /** Get a specific task related to a managed AllDom resource */
    get(params: AlldomTaskGetParams): Promise<CommonTask>;
}
export declare class DomainClientName {
    private readonly client;
    readonly task: DomainClientNameTask;
    constructor(client: OvhClient);
    /** List all domain name resources */
    list(params?: NameListParams): Promise<DomainDomainWithIAM[]>;
    /** Iterate over List all domain name resources. */
    iterate(params?: NameListParams): AsyncGenerator<DomainDomainWithIAM, void, void>;
    /** Load all pages for List all domain name resources. */
    listAll(params?: NameListParams): Promise<DomainDomainWithIAM[]>;
    /** Get a domain name resource */
    get(params: NameGetParams): Promise<DomainDomainWithIAM>;
    /** Update an existing domain name by modifying various configurations through the targetSpec */
    update(params: NameUpdateParams): Promise<DomainDomain>;
}
export declare class DomainClientNameTask {
    private readonly client;
    constructor(client: OvhClient);
    /** List tasks related to a managed domain name resource */
    list(params: NameTaskListParams): Promise<CommonTask[]>;
    /** Iterate over List tasks related to a managed domain name resource. */
    iterate(params: NameTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for List tasks related to a managed domain name resource. */
    listAll(params: NameTaskListParams): Promise<CommonTask[]>;
    /** Get a specific task related to a managed domain name resource */
    get(params: NameTaskGetParams): Promise<CommonTask>;
    /** Update a domain name task with additional details */
    update(params: NameTaskUpdateParams): Promise<CommonTask>;
}
//# sourceMappingURL=client.d.ts.map