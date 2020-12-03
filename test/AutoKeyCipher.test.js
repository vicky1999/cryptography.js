const assert=require('assert');
const { AutoKeyCipher } = require('../src/bundle');

describe("Auto Key Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(AutoKeyCipher.encrypt("HELLO WORLD","HELLO"),"OIWWCDSCWR");
    });
    it("Text with different cases", () => {
        assert.strictEqual(AutoKeyCipher.encrypt("I am plain text","CRYPTO"),"KRKEEOQNFTIT");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(AutoKeyCipher.encrypt("IAMPLAINTEXT","CRYPTO"),"KRKEEOQNFTIT");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(AutoKeyCipher.encrypt("iamplaintext","crypto"),"KRKEEOQNFTIT");
    });    
})
