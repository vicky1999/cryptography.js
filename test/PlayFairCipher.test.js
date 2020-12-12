const assert=require('assert');
const PlayFairCipher=require('../src/Cipher/PlayFairCipher');

describe("Playfair Cipher Test", () => {
    it("PlayFair Cipher Test", () => {
        assert.strictEqual(PlayFairCipher.encrypt("PLAYFAIRCIPHER","ENCRYPTION"),"TKHAHIOCIFABNY");
    });
    it("Playfair Cipher with different cases", () => {
        assert.strictEqual(PlayFairCipher.encrypt("PlayFairCipher","Encryption"),"TKHAHIOCIFABNY");
    });
    it("Playfair Cipher Test", () => {
        assert.strictEqual(PlayFairCipher.encrypt("PROGRAMMING","HELLOWORLD"),"NDEKDBIZFQMV");
    });
    
})
