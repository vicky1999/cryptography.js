const assert=require('assert');
const { Hex } = require('../src/bundle');

describe("Hexadecimal conversion Test", () => {
    it("Hex to Decimal", () => {
        assert.strictEqual(Hex.toDecimal('d'),'13');
    });
    it("Hex to octal", () => {
        assert.strictEqual(Hex.toOctal('f2'),'362');
    });
    it("Hex to Binary", () => {
        assert.strictEqual(Hex.toBinary('1e'),'00011110');
    });
    it("Hex to Text", () => {
        assert.strictEqual(Hex.toText('5a'),'Z');
    });
})
