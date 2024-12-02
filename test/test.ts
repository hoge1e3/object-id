
import {IDGenerator, get} from "../object-id.js";
import * as assert from "assert";

function testwith(prefix:string="", postfix:string="") {
    let _get;
    if (!prefix) _get=get;
    else {
        const g=new IDGenerator(prefix,postfix);
        _get=g.get.bind(g);
    }
    const a={},b={x:3},c=function(){};
    const aid=_get(a);
    const bid=_get(b);
    const cid=_get(c);
    assert.ok(aid!==bid && bid!==cid && cid!==aid);
    assert.strictEqual(aid, _get(a));
    assert.strictEqual(bid, _get(b));
    assert.strictEqual(cid, _get(c));    
    assert.ok(aid.startsWith(prefix));
    assert.ok(aid.endsWith(postfix));
    console.log(aid,bid,cid);
}
testwith();
testwith("aaa","bbb");
console.log("Test Passed.");



