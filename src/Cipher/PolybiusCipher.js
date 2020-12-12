class PolybiusCipher {
    static encrypt(text,key) {
        /**
         * 
         * each plaintext character is encrypted as 2 ciphertext characters.
         * 
         * Syntax:
         *  PolybiusCipher.encrypt(PlainText,key)
         * 
         * Parameters: 
         *  text: String     // Plain Text for cipher
         *  key: String      // key value for encryption
         * 
         * Requirements:
         *  The length of the key should be the 25 characters.
         * 
         * Returns:
         *  Polybius Square Cipher for the plain text with all upper case alphabets.  The alphabets in the cipher text were one of A, B, C, D, E.
         * 
         * Example:
         *  PolybiusCipher.encrypt("hello","ectbkdlanqwgyoirvmsxpfuhz") ---> EDAABBBBCD
         *  PolybiusCipher.encrypt("IAMPLAINTEXT","ectbkdlanqwgyoirvmsxpfuhz") ---> CEBCDCEABBBCCEBDACAADEAC
         * 
         */

        key=key.toUpperCase();
        text=text.replace(/[^A-Za-z]/g ,"").toUpperCase();
        let cipher='';
        for(var i=0;i<text.length;i++) {
            let ind=key.indexOf(text[i]);
            if(ind===-1) ind=key.indexOf("I");
            let row=Math.floor(ind/5);
            let col=ind%5;
            cipher+=String.fromCharCode(65+row)+String.fromCharCode(65+col);
        }
        return cipher;
    }
}

module.exports=PolybiusCipher;
