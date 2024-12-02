import u from "uniqid";
const weakmap = new WeakMap();
export class IDGenerator {
    constructor(prefix = "", postfix = "") {
        this.prefix = prefix;
        this.postfix = postfix;
        this.weakmap = new WeakMap();
    }
    get(object) {
        if (weakmap.has(object)) {
            return weakmap.get(object);
        }
        const id = u(this.prefix, this.postfix);
        weakmap.set(object, id);
        return id;
    }
}
const def = new IDGenerator();
export function get(object) {
    return def.get(object);
}
//# sourceMappingURL=object-id.js.map