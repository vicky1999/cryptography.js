const assert=require('assert');
const { Binary } = require('../src/bundle');

describe("Binary conversion Test", () => {
    it("Binary to Decimal", () => {
        assert.strictEqual(Binary.toDecimal('1010'),'10');
    });
    it("Binary to octal", () => {
        assert.strictEqual(Binary.toOctal('1010'),'12');
    });
    it("Binary to Hexadecimal", () => {
        assert.strictEqual(Binary.toHex('1010'),'a');
    });
    it("Binary to Text", () => {
        assert.strictEqual(Binary.toText('01101000'),'h');
    });
})
