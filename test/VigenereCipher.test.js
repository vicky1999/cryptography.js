const assert=require('assert');
const VigenereCipher=require('../src/Cipher/VigenereCipher');

describe("Vigenere Cipher Test", () => {
    it("Vigenere Cipher Test", () => {
        assert.strictEqual(VigenereCipher("HELLOWORLD","GREET"),"NVPPHCFVPW");
    });
    it("Vigenere Cipher with different cases", () => {
        assert.strictEqual(VigenereCipher("HelloWorld","Greet"),"NVPPHCFVPW");
    });
    it("Vigenere Cipher with special characters ", () => {
        assert.strictEqual(VigenereCipher("VIGENERE CIPHER!","CRYPTO"),"XZETGSTVAXIVGI");
    });
    it("Vigenere Cipher with lower case alphabets", () => {
        assert.strictEqual(VigenereCipher("vigenere cipher!","CRYPTO"),"XZETGSTVAXIVGI");
    });
    
})
