const alphabets=require('../Alphabets');

const AffineCipher = (text,a,b) => {
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

module.exports=AffineCipher;
