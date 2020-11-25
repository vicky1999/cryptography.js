const alphabets=require('../Alphabets');

class AffineCipher {
    static encrypt(text,a,b) {
        /**
         * 
         * Encrypts data using two numeric values.  It is based on the formula (ax+b) mod m
         * 
         * Syntax:
         *  AffineCipher.encrypt(PlainText,a,b)
         * 
         * Parameters: 
         *  text: String     // Plain Text for cipher
         *  a: Number        // A number to encrypt the plain text
         *  b: Number        // A number to encrypt the plain text
         * 
         * Returns:
         *  Affine Cipher for the plain text with all upper case alphabets
         * 
         * Example:
         *  AffineCipher.encrypt("HELLOWORLD",5,3)         --> returns MXGGVJVKGS
         *  AffineCipher.encrypt("IAMPLAINTEXT",6,2)       --> returns YCWOQCYCMAKM
         * 
         */
    
        let cipher='';
        text=text.toUpperCase();
        text=text.replace(/[^A-Za-z]/g,"");
        for(var i=0;i<text.length;i++) {
            let val=text.charCodeAt(i)-65;
            val=val * a;
            val+=b;
            val=val%26;
            cipher+=String.fromCharCode(val+65);
        }
        return cipher;
    }    
}

module.exports=AffineCipher;
