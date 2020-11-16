let Binary = (data) => {
    /**
     * Converts data to binary
     * 
     * Parameters:
     *  data: String or number
     * 
     * Returns: 
     *  Binary representation of the data.
     *  
     * Example: 
     *  Binary(10)   ---> returns 1010
     *  Binary('ab') ---> returns 0110000101100010
     *  
     */

    if(typeof(data)==='number') {
        return data.toString(2);
    }
    else if(typeof(data)==='string') {
        let bin='';
        for(var i=0;i<data.length;i++) {
            let binary=data.charCodeAt(i).toString(2);
            let prepend='';
            for(var j=0;j<8-binary.length;j++) {
                prepend+='0';
            }
            bin+=prepend+binary;
        }
        return bin;
    }
}

module.exports=Binary;
