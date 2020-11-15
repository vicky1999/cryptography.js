const assert=require('assert');
const OneTimePad = require('../src/Cipher/OneTimePad');

describe("One Time Pad Cipher Test", () => {
    it("One Time Pad test", () => {
        assert.strictEqual(OneTimePad("HELLOWORLD","THISISAKEY"),"ALTDWOOBPB");
    });
    it("One Time Pad Cipher test for text with different cases", () => {
        assert.strictEqual(OneTimePad("HelloWorld","ThisIsAKey"),"ALTDWOOBPB");
    });
    it("One Time Pad Cipher test for text with spaces", () => {
        assert.strictEqual(OneTimePad("Hello World","This is a Key"),"ALTDWOOBPB");
    });
    it("One Time Pad Cipher test for text with upper case", () => {
        assert.strictEqual(OneTimePad("HELLO WORLD","THIS IS A KEY"),"ALTDWOOBPB");
    });
})
