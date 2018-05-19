import { VueConstructor } from 'vue';
export declare type StringToArrayMap = {
    [key: string]: Array<string>;
};
export declare type ReflectionMap = {
    constructor: Array<string>;
    instance: StringToArrayMap;
    static: StringToArrayMap;
};
export declare function reflectionIsSupported(): boolean;
export declare function copyReflectionMetadata(from: VueConstructor, to: VueConstructor, reflectionMap: ReflectionMap): void;
