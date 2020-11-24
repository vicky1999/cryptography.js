class Text  {
    /**
     * 
     * Conversion of text to Hexadecimal, Binary, Decimal, and Octal.
     * 
     * Parameters:
     *  val: String  representing the text value
     * 
     * Returns: 
     *  String: Binary, Decimal and Octal representations of the binary data.
     * Eg.:
     *     Text.toBinary("A") ==> returns '01000001'
     *     Text.toOctal("A") ==> returns '101'
     *     Text.toDecimal("A") ==> returns '65'
     *     Text.toHex("A") ==> returns '41'
     * 
     */

    static toBinary(val) {
        let text='';
        for(var i=0;i<val.length;i++) {
            var temp=parseInt(val.charCodeAt(i),10).toString(2);
            for(var i=temp.length;i<8;i++) {
                text+='0';
            }
            text+=temp;
        }
        return text;
    }
    static toHex(val) {
        let text='';
        for(var i=0;i<val.length;i++) {
            text+=parseInt(val.charCodeAt(i),10).toString(16);
        }
        return text;
    }
    static toOctal(val) {
        let text='';
        for(var i=0;i<val.length;i++) {
            text+=parseInt(val.charCodeAt(i),10).toString(8);
        }
        return text;
    }
    static toDecimal(val) {
        let text='';
        for(var i=0;i<val.length;i++) {
            text+=parseInt(val.charCodeAt(i),10).toString();
        }
        return text;
    }
}

module.exports=Text;
