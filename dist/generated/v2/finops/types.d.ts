/** Asynchronous operation currently running */
export interface CommonCurrentTask {
    errors?: CommonTaskError[] | null;
    id?: string;
    link?: string;
    status?: CommonCurrentTaskStatusEnum | null;
    type?: string;
}
/** Current status of a task. A task in ERROR cannot be retried without your inputs. PENDING tasks will be executed as soon as possible. A RUNNING task is currently executing your original request. SCHEDULED is used for tasks that will be executed in the future */
export type CommonCurrentTaskStatusEnum = "ERROR" | "PENDING" | "RUNNING" | "SCHEDULED" | "WAITING_USER_INPUT";
/** Represents an event for an async envelope */
export interface CommonEvent {
    createdAt?: string;
    kind?: string;
    link?: string | null;
    message?: string;
    type?: CommonEventTypeEnum;
}
/** List all defined values for an event type field */
export type CommonEventTypeEnum = "TARGET_SPEC_UPDATE" | "TASK_ERROR" | "TASK_START" | "TASK_SUCCESS";
/** ResourceStatusEnum */
export type CommonResourceStatusEnum = "CREATING" | "DELETING" | "ERROR" | "OUT_OF_SYNC" | "READY" | "SUSPENDED" | "UNKNOWN" | "UPDATING";
/** Asynchronous operation */
export interface CommonTask {
    createdAt?: string;
    errors?: CommonTaskError[] | null;
    finishedAt?: string | null;
    id?: string;
    link?: string;
    message?: string;
    progress?: CommonTaskProgress[];
    startedAt?: string | null;
    status?: CommonTaskStatusEnum;
    type?: string;
    updatedAt?: string;
}
/** Errors that occured on the task */
export interface CommonTaskError {
    message?: string;
}
/** Detailed information about an asynchronous operation progress steps */
export interface CommonTaskProgress {
    name?: string;
    status?: CommonTaskStatusEnum;
}
/** TaskStatusEnum */
export type CommonTaskStatusEnum = "DONE" | "ERROR" | "PENDING" | "RUNNING" | "SCHEDULED" | "WAITING_USER_INPUT";
/** Bucket Export Configuration */
export interface FinopsBucketExportAsyncConfiguration {
    checksum?: string;
    currentState?: FinopsBucketExportConfiguration;
    currentTasks?: CommonCurrentTask[];
    id?: string;
    resourceStatus?: CommonResourceStatusEnum;
    targetSpec?: FinopsBucketExportConfiguration;
}
/** FinOps Bucket Export creation parameters */
export interface FinopsBucketExportAsyncCreateConfiguration {
    targetSpec: FinopsBucketExportConfiguration;
}
/** Configuration of the target bucket, which must be S3™*-compatible */
export interface FinopsBucketExportBucketConfiguration {
    accessKey: string;
    bucketName: string;
    endpointURL: string;
    pathPrefix?: string;
    region: string;
    secretKey: string;
}
/** FinOps bucket export configuration */
export interface FinopsBucketExportConfiguration {
    bucketConfiguration?: FinopsBucketExportBucketConfiguration;
    exportHour?: number;
    filePolicy?: FinopsBucketExportFilePolicyEnum;
    scope?: string;
}
/** Policy applied for file creation */
export type FinopsBucketExportFilePolicyEnum = "CREATE" | "REPLACE";
//# sourceMappingURL=types.d.ts.map