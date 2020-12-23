const assert=require('assert');
const SubstitutionCipher=require('../src/Cipher/SubstitutionCipher');

describe("Substitution Cipher Test", () => {
    it("Substitution Cipher test", () => {
        assert.strictEqual(SubstitutionCipher.encrypt("ABCD","ZYXWVUTSRQPONMLKJIHGFEDCBA"),"ZYXW");
    });
    it("Substitution Cipher for multiple words", () => {
        assert.strictEqual(SubstitutionCipher.encrypt("Hello World","ZYXWVUTSRQPONMLKJIHGFEDCBA"),"Svool Dliow");
    });
})
