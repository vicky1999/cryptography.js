const assert=require('assert');
const OneTimePad = require('../src/Cipher/OneTimePad');

describe("One Time Pad Cipher Test", () => {
    it("One Time Pad test", () => {
        assert.strictEqual(OneTimePad.encrypt("HELLOWORLD","THISISAKEY"),"ALTDWOOBPB");
    });
    it("One Time Pad Cipher test for text with different cases", () => {
        assert.strictEqual(OneTimePad.encrypt("HelloWorld","ThisIsAKey"),"ALTDWOOBPB");
    });
    it("One Time Pad Cipher test for text with spaces", () => {
        assert.strictEqual(OneTimePad.encrypt("Hello World","This is a Key"),"ALTDWOOBPB");
    });
    it("One Time Pad Cipher test for text with upper case", () => {
        assert.strictEqual(OneTimePad.encrypt("HELLO WORLD","THIS IS A KEY"),"ALTDWOOBPB");
    });
})
