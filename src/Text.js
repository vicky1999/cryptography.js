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
     *     Text.toBinary("1e") ==> returns '00011110'
     *     Text.toOctal("f2") ==> returns '362'
     *     Text.toDecimal("d") ==> returns '13'
     *     Text.toText("5a") ==> returns 'Z'
     * 
     */

    static toBinary(val) {
        let text='';
        for(var i=0;i<val.length;i++) {
            text+=parseInt(val.charCodeAt(i),10).toString(2);
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
console.log(Text.toBinary('A'));
console.log(Text.toDecimal("A"));
console.log(Text.toOctal('A'));
console.log(Text.toHex("A"));

module.exports=Text;
