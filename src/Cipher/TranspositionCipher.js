const alphabets=require("../Alphabets");

class TranspositionCipher {
    static keyOrder(key) {
        let order=new Map();
        var pos=1;
        for(var i=65;i<=90;i++) {
            for(var j=0;j<key.length;j++) {
                if(key[j]==String.fromCharCode(i)) {
                    order.set(pos,j);
                    pos++;
                }
            }
        }
        return order;
    }
    
    static encrypt(text, key) {
        /**
         * 
         * Encrypts data using Transposition Cipher
         * 
         * Syntax:
         *  TranspositionCipher(PlainText,key)
         * 
         * Parameters: 
         *  text: String     // Plain Text for cipher
         *  key: String      // key value for encryption
         * 
         * Requirements:
         *  Each letters in the key should be unique
         * 
         * Returns:
         *  Transposition Cipher for the plain text
         * 
         * Example:
         *  TranspositionCipher.encrypt("HELLOWORLD","IAMKEY")     --> returns ERO~HOLDLLW~
         *  TranspositionCipher.encrypt("IAMPLAINTEXT","KEY")     --> returns ALNXIPIEMATT
         * 
         * Note:
         *  Tilde ( ~ ) is added for blanks or a cell that does not contain data
         * 
         */
        text=text.replace(/[^A-Za-z]/g,"");
        key=key.replace(/[^A-Za-z]/g,"");
        let table=[];
        let ind=0;
        for(var i=0;i<text.length;i+=key.length) {
            let temp=[];
            for(var j=0;j<key.length;j++) {
                temp.push(text[ind]);
                ind++;
            }
            table.push(temp);
        }
        let cipher='';
        let order = TranspositionCipher.keyOrder(key);
        for(var i=0;i<key.length;i++) {
            for(var j=0;j<table.length;j++) {
                if(table[j][order.get(i+1)]!==undefined)
                    cipher+=table[j][order.get(i+1)];
                else cipher+='~';
            }
        }
        return cipher;
    }
}

module.exports=TranspositionCipher;
