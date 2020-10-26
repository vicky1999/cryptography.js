const assert=require('assert');
const ShiftCipher=require('../src/Cipher/ShiftCipher');

assert(ShiftCipher("ABCD",3) == "DEFG");
assert(ShiftCipher("HeLlO WoRlD",1) == "IaMaPAXaSaE");