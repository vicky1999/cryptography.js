const assert=require('assert');
const { BaconCipher } = require('../src/bundle');

describe("Bacon Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(BaconCipher.encrypt("HELLO"),"aabbbaabaaababbababbabbba");
    });
    it("Text with different cases", () => {
        assert.strictEqual(BaconCipher.encrypt("Hello"),"aabbbaabaaababbababbabbba");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(BaconCipher.encrypt("TEXT"),"baabbaabaababbbbaabb");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(BaconCipher.encrypt("text"),"baabbaabaababbbbaabb");
    });    
})
