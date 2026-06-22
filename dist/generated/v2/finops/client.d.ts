import type { OvhClient } from '../../../core/client';
import type { PaginatedListOptions, RequestOptions } from '../../../core/types';
import type { CommonEvent, CommonTask, FinopsBucketExportAsyncConfiguration, FinopsBucketExportAsyncCreateConfiguration } from './types';
export interface BucketExportListParams extends PaginatedListOptions {
}
export interface BucketExportCreateParams extends RequestOptions {
    body: FinopsBucketExportAsyncCreateConfiguration;
}
export interface BucketExportDeleteParams extends RequestOptions {
    id: string;
}
export interface BucketExportGetParams extends RequestOptions {
    id: string;
}
export interface BucketExportUpdateParams extends RequestOptions {
    id: string;
    body: FinopsBucketExportAsyncConfiguration;
}
export interface BucketExportEventListParams extends PaginatedListOptions {
    id: string;
}
export interface BucketExportTaskListParams extends PaginatedListOptions {
    id: string;
}
export interface BucketExportTaskGetParams extends RequestOptions {
    id: string;
    taskId: string;
}
export declare class FinopsClient {
    private readonly client;
    readonly bucketExport: FinopsClientBucketExport;
    constructor(client: OvhClient);
}
export declare class FinopsClientBucketExport {
    private readonly client;
    readonly event: FinopsClientBucketExportEvent;
    readonly task: FinopsClientBucketExportTask;
    constructor(client: OvhClient);
    /** List FinOps bucket export configurations. The target bucket must be S3™*-compatible */
    list(params?: BucketExportListParams): Promise<FinopsBucketExportAsyncConfiguration[]>;
    /** Iterate over List FinOps bucket export configurations. The target bucket must be S3™*-compatible. */
    iterate(params?: BucketExportListParams): AsyncGenerator<FinopsBucketExportAsyncConfiguration, void, void>;
    /** Load all pages for List FinOps bucket export configurations. The target bucket must be S3™*-compatible. */
    listAll(params?: BucketExportListParams): Promise<FinopsBucketExportAsyncConfiguration[]>;
    /** Create a FinOps bucket export configuration. The target bucket must be S3™*-compatible */
    create(params: BucketExportCreateParams): Promise<FinopsBucketExportAsyncConfiguration>;
    /** Delete a FinOps bucket export configuration. The target bucket must be S3™*-compatible */
    delete(params: BucketExportDeleteParams): Promise<FinopsBucketExportAsyncConfiguration>;
    /** Get a FinOps bucket export configuration. The target bucket must be S3™*-compatible */
    get(params: BucketExportGetParams): Promise<FinopsBucketExportAsyncConfiguration>;
    /** Modify a FinOps bucket export configuration. The target bucket must be S3™*-compatible */
    update(params: BucketExportUpdateParams): Promise<FinopsBucketExportAsyncConfiguration>;
}
export declare class FinopsClientBucketExportEvent {
    private readonly client;
    constructor(client: OvhClient);
    /** Get a list of events */
    list(params: BucketExportEventListParams): Promise<CommonEvent[]>;
    /** Iterate over Get a list of events. */
    iterate(params: BucketExportEventListParams): AsyncGenerator<CommonEvent, void, void>;
    /** Load all pages for Get a list of events. */
    listAll(params: BucketExportEventListParams): Promise<CommonEvent[]>;
}
export declare class FinopsClientBucketExportTask {
    private readonly client;
    constructor(client: OvhClient);
    /** Get a list of tasks */
    list(params: BucketExportTaskListParams): Promise<CommonTask[]>;
    /** Iterate over Get a list of tasks. */
    iterate(params: BucketExportTaskListParams): AsyncGenerator<CommonTask, void, void>;
    /** Load all pages for Get a list of tasks. */
    listAll(params: BucketExportTaskListParams): Promise<CommonTask[]>;
    /** Get a single task */
    get(params: BucketExportTaskGetParams): Promise<CommonTask>;
}
//# sourceMappingURL=client.d.ts.map