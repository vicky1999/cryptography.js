const PolybiusCipher = (text,key) => {
    key=key.toUpperCase();
    text=text.toUpperCase();
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

module.exports=PolybiusCipher;
