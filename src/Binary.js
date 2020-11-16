let Binary = (data) => {
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