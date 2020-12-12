const alphabets= require('../Alphabets');

const position = (grid, val) => {
    for(var i=0;i<5;i++) {
        for(var j=0;j<5;j++) {
            if(grid[i][j]===val) {
                return [i,j];
            }
        }
    }
}

class PlayFairCipher {

    static encrypt(text, key) {
        /**
         * 
         * Encrypts data using 5*5 grid
         * 
         * Syntax:
         *  PlayFairCipher(PlainText,key)
         * 
         * Parameters: 
         *  text: String     // Plain Text for cipher
         *  key: String      // key value for encryption
         * 
         * Returns:
         *  Playfair Cipher for the plain text with all upper case alphabets
         * 
         * Example:
         *  PlayFairCipher.encrypt("PLAYFAIRCIPHER","ENCRYPTION") --> returns TKHAHIOCIFABNY
         *  PlayFairCipher.encrypt("PROGRAMMING","HELLOWORLD")    --> returns NDEKDBIZFQMV
         * 
         */

        let grid=[];
        let temp=[];
        text=text.toUpperCase();
        key=key.toUpperCase();
        key=key.replace(/J/g,"I");
        text.replace(/J/g,"I");
        for(var i=0;i<key.length;i++) {
            let isPresent=false;
            for(var j=i-1;j>=0;j--) {
                if(key[j]===key[i]) {
                    isPresent=true;
                    break;
                }
            }
            if(!isPresent) {
                temp.push(key[i]);
            }
            if(temp.length === 5) {
                grid.push(temp);
                temp=[];
            }
        }
        if(text.length % 2 !== 0) {
            text+='Z';
        }
        let uniques=[]
        for(var i=0;i<26;i++) {
            for(var j=0;j<key.length;j++) {
                if(alphabets[i]===key[j]) {
                    break;
                }
            }
            if(alphabets[i]!==key[j] && alphabets[i]!=='J') {
                uniques.push(alphabets[i]);
            }
        }
        for(var i=0;i<uniques.length;i++) {
            if(temp.length===5) {
                grid.push(temp);
                temp=[];
            }
            temp.push(uniques[i]);
            if(temp.length===5) {
                grid.push(temp);
                temp=[];
            }
        }
        let cipher="";
        for(var i=0;i<text.length-1;i+=2) {
            var first=text[i];
            var second=text[i+1];
            if(first==second) {
                second='X';
            }
            let first_position=position(grid, first);
            let second_position=position(grid, second);
            if(first_position[1]===second_position[1]) {
                cipher+=grid[(first_position[0]+1)%5][first_position[1]]+grid[(second_position[0]+1)%5][second_position[1]];
            }
            else if(first_position[0]==second_position[0]) {
                cipher+=grid[first_position[0]][(first_position[1]+1)%5]+grid[second_position[0]][(second_position[1]+1)%5];
            }
            else {
                cipher+=grid[first_position[0]][second_position[1]];
                cipher+=grid[second_position[0]][first_position[1]];
            }
        }
        return cipher;
    }
}

module.exports=PlayFairCipher;
