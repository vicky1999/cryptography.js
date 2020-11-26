const alphabets=require('../Alphabets');

class AtbashCipher {
    static encrypt(text) {
        /**
         * 
         * the letters of the alphabet are reversed.
         * 
         * Syntax:
         *  AtbashCipher(PlainText)
         * 
         * Parameters: 
         *  text: String     // Plain Text for cipher
         * 
         * Returns:
         *  Atbash Cipher for the plain text with all upper case alphabets
         * 
         * Example:
         *  AtbashCipher.encrypt("HELLOWORLD")      --> returns SVOOLDLIOW
         *  AtbashCipher.encrypt("IAMPLAINTEXT")    --> returns RZNKOZRMGVCG
         * 
         */
    
        let cipher='';
        text=text.toUpperCase();
        for(var i=0;i<text.length;i++) {
            if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90) {
                let val=alphabets.indexOf(text[i]);
                cipher+=alphabets[26-val-1];
            }
            else {
                cipher+=text[i];
            }
        }
        return cipher;
    }
}


module.exports=AtbashCipher;
