const alphabets=require("../Alphabets");
const ShiftCipher = require("./ShiftCipher");

class SubstitutionCipher {
    static encrypt(text, substitution) {
        /**
         * 
         * Substitutes each alphabet in the plain text with it substitution alphabet.
         * 
         * Syntax:
         *  SubstitutionCipher(PlainText,Substitution)
         * 
         * Parameters: 
         *  text: String     // Plain Text for cipher
         *  substitution: String   // Substitution for each alphabets.  It should be 26 letters.
         * 
         * Returns:
         *  Substitution Cipher for the plain text
         * 
         * Example:
         *  SubstitutionCipher("ABCD","ZYXWVUTSRQPONMLKJIHGFEDCBA") --> returns ZYXW
         *  SubstitutionCipher("Hello World","ZYXWVUTSRQPONMLKJIHGFEDCBA") --> returns Svool Dliow
         * 
         */

        var cipher=""
        for(var i=0;i<text.length;i++) {
            var index=alphabets.indexOf(text[i].toUpperCase());
            if(index !== -1) {
                if(text.charCodeAt(i) < 97) {
                    cipher+=substitution[index];
                }
                else {
                    cipher+=substitution[index].toLowerCase();
                }
            }
            else {
                cipher+=text[i];
            }
        }
        return cipher;
    }
}

module.exports=SubstitutionCipher;