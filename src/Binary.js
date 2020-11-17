class Binary {
    /**
     * 
     * Conversion of data from Binary to Text, Decimal, Octal, and Hexadecimal.
     * 
     * Parameters:
     *  val: String  representing the binary value
     * 
     * Returns: 
     *  String: Decimal, Octal and Hexadecimal representations of the binary data.
     * Eg.:
     *     Binary.toDecimal("1010") ==> returns '10'
     *     Binary.toHex("1010") ==> returns 'a'
     *     Binary.toOctal("1010") ==> returns '12'
     *     Binary.toText("01100001") ==> returns 'a'
     * 
     * 
     */
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
