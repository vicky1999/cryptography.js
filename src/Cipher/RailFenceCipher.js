const alphabets=require('../Alphabets');

class RailFenceCipher {
    static encrypt(text,key) {
        /**
         * 
         * Encrypts data based on the principle: "write down the columns, read along the rows"
         * 
         * Syntax:
         *  RailFenceCipher(PlainText,Key)
         * 
         * Parameters: 
         *  text: String        // Plain Text for cipher
         *  key: Number        // A number to representing the size of the array or rail fence
         * 
         * Returns:
         *  Rail Fence cipher for the plain text
         * 
         * Example:
         *  RailFenceCipher("HELLOWORLD",3)         --> returns HOLELWRDLO
         *  RailFenceCipher("IAMPLAINTEXT",3)       --> returns ILTAPANETMIX
         * 
         */

        let rail=[];
        text=text.replace(/[^A-Za-z]/g,"");
        for(var i=0;i<key;i++) {
            rail.push([]);
        }
        let ind=0;
        while(ind<text.length) {
            for(var i=0;i<key;i++) {
                if(ind>=text.length) {
                    break;
                }
                rail[i].push(text[ind]);
                ind++;
            }
            for(var i=key-2;i>0;i--) {
                if(ind>=text.length) break;
                rail[i].push(text[ind]);
                ind++;
            }
        }
        let cipher='';
        for(var i=0;i<key;i++) {
            let size=rail[i].length;
            for(var j=0;j<size;j++) {
                cipher+=rail[i][j];
            }
        }
        return cipher;
    }
}

module.exports=RailFenceCipher;
