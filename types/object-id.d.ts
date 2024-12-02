export declare class IDGenerator {
    prefix: string;
    postfix: string;
    weakmap: WeakMap<object, string>;
    constructor(prefix?: string, postfix?: string);
    get(object: object): string;
}
export declare function get(object: object): string;
