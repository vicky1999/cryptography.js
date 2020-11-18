const assert=require('assert');
const { Decimal } = require('../src/bundle');

describe("Decimal conversion Test", () => {
    it("Decimal to Binary", () => {
        assert.strictEqual(Decimal.toBinary('65'),'01000001');
    });
    it("Decimal to octal", () => {
        assert.strictEqual(Decimal.toOctal('15'),'17');
    });
    it("Decimal to Hexadecimal", () => {
        assert.strictEqual(Decimal.toHex('30'),'1e');
    });
    it("Decimal to Text", () => {
        assert.strictEqual(Decimal.toText('65 84'),'AT');
    });
})
