class Octal {
    /**
     * 
     * Conversion of data from Decimal to Text, Binary, Octal, and Hexadecimal.
     * 
     * Parameters:
     *  val: String  representing the Decimal value
     * 
     * Returns: 
     *  String: Binary, Octal and Hexadecimal representations of the binary data.
     * Eg.:
     *     Octal.toBinary("65") ==> returns '00110101'
     *     Octal.toHex("30") ==> returns '18'
     *     Octal.toDecimal("15") ==> returns '13'
     *     Octal.toText("102 104") ==> returns 'BD'
     * 
     */

    static toBinary(val) {
        let bin=parseInt(val,8).toString(2);
        let res='';
        for(var i=bin.length;i<8;i++) {
            res+='0';
        }
        res+=bin+' ';
        return res;
    }
    static toDecimal(val) {
        return parseInt(val,8).toString(10);
    }
    static toHex(val) {
        return parseInt(val,8).toString(16);
    }
    static toText(val) {
        let bins=val.split(' ');
        let text='';
        for(var i=0;i<bins.length;i++) {
            text+=String.fromCharCode(parseInt(bins[i],8).toString(10));
        }
        return text;
    }
}

module.exports=Octal;
