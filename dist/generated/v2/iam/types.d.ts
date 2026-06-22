/** Log kind */
export interface DbaasLogsLogKind {
    additionalReturnedFields?: string[];
    createdAt?: string;
    displayName?: string;
    kindId?: string;
    name?: string;
    updatedAt?: string;
}
/** Log subscription */
export interface DbaasLogsLogSubscription {
    createdAt?: string;
    kind?: string;
    resource?: DbaasLogsLogSubscriptionResource;
    serviceName?: string;
    streamId?: string;
    subscriptionId?: string;
    updatedAt?: string;
}
/** Log subscription creation payload */
export interface DbaasLogsLogSubscriptionCreation {
    kind: string;
    streamId: string;
}
/** Log subscription resource */
export interface DbaasLogsLogSubscriptionResource {
    name?: string;
    type?: string;
}
/** Asynchronous operation after subscribing or unsubscribing to a resource logs */
export interface DbaasLogsLogSubscriptionResponse {
    operationId?: string;
    serviceName?: string;
}
/** Log temporary URL creation payload */
export interface DbaasLogsLogUrlCreation {
    kind: string;
}
/** Temporary url information */
export interface DbaasLogsTemporaryLogsLink {
    expirationDate?: string;
    url?: string;
}
/** Authorization request */
export interface IamAuthorizeBatchRequest {
    actions: string[];
    resourceURNs: string[];
}
/** Result of an authorization request */
export interface IamAuthorizeBatchResponse {
    authorizedActions?: string[];
    resourceURN?: string;
    unauthorizedActions?: string[];
}
/** Authorization request */
export interface IamAuthorizeRequest {
    actions: string[];
}
/** Result of an authorization request */
export interface IamAuthorizeResponse {
    authorizedActions?: string[];
    unauthorizedActions?: string[];
}
/** Properties needed to create a group */
export interface IamGroupCreation {
    name: string;
    resources?: IamGroupResource[];
}
/** Resource is an entity standing for a product. It is used for right delegation */
export interface IamGroupResource {
    displayName?: string | null;
    id?: string;
    name?: string | null;
    owner?: string | null;
    tags?: Record<string, string> | null;
    type?: string | null;
    urn?: string | null;
}
/** Group defines a set of resources */
export interface IamGroupResponse {
    createdAt?: string;
    id?: string;
    name?: string;
    owner?: string;
    readOnly?: boolean;
    resources?: IamGroupResource[];
    updatedAt?: string | null;
    urn?: string;
}
/** Fields to update for a given group */
export interface IamGroupUpdate {
    name: string;
    resources: IamGroupResource[];
}
/** Permissions group defines a re-usable set of permissions */
export interface IamPermissionsGroup {
    createdAt?: string;
    description: string;
    id?: string;
    name: string;
    owner?: string;
    permissions: IamPolicyPermissions;
    updatedAt?: string | null;
    urn?: string;
}
/** Action that can be allowed or denied on a resource */
export interface IamPolicyAction {
    action: string;
}
/** Condition included in a policy */
export interface IamPolicyCondition {
    conditions?: IamPolicyCondition[] | null;
    operator: IamPolicyConditionOperatorEnum;
    values?: Record<string, string> | null;
}
/** Operator that can be used in order to restrict policy */
export type IamPolicyConditionOperatorEnum = "AND" | "MATCH" | "NOT" | "OR";
/** Object describing a combinator operator (AND / OR etc ...) */
export interface IamPolicyConditionsCombinatorOperator {
    contract?: IamPolicyConditionsCombinatorOperatorContract;
    description?: string;
    operatorName?: IamPolicyConditionOperatorEnum;
}
/** Object describing the contract of this operator, that is how it be written */
export interface IamPolicyConditionsCombinatorOperatorContract {
    conditions?: boolean;
    maxConditions?: string | null;
    minConditions?: string | null;
    values?: boolean;
}
/** Object describing how to write a comparator operator, that is a final condition that should match OK/KO or not for a specific condition */
export interface IamPolicyConditionsComparatorOperator {
    description?: string | null;
    example?: string | null;
    functionDefinitions?: IamPolicyConditionsComparatorOperatorFunctionDefinition[];
    key?: string;
    matchingValuesFormat?: string | null;
    parameterType?: string | null;
    template?: string | null;
}
/** Object describing how a specific comparator operator must be written */
export interface IamPolicyConditionsComparatorOperatorFunctionDefinition {
    functionName?: string;
    maxArgs?: string | null;
    minArgs?: string;
}
/** Get all the acl conditions existing and usable */
export interface IamPolicyConditionsSchema {
    combinator?: IamPolicyConditionsCombinatorOperator[];
    comparator?: IamPolicyConditionsComparatorOperator[];
}
/** Policy definition */
export interface IamPolicyCreation {
    conditions?: IamPolicyCondition | null;
    description?: string;
    expiredAt?: string | null;
    identities: string[];
    name: string;
    permissions: IamPolicyPermissions;
    permissionsGroups?: IamPolicyPermissionsGroup[] | null;
    resources: IamPolicyResource[];
}
/** Group defines a set of resources */
export interface IamPolicyGroup {
    id?: string;
    name?: string;
    readOnly?: boolean;
}
/** Permissions included in a policy */
export interface IamPolicyPermissions {
    allow?: IamPolicyAction[] | null;
    deny?: IamPolicyAction[] | null;
    except?: IamPolicyAction[] | null;
}
/** Permissions group linked to a policy */
export interface IamPolicyPermissionsGroup {
    name?: string | null;
    owner?: string | null;
    permissions?: IamPolicyPermissions | null;
    urn?: string;
}
/** Resource in a policy */
export interface IamPolicyResource {
    group?: IamPolicyGroup | null;
    resource?: IamPolicySingleResource | null;
    urn: string;
}
/** Policy definition */
export interface IamPolicyResponse {
    conditions?: IamPolicyCondition | null;
    createdAt?: string;
    description?: string | null;
    expiredAt?: string | null;
    id?: string;
    identities?: string[];
    name?: string;
    owner?: string;
    permissions?: IamPolicyPermissions;
    permissionsGroups?: IamPolicyPermissionsGroup[];
    readOnly?: boolean;
    resources?: IamPolicyResource[];
    updatedAt?: string | null;
}
/** Single resource in a policy */
export interface IamPolicySingleResource {
    displayName?: string;
    id?: string;
    name?: string;
    owner?: string;
    tags?: Record<string, string> | null;
    type?: string;
}
/** Properties needed to update a policy */
export interface IamPolicyUpdate {
    conditions?: IamPolicyCondition | null;
    description?: string;
    expiredAt?: string | null;
    identities: string[];
    name: string;
    permissions: IamPolicyPermissions;
    permissionsGroups?: IamPolicyPermissionsGroup[] | null;
    resources: IamPolicyResource[];
}
/** Action that can be allowed or denied on a resource */
export interface IamReferenceAction {
    action?: string;
    categories?: string[];
    description?: string;
    hasQueryParameters?: boolean;
    resourceType?: string;
}
/** Fields to add a tag to a resource */
export interface IamResourceAddTag {
    key: string;
    value: string;
}
/** Resource is an entity standing for a product. It is used for right delegation */
export interface IamResourceResource {
    displayName?: string;
    id?: string;
    name?: string;
    owner?: string;
    tags?: Record<string, string> | null;
    type?: string;
    urn?: string;
}
/** Resource tag filter */
export interface IamResourceTagFilter {
    operator?: IamResourceTagFilterOperatorEnum | null;
    value?: string;
}
/** Operator that can be used in order to filter resources tags */
export type IamResourceTagFilterOperatorEnum = "EQ" | "EXISTS" | "ILIKE" | "LIKE" | "NEQ" | "NEXISTS";
/** IAM resource metadata embedded in services models */
export interface IamResourceMetadata {
    displayName?: string | null;
    id?: string;
    state?: IamResourceMetadataStateEnum | null;
    tags?: Record<string, string> | null;
    urn?: string;
}
/** Resource state */
export type IamResourceMetadataStateEnum = "EXPIRED" | "IN_CREATION" | "OK" | "SUSPENDED";
//# sourceMappingURL=types.d.ts.map