const assert=require('assert');
const { PolybiusCipher } = require('../src/bundle');

describe("Polybius Square Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(PolybiusCipher.encrypt("hello world","ectbkdlanqwgyoirvmsxpfuhz"),"EDAABBBBCDCACDDABBBA");
    });
    it("Text with different cases", () => {
        assert.strictEqual(PolybiusCipher.encrypt("Hello","ectbkdlanqwgyoirvmsxpfuhz"),"EDAABBBBCD");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(PolybiusCipher.encrypt("IAMPLAINTEXT","ectbkdlanqwgyoirvmsxpfuhz"),"CEBCDCEABBBCCEBDACAADEAC");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(PolybiusCipher.encrypt("iamplaintext","ectbkdlanqwgyoirvmsxpfuhz"),"CEBCDCEABBBCCEBDACAADEAC");
    });    
})
