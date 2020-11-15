const PorteCipher = (text,key) => {
    text=text.replace(/[^A-Za-z]/g,"").toUpperCase();
    key=key.replace(/[^A-Za-z]/g,"").toUpperCase();
    let cipher='';
    let tableau=
        [
                ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
                ['o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'n', 'm', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
                ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'n', 'o', 'l', 'm', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], 
                ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'n', 'o', 'p', 'k', 'l', 'm', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
                ['r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'n', 'o', 'p', 'q', 'j', 'k', 'l', 'm', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
                ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'n', 'o', 'p', 'q', 'r', 'i', 'j', 'k', 'l', 'm', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
                ['t', 'u', 'v', 'w', 'x', 'y', 'z', 'n', 'o', 'p', 'q', 'r', 's', 'h', 'i', 'j', 'k', 'l', 'm', 'a', 'b', 'c', 'd', 'e', 'f', 'g'],
                ['u', 'v', 'w', 'x', 'y', 'z', 'n', 'o', 'p', 'q', 'r', 's', 't', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'a', 'b', 'c', 'd', 'e', 'f'],
                ['v', 'w', 'x', 'y', 'z', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'a', 'b', 'c', 'd', 'e'],
                ['w', 'x', 'y', 'z', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'a', 'b', 'c', 'd'],
                ['x', 'y', 'z', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'a', 'b', 'c'],
                ['y', 'z', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'a', 'b'],
                ['z', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'a']
        ];
    for(var i=0;i<text.length;i++) {
        let keyValue=Math.floor((key.charCodeAt(i%key.length)-65)/2);
        let textValue=text.charCodeAt(i)-65;
        cipher+=tableau[keyValue][textValue];
    }
    return cipher.toUpperCase();
    
}

module.exports=PorteCipher;
