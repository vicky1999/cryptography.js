class Binary {
    static toDecimal(val) {
        return parseInt(val,2).toString(10);
    }
    static toOctal(val) {
        return parseInt(val,2).toString(8);
    }
    static toHex(val) {
        return parseInt(val,2).toString(16);
    }
    static toText(val) {
        let bins=val.split(' ');
        let text='';
        for(var i=0;i<bins.length;i++) {
            text+=String.fromCharCode(parseInt(bins[i],2).toString(10));
        }
        return text;
    }
}

module.exports=Binary;
