export declare class MultiProcessMutex {
    #private;
    constructor(mutexName: string, maxMutexLifespanInMs?: number);
    use<T>(f: () => Promise<T>): Promise<T>;
}
//# sourceMappingURL=synchronization.d.ts.map