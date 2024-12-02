

import u from "uniqid";
const weakmap=new WeakMap<object, string>();

export class IDGenerator{
    weakmap=new WeakMap<object, string>();
    constructor(public prefix="",public postfix="") {}
    get(object:object):string {
        if (weakmap.has(object)) {
            return weakmap.get(object)!;
        }
        const id=u(this.prefix, this.postfix);
        weakmap.set(object, id);
        return id;
    }
}
const def=new IDGenerator();
export function get(object:object):string {
    return def.get(object);
}
