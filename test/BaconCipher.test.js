const assert=require('assert');
const { BaconCipher } = require('../src/bundle');

describe("Atbash Cipher Test", () => {
    it("Text with spaces", () => {
        assert.strictEqual(BaconCipher("HELLO"),"aabbbaabaaababbababbabbba");
    });
    it("Text with different cases", () => {
        assert.strictEqual(BaconCipher("Hello"),"aabbbaabaaababbababbabbba");
    });
    it("Text with same cases without spaces", () => {
        assert.strictEqual(BaconCipher("TEXT"),"baabbaabaababbbbaabb");
    });
    it("Text with lowercase cases without spaces", () => {
        assert.strictEqual(BaconCipher("text"),"baabbaabaababbbbaabb");
    });    
})