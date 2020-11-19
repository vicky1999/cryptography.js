const assert=require('assert');
const { Octal } = require('../src/bundle');

describe("Octal conversion Test", () => {
    it("Octal to Binary", () => {
        assert.strictEqual(Octal.toBinary('65'),'00110101');
    });
    it("Octal to Decimal", () => {
        assert.strictEqual(Octal.toDecimal('15'),'13');
    });
    it("Octal to Hexadecimal", () => {
        assert.strictEqual(Octal.toHex('30'),'18');
    });
    it("Octal to Text", () => {
        assert.strictEqual(Octal.toText('102 104'),'BD');
    });
})
