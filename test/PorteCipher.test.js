const assert=require('assert');
const { PorteCipher } = require('../src/bundle');

describe("Auto Key Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(PorteCipher.encrypt("HELLO WORLD","HELLO"),"XTQQHGMMQX");
    });
    it("Text with different cases", () => {
        assert.strictEqual(PorteCipher.encrypt("I am plain text","CRYPTO"),"WVYIUUWFHYBM");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(PorteCipher.encrypt("PORTECIPHER","CRYPTO"),"BGFMNWWHTYI");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(PorteCipher.encrypt("iamplaintext","crypto"),"WVYIUUWFHYBM");
    });    
})
