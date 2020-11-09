const ROT13 = (text) => {
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

module.exports=ROT13;