const alphabets=require('../Alphabets');

const BaconCipher = (text) => {
    /**
     * 
     * each letter is replaced by a sequence of 5 characters.
     * 
     * Syntax:
     *  BaconCipher(PlainText)
     * 
     * Parameters: 
     *  text: String     // Plain Text for cipher
     * 
     * Returns:
     *  Baconian Cipher for the plain text with all upper case alphabets
     * 
     * Example:
     *  BaconCipher("HELLO")      --> returns aabbbaabaaababbababbabbba
     *  BaconCipher("text")    --> returns baabbaabaababbbbaabb
     * 
     */

    text=text.toUpperCase();
    let cipher='';
    for(var i=0;i<text.length;i++) {
        if(text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90) {
            let val=text.charCodeAt(i)-65;
            val=val.toString(2);
            for(let j=val.length;j<5;j++) {
                cipher+='a';
            }
            for(let j=0;j<val.length;j++) {
                if(val[j]=='0') cipher+='a';
                else cipher+='b';
            }
        }
        else cipher+=text[i];
    }
    return cipher;
}

module.exports=BaconCipher;
