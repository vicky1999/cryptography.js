const VigenereCipher = require('./VigenereCipher');

const AutoKeyCipher=(text,key) => {
    /**
     * 
     * Encrypts alphabetic data using a table called Vigenere Table but uses different method to generate key.
     * 
     * Syntax:
     *  AutoKeyCipher(PlainText,key)
     * 
     * Parameters: 
     *  text: String     // Plain Text for cipher
     *  key: String      // key value for encryption
     * 
     * Returns:
     *  Auto Key Cipher for the plain text with all upper case alphabets without spaces
     * 
     * Example:
     *  AutoKeyCipher("HELLOWORLD","HELLO")         --> returns OIWWCDSCWR
     *  AutoKeyCipher("IAMPLAINTEXT","CRYPTO")      --> returns KRKEEOQNFTIT
     * 
     */

    text=text.replace(/[^A-Za-z]/g,"").toUpperCase();
    key=key.replace(/[^A-Za-z]/g,"").toUpperCase();
    let ind=0;
    for(var i=key.length;i<text.length;i++) {
        key+=text[ind];
        ind++;
    }
    let cipher=VigenereCipher.encrypt(text,key);
    return cipher;
}

module.exports = AutoKeyCipher;
