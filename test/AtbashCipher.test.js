const assert=require('assert');
const { AtbashCipher } = require('../src/bundle');

describe("Atbash Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(AtbashCipher.encrypt("HELLO WORLD"),"SVOOL DLIOW");
    });
    it("Text with different cases", () => {
        assert.strictEqual(AtbashCipher.encrypt("Hello World"),"SVOOL DLIOW");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(AtbashCipher.encrypt("IAMPLAINTEXT"),"RZNKOZRMGVCG");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(AtbashCipher.encrypt("iamplaintext"),"RZNKOZRMGVCG");
    });    
})
