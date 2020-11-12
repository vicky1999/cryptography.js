const alphabets=require('../Alphabets');

const RailFenceCipher = (text,key) => {
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

module.exports=RailFenceCipher;
