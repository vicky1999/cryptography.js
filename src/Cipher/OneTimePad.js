const alphabets=require('../Alphabets');

const OneTimePad = (text,key) => {
    key=key.replace(/[^A-Za-z]/g,"").toUpperCase();
    text=text.replace(/[^A-Za-z]/g ,"").toUpperCase();
    text=text.toUpperCase();
    key=key.toUpperCase();
    if(key.length!==text.length) {
        throw (new Error("key and text should be of same length"));
    }
    let cipher="";
    for(var i=0;i<text.length;i++) {
        let keycode=key.charCodeAt(i)-65;
        let textcode=text.charCodeAt(i)-65;
        let code=((keycode+textcode)%26)+65;
        cipher+=String.fromCharCode(code);
    }
    return cipher;
}

module.exports=OneTimePad;
