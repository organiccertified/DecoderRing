// Write your tests here!
const expect = require("chai").expect;
const caesarFunction = require("../src/caesar")

describe("caesarFunction",() =>{
    it("it should encode a simple hello world message"),()=>{
        const input = "Hello World!";
        const shift = 1;
        const encode = true;
        const expected = "ifmmp xpsme"
        const actual = caesarFunction(input, shift, encode)

    }
})
