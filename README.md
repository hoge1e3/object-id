# object-id
Assign an unique id to an object

## Usage

~~~js
import {get} from "@hoge1e3/object-id";
import * as assert from "assert";
const aid=get(a);
const bid=get(b);
const cid=get(c);
assert.ok(aid!==bid && bid!==cid && cid!==aid);
assert.strictEqual(aid, _get(a));
assert.strictEqual(bid, _get(b));
assert.strictEqual(cid, _get(c));  
console.log(aid,bid,cid);
~~~

