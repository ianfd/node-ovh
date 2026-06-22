/** API version resource */
export interface VersionsVersionAccountVersion {
    availableVersions?: string[];
    currentState?: VersionsVersionAccountVersionCurrentState;
    targetSpec?: VersionsVersionAccountVersionTargetSpec;
}
/** Current state of the API version */
export interface VersionsVersionAccountVersionCurrentState {
    version?: string;
}
/** Input payload to update the API version */
export interface VersionsVersionAccountVersionInput {
    targetSpec: VersionsVersionAccountVersionTargetSpec;
}
/** Target specification for the API version */
export interface VersionsVersionAccountVersionTargetSpec {
    version: string;
}
//# sourceMappingURL=types.d.ts.map