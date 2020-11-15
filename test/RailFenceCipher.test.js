const assert=require('assert');
const RailFenceCipher=require('../src/Cipher/RailFenceCipher');

describe("Rail Fence Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(RailFenceCipher("HELLO WORLD",3),"HOLELWRDLO");
    });
    it("Text with different cases", () => {
        assert.strictEqual(RailFenceCipher("Hello World",3),"HolelWrdlo");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(RailFenceCipher("IAMPLAINTEXT",3),"ILTAPANETMIX");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(RailFenceCipher("iamplaintext",3),"iltapanetmix");
    });    
})
