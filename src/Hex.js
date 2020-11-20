class Hex {
    /**
     * 
     * Conversion of data from Hexadecimal to Text, Binary, Decimal, and Octal.
     * 
     * Parameters:
     *  val: String  representing the Decimal value
     * 
     * Returns: 
     *  String: Binary, Decimal and Octal representations of the binary data.
     * Eg.:
     *     Hex.toBinary("1e") ==> returns '00011110'
     *     Hex.toOctal("f2") ==> returns '362'
     *     Hex.toDecimal("d") ==> returns '13'
     *     Hex.toText("5a") ==> returns 'Z'
     * 
     */

    static toBinary(val) {
        let bin=parseInt(val,16).toString(2);
        let res='';
        for(var i=bin.length;i<8;i++) {
            res+='0';
        }
        res+=bin;
        return res;
    }
    static toDecimal(val) {
        return parseInt(val,16).toString(10);
    }
    static toOctal(val) {
        return parseInt(val,16).toString(8);
    }
    static toText(val) {
        let bins=val.split(' ');
        let text='';
        for(var i=0;i<bins.length;i++) {
            text+=String.fromCharCode(parseInt(bins[i],16).toString(10));
        }
        return text;
    }
}
console.log(Hex.toBinary('1e'));
console.log(Hex.toDecimal("d"));
console.log(Hex.toOctal('f2'));
console.log(Hex.toText("5a"));

module.exports=Hex;
