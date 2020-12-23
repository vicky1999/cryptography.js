const assert=require('assert');
const ShiftCipher=require('../src/Cipher/ShiftCipher');

describe("Shift Cipher Test", () => {
    it("Message with same cases", () => {
        assert.strictEqual(ShiftCipher.encrypt("ABCD",3),"DEFG");
    });
    it("Message with different cases", () => {
        assert.strictEqual(ShiftCipher.encrypt("HeLlO WoRlD",1),"IfMmP XpSmE");
    });
})
