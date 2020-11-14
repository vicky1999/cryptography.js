const { VigenereCipher } = require('../bundle');

const AutoKeyCipher=(text,key) => {
    let ind=0;
    for(var i=key.length;i<text.length;i++) {
        key+=text[ind];
        ind++;
    }
    let cipher=VigenereCipher(text,key);
    return cipher;
}

console.log(AutoKeyCipher("DEFENDTHEEASTWALLOFTHECASTLE","fortification"));