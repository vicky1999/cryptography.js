const assert=require('assert');
const { PolybiusCipher } = require('../src/bundle');

describe("Polybius Square Cipher Test", () => {
    it("Text without spaces", () => {
        assert.strictEqual(PolybiusCipher("hello","ectbkdlanqwgyoirvmsxpfuhz"),"EDAABBBBCD");
    });
    it("Text with different cases", () => {
        assert.strictEqual(PolybiusCipher("Hello","ectbkdlanqwgyoirvmsxpfuhz"),"EDAABBBBCD");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(PolybiusCipher("IAMPLAINTEXT","ectbkdlanqwgyoirvmsxpfuhz"),"CEBCDCEABBBCCEBDACAADEAC");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(PolybiusCipher("iamplaintext","ectbkdlanqwgyoirvmsxpfuhz"),"CEBCDCEABBBCCEBDACAADEAC");
    });    
})