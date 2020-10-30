const alphabets = require('../Alphabets');

const VigenereCipher = (text,key) => {
    /**
     * 
     * Encrypts alphabetic data using a table called Vigenere Table
     * 
     * Syntax:
     *  VigenereCipher(PlainText,key)
     * 
     * Parameters: 
     *  text: String     // Plain Text for cipher
     *  key: String      // key value for encryption
     * 
     * Returns:
     *  Vigenere Cipher for the plain text with all upper case alphabets
     * 
     * Example:
     *  VigenereCipher("HELLOWORLD","GREET")         --> returns NVPPHCFVPW
     *  VigenereCipher("VIGENERECIPHER","CRYPTO")    --> returns XZETGSTVAXIVGI
     * 
     */
    key=key.replace(/[^A-Za-z]/g,"").toUpperCase();
    text=text.replace(/[^A-Za-z]/g ,"").toUpperCase();
    var cipher="";
    for(var i=0;i<text.length;i++) {
        let code=((text.charCodeAt(i)-65) + (key.charCodeAt(i%key.length)-65))%26;
        code += 65;
        cipher+=String.fromCharCode(code);
    }
    return cipher;
}


module.exports=VigenereCipher;
