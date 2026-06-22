import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommonTask, NotificationContactMeanContactMean, NotificationContactMeanPostInput, NotificationContactMeanValidateInput, NotificationHistoryAttachment, NotificationHistoryNotification, NotificationHistoryNotificationPriorityEnum, NotificationReferenceReference, NotificationRoutingPostInput, NotificationRoutingRouting, NotificationSortOrderEnum } from './types';
export interface ContactMeanListParams extends PaginatedListOptions {
}
export interface ContactMeanCreateParams extends RequestOptions {
    body: NotificationContactMeanPostInput;
}
export interface ContactMeanDeleteParams extends RequestOptions {
    contactMeanId: string;
}
export interface ContactMeanGetParams extends RequestOptions {
    contactMeanId: string;
}
export interface ContactMeanUpdateParams extends RequestOptions {
    contactMeanId: string;
    body: NotificationContactMeanContactMean;
}
export interface ContactMeanRestartValidationCreateParams extends RequestOptions {
    contactMeanId: string;
}
export interface ContactMeanTaskListParams extends PaginatedListOptions {
    contactMeanId: string;
}
export interface ContactMeanTaskGetParams extends RequestOptions {
    contactMeanId: string;
    taskId: string;
}
export interface ContactMeanTaskUpdateParams extends RequestOptions {
    contactMeanId: string;
    taskId: string;
    body: unknown;
}
export interface ContactMeanValidateCreateParams extends RequestOptions {
    contactMeanId: string;
    body: NotificationContactMeanValidateInput;
}
export interface HistoryListParams extends PaginatedListOptions {
    category?: string[];
    createdAfter?: string;
    createdBefore?: string;
    priority?: NotificationHistoryNotificationPriorityEnum[];
    sortCreatedAt?: NotificationSortOrderEnum;
    titleContains?: string;
    withSummary?: boolean;
}
export interface HistoryGetParams extends RequestOptions {
    notificationId: string;
}
export interface HistoryAttachmentGetParams extends RequestOptions {
    attachmentName: string;
    notificationId: string;
}
export interface ReferenceGetParams extends RequestOptions {
}
export interface RoutingListParams extends PaginatedListOptions {
}
export interface RoutingCreateParams extends RequestOptions {
    body: NotificationRoutingPostInput;
}
export interface RoutingDeleteParams extends RequestOptions {
    routingId: string;
}
export interface RoutingGetParams extends RequestOptions {
    routingId: string;
}
export interface RoutingUpdateParams extends RequestOptions {
    routingId: string;
    body: NotificationRoutingRouting;
}
export declare class NotificationClient {
    private readonly client;
    readonly contactMean: NotificationClientContactMean;
    readonly history: NotificationClientHistory;
    readonly reference: NotificationClientReference;
    readonly routing: NotificationClientRouting;
    constructor(client: OvhClient);
}
export declare class NotificationClientContactMean {
    private readonly client;
    readonly restartValidation: NotificationClientContactMeanRestartValidation;
    readonly task: NotificationClientContactMeanTask;
    readonly validate: NotificationClientContactMeanValidate;
    constructor(client: OvhClient);
    /** Retrieve every contact mean */
    list(params?: ContactMeanListParams): Promise<NotificationContactMeanContactMean[]>;
    /** Iterate over Retrieve every contact mean. */
    iterate(params?: ContactMeanListParams): AsyncGenerator<NotificationContactMeanContactMean, void, void>;
    /** Load all pages for Retrieve every contact mean. */
    listAll(params?: ContactMeanListParams): Promise<NotificationContactMeanContactMean[]>;
    /** Create a contact mean */
    create(params: ContactMeanCreateParams): Promise<NotificationContactMeanContactMean>;
    /** Delete the contact mean */
    delete(params: ContactMeanDeleteParams): Promise<void>;
    /** Retrieve information about a contact mean */
    get(params: ContactMeanGetParams): Promise<NotificationContactMeanContactMean>;
    /** Update a contact mean */
    update(params: ContactMeanUpdateParams): Promise<NotificationContactMeanContactMean>;
}
export declare class NotificationClientContactMeanRestartValidation {
    private readonly client;
    constructor(client: OvhClient);
    /** Restart the validation process for this contact mean, if you did not receive the OTP */
    create(params: ContactMeanRestartValidationCreateParams): Promise<NotificationContactMeanContactMean>;
}
export declare class NotificationClientContactMeanTask {
    private readonly client;
    constructor(client: OvhClient);
    /** Get the list of tasks on a contact mean */
    list(params: ContactMeanTaskListParams): Promise<CommonTask[]>;
    /** Iterate over Get the list of tasks on a contact mean. */
    iterate(params: ContactMeanTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for Get the list of tasks on a contact mean. */
    listAll(params: ContactMeanTaskListParams): Promise<CommonTask[]>;
    /** Get a task on a contact mean */
    get(params: ContactMeanTaskGetParams): Promise<CommonTask>;
    /** Update a task on a contact mean */
    update(params: ContactMeanTaskUpdateParams): Promise<CommonTask>;
}
export declare class NotificationClientContactMeanValidate {
    private readonly client;
    constructor(client: OvhClient);
    /** Validate this contact mean */
    create(params: ContactMeanValidateCreateParams): Promise<NotificationContactMeanContactMean>;
}
export declare class NotificationClientHistory {
    private readonly client;
    readonly attachment: NotificationClientHistoryAttachment;
    constructor(client: OvhClient);
    /** Retrieve every notification sent to you */
    list(params?: HistoryListParams): Promise<NotificationHistoryNotification[]>;
    /** Iterate over Retrieve every notification sent to you. */
    iterate(params?: HistoryListParams): AsyncGenerator<NotificationHistoryNotification, void, void>;
    /** Load all pages for Retrieve every notification sent to you. */
    listAll(params?: HistoryListParams): Promise<NotificationHistoryNotification[]>;
    /** Retrieve information about a notification sent to you */
    get(params: HistoryGetParams): Promise<NotificationHistoryNotification>;
}
export declare class NotificationClientHistoryAttachment {
    private readonly client;
    constructor(client: OvhClient);
    /** Get a notification attachment */
    get(params: HistoryAttachmentGetParams): Promise<NotificationHistoryAttachment>;
}
export declare class NotificationClientReference {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieve data referential for /notification endpoints */
    get(params?: RequestOptions): Promise<NotificationReferenceReference>;
}
export declare class NotificationClientRouting {
    private readonly client;
    constructor(client: OvhClient);
    /** Retrieve every routing */
    list(params?: RoutingListParams): Promise<NotificationRoutingRouting[]>;
    /** Iterate over Retrieve every routing. */
    iterate(params?: RoutingListParams): AsyncGenerator<NotificationRoutingRouting, void, void>;
    /** Load all pages for Retrieve every routing. */
    listAll(params?: RoutingListParams): Promise<NotificationRoutingRouting[]>;
    /** Create a routing */
    create(params: RoutingCreateParams): Promise<NotificationRoutingRouting>;
    /** Delete the routing */
    delete(params: RoutingDeleteParams): Promise<void>;
    /** Retrieve information about a routing */
    get(params: RoutingGetParams): Promise<NotificationRoutingRouting>;
    /** Update a routing */
    update(params: RoutingUpdateParams): Promise<NotificationRoutingRouting>;
}
//# sourceMappingURL=client.d.ts.map