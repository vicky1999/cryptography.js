const assert=require('assert');
const { Binary } = require('../src/bundle');

describe("Binary Test", () => {
    it("Binary for numbers", () => {
        assert.strictEqual(Binary(10),'1010');
    });
    it("Binary for text", () => {
        assert.strictEqual(Binary("ab"),"0110000101100010");
    });
})
