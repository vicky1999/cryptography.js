const assert=require('assert');
const { Text } = require('../src/bundle');

describe("Text conversion Test", () => {
    it("Text to Decimal", () => {
        assert.strictEqual(Text.toDecimal('A'),'65');
    });
    it("Text to octal", () => {
        assert.strictEqual(Text.toOctal('A'),'101');
    });
    it("Text to Hexadecimal", () => {
        assert.strictEqual(Text.toHex('A'),'41');
    });
    it("Text to Binary", () => {
        assert.strictEqual(Text.toBinary('A'),'01000001');
    });
})
