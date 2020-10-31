const alphabets=require('../Alphabets');

const OneTimePad = (text,key) => {
    /**
     * 
     * Encrypts data using key
     * 
     * Syntax:
     *  OneTimePad(PlainText,key)
     * 
     * Parameters: 
     *  text: String     // Plain Text for cipher
     *  key: String      // key value for encryption
     * 
     * Requirements:
     *  The length of the plain text and key should be the same.
     * 
     * Returns:
     *  One Time Pad for the plain text with all upper case alphabets
     * 
     * Example:
     *  OneTimePad("HELLOWORLD","THISISAKEY")         --> returns ALTDWOOBPB
     *  OneTimePad("IAMPLAINTEXT","IAMSHAREDKEY")    --> returns QAYHSAZRWOBR
     * 
     */

    key=key.replace(/[^A-Za-z]/g,"").toUpperCase();
    text=text.replace(/[^A-Za-z]/g ,"").toUpperCase();
    text=text.toUpperCase();
    key=key.toUpperCase();
    if(key.length!==text.length) {
        throw (new Error("key and text should be of same length"));
    }
    let cipher="";
    for(var i=0;i<text.length;i++) {
        let keycode=key.charCodeAt(i)-65;
        let textcode=text.charCodeAt(i)-65;
        let code=((keycode+textcode)%26)+65;
        cipher+=String.fromCharCode(code);
    }
    return cipher;
}

module.exports=OneTimePad;
