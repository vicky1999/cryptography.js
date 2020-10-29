const alphabets = require('../Alphabets');

const VigenereCipher = (text,key) => {
    key=key.replace(/[^A-Za-z]/g,"").toUpperCase();
    text=text.replace(/[^A-Za-z]/g ,"").toUpperCase();
    var cipher="";
    for(var i=0;i<text.length;i++) {
        let code=((text.charCodeAt(i)-65) + (key.charCodeAt(i%key.length)-65))%26;
        code += 65;
        cipher+=String.fromCharCode(code);
    }
    return cipher;
}

module.exports=VigenereCipher;
