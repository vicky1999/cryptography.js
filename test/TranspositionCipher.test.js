const assert=require('assert');
const TranspositionCipher=require('../src/Cipher/TranspositionCipher');

describe("Transposition Cipher Test", () => {
    it("Text with same lengths", () => {
        assert.strictEqual(TranspositionCipher.encrypt("HELLO","IMKEY"),"LHLEO");
    });
    it("Text with different lengths", () => {
        assert.strictEqual(TranspositionCipher.encrypt("HELLOWORLD","IAMKEY"),"ERO~HOLDLLW~");
    });
    it("Text with different lengths", () => {
        assert.strictEqual(TranspositionCipher.encrypt("IAMPLAINTEXT","KEY"),"ALNXIPIEMATT");
    });
    
})
