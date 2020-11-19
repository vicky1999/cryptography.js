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
     *     Decimal.toBinary("65") ==> returns '01000001'
     *     Decimal.toHex("30") ==> returns '1e'
     *     Decimal.toOctal("15") ==> returns '17'
     *     Decimal.toText("65 84") ==> returns 'AT'
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

console.log(Octal.toBinary("143"))

module.exports=Octal;
