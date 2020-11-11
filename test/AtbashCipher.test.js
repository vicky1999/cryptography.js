const assert=require('assert');
const { AtbashCipher } = require('../src/bundle');

describe("Atbash Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(AtbashCipher("HELLO WORLD"),"SVOOL DLIOW");
    });
    it("Text with different cases", () => {
        assert.strictEqual(AtbashCipher("Hello World"),"SVOOL DLIOW");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(AtbashCipher("IAMPLAINTEXT"),"RZNKOZRMGVCG");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(AtbashCipher("iamplaintext"),"RZNKOZRMGVCG");
    });    
})