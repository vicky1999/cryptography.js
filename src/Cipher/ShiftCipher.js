const { charCodeAt } = require('../Alphabets');
const alphabets=require('../Alphabets');

const ShiftCipher = (text, shift) => {
    cipher="";
    for(var i=0; i<text.length; i++) {
        var index=(alphabets.indexOf(text[i])+shift) % 26;
        if(index !== -1) {
            if(text.charCodeAt(i) < 97) {
                cipher+=alphabets[index];
            }
            else {
                cipher+=alphabets[index].toLowerCase();
            }
        }
        else {
            cipher+=text[i];
        }
    }
    return cipher;
}

module.exports=ShiftCipher;
