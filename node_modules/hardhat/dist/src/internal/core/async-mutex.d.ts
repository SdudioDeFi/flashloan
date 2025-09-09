/**
 * A class that implements an asynchronous mutex (mutual exclusion) lock.
 *
 * The mutex ensures that only one asynchronous operation can be executed at a time,
 * providing exclusive access to a shared resource.
 */
export declare class AsyncMutex {
    #private;
    /**
     * Acquires the mutex, running the provided function exclusively,
     * and releasing it afterwards.
     *
     * @param f The function to run.
     * @returns The result of the function.
     */
    exclusiveRun<ReturnT>(f: () => ReturnT): Promise<Awaited<ReturnT>>;
}
//# sourceMappingURL=async-mutex.d.ts.map