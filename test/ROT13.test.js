const assert=require('assert');
const ROT13=require('../src/Cipher/ROT13');

describe("ROT13 Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(ROT13.encrypt("HELLO WORLD"),"URYYB JBEYQ");
    });
    it("Text with different cases", () => {
        assert.strictEqual(ROT13.encrypt("Hello World"),"URYYB JBEYQ");
    });
    it("Text without spaces", () => {
        assert.strictEqual(ROT13.encrypt("IAMPLAINTEXT"),"VNZCYNVAGRKG");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(ROT13.encrypt("iamplaintext"),"VNZCYNVAGRKG");
    });    
})
