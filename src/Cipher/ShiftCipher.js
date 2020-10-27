const { charCodeAt } = require('../Alphabets');
const alphabets=require('../Alphabets');

const ShiftCipher = (text, shift) => {
    /**
     * 
     * Shifts each alphabets in the plain text by a shift amount.
     * 
     * Syntax:
     *  ShiftCipher(PlainText,ShiftValue)
     * 
     * Parameters: 
     *  text: String     // Plain Text for cipher
     *  shift: Integer   //The number of Shifts needed for each letters in the plain text
     * 
     * Returns:
     *  Shift Cipher for the plain text
     * 
     * Example:
     *  ShiftCipher("ABCD",3) --> returns DEFG
     *  ShiftCipher("AbCd",1) --> returns BcDe
     * 
     */

    cipher="";
    for(var i=0; i<text.length; i++) {
        var index=(alphabets.indexOf(text[i])+shift) % 26;
        if(index !== -1) {
            if(text.charCodeAt(i) < 97) {
                cipher+=alphabets[index];
            }
            else {
                cipher+=alphabets[index].toLowerCase();
            }
        }
        else {
            cipher+=text[i];
        }
    }
    return cipher;
}

module.exports=ShiftCipher;
