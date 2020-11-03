const assert=require('assert');
const DES=require('../src/Cipher/DES');

describe("DES Test", () => {
    it("DES Test 01", () => {
        assert.strictEqual(DES("0123456789ABCDEF","133457799BBCDFF1"),"85E813540F0AB405");
    });
    it("DES Test 02", () => {
        assert.strictEqual(DES("6D6573736167652E","38627974656B6579"),"7CF45E129445D451");
    });
    it("DES Test 02", () => {
        assert.strictEqual(DES("123456ABCD132536","AABB09182736CCDD"),"C0B7A8D05F3A829C");
    });
})
