const assert=require('assert');
const { VigenereCipher }=require('../src/bundle');

describe("Vigenere Cipher Test", () => {
    it("Vigenere Cipher Test", () => {
        assert.strictEqual(VigenereCipher.encrypt("HELLOWORLD","GREET"),"NVPPHCFVPW");
    });
    it("Vigenere Cipher with different cases", () => {
        assert.strictEqual(VigenereCipher.encrypt("HelloWorld","Greet"),"NVPPHCFVPW");
    });
    it("Vigenere Cipher with special characters ", () => {
        assert.strictEqual(VigenereCipher.encrypt("VIGENERE CIPHER!","CRYPTO"),"XZETGSTVAXIVGI");
    });
    it("Vigenere Cipher with lower case alphabets", () => {
        assert.strictEqual(VigenereCipher.encrypt("vigenere cipher!","CRYPTO"),"XZETGSTVAXIVGI");
    });
    
})
