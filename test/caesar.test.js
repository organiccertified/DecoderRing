// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");


describe("Tests written by ErickM", ()=>{
    describe("encoding simple messsage",() =>{
        it("it should encode a simple hello world message, space and capital letters",()=>{
            const message = "Hello World";
            const shift = 1;
            const expected = "ifmmp xpsme"
            const actual = caesar(message, shift)
            expect(actual).to.equal(expected);
        })
    });

    describe("negative encoding simple messsage",() =>{
        it("it should encode a simple hello world message",()=>{
            const message = "Hello World";
            const shift = -1;
            const expected = "gdkkn vnqkc"
            const actual = caesar(message, shift)
            expect(actual).to.equal(expected);
        })
    });

    describe("decoding simple messsage",() =>{
        it("it should encode a simple hello world message",()=>{
            const message = "ifmmp xpsme";
            const shift = 1;
            const decode = false
            const expected = "hello world"
            const actual = caesar(message, shift, false)
            expect(actual).to.equal(expected);
        })
    });

    describe("negative decoding simple messsage",() =>{
        it("it should encode a simple hello world message",()=>{
            const message = "hello world";
            const shift = -1;
            const decode = false
            const expected = "ifmmp xpsme"
            const actual = caesar(message, shift, false)
            expect(actual).to.equal(expected);
        })
    });

    describe("Encoding simple messsage but wrapping to the last letter",() =>{
        it("it should wrap to the last letter of the alphabet",()=>{
            const message = "A B C";
            const shift = -1;
            const expected = "z a b"
            const actual = caesar(message, shift)
            expect(actual).to.equal(expected);
        })
    });
    
    describe("Encoding simple messsage but wrapping to first letters",() =>{
        it("it should wrap to the last letter of the alphabet",()=>{
            const message = "z X y Z";
            const shift = 3;
            const expected = "c a b c"
            const actual = caesar(message, shift)
            expect(actual).to.equal(expected);
        })
    });

})
