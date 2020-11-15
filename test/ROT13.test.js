const assert=require('assert');
const AffineCipher=require('../src/Cipher/ROT13');

describe("ROT13 Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(AffineCipher("HELLO WORLD"),"URYYB JBEYQ");
    });
    it("Text with different cases", () => {
        assert.strictEqual(AffineCipher("Hello World"),"URYYB JBEYQ");
    });
    it("Text without spaces", () => {
        assert.strictEqual(AffineCipher("IAMPLAINTEXT"),"VNZCYNVAGRKG");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(AffineCipher("iamplaintext"),"VNZCYNVAGRKG");
    });    
})
