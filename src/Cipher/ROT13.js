class ROT13 {
    static encrypt(text) {
        /**
         * 
         * rotates each character in the plain text by 13 letters.
         * 
         * Syntax:
         *  ROT13(PlainText)
         * 
         * Parameters: 
         *  text: String     // Plain Text for cipher
         * 
         * Requirements:
         *  The plain text should contain only alphabets or spaces
         * 
         * Returns:
         *  ROT13 Cipher for the plain text with all upper case alphabets
         * 
         * Example:
         *  ROT13("HELLOWORLD")      --> returns URYYBJBEYQ
         *  ROT13("IAMPLAINTEXT")    --> returns VNZCYNVAGRKG
         * 
         */

        text=text.toUpperCase();
        let cipher='';
        for(var i=0;i<text.length;i++) {
            if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90) {
                let val=text.charCodeAt(i)-65;
                if(val<13) {
                    val+=13;
                }
                else val-=13;
                cipher+=String.fromCharCode(val+65);
            }
            else cipher+=text[i];
        }
        return cipher;
    }
}

module.exports=ROT13;
