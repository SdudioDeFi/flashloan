import type { Compiler } from "./compiler.js";
export declare function downloadConfiguredCompilers(versions: Set<string>, quiet: boolean): Promise<void>;
export declare function getCompiler(version: string, { preferWasm }: {
    preferWasm: boolean;
}): Promise<Compiler>;
//# sourceMappingURL=index.d.ts.map