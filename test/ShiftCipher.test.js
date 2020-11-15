const assert=require('assert');
const ShiftCipher=require('../src/Cipher/ShiftCipher');

describe("Shift Cipher Test", () => {
    it("Message with same cases", () => {
        assert.strictEqual(ShiftCipher("ABCD",3),"DEFG");
    });
    it("Message with different cases", () => {
        assert.strictEqual(ShiftCipher("HeLlO WoRlD",1),"IfMmP XpSmE");
    });
})
