const assert=require('assert');
const SubstitutionCipher=require('../src/Cipher/SubstitutionCipher');

describe("Substitution Cipher Test", () => {
    it("Substitution Cipher test", () => {
        assert.strictEqual(SubstitutionCipher("ABCD","ZYXWVUTSRQPONMLKJIHGFEDCBA"),"ZYXW");
    });
    it("Substitution Cipher for multiple words", () => {
        assert.strictEqual(SubstitutionCipher("Hello World","ZYXWVUTSRQPONMLKJIHGFEDCBA"),"Svool Dliow");
    });
})
