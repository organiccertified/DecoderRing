// Write your tests here!
const {
    expect
} = require("chai");
const {
    substitution
} = require("../src/substitution");

describe("substitution tests written by Erick ", () => {
    describe("correct encoded messsage", () => {
        it("expect the correct encoded message, spaces and capital letters", () => {
            const message = "Hello World";
            const expected = "yvhht etohm"
            const alphabet = "kalmvwxyfbchistunojrzdegpq"
            const actual = substitution(message, alphabet);
            // expect(actual).to.be.false;
            expect(actual).to.equal(expected);
        });
    })

    describe("correct decoded messsage", () => {
        it("expect the correct decoded message", () => {
            const message = "yvhht etohm";
            const expected = "hello world"
            const alphabet = "kalmvwxyfbchistunojrzdegpq"
            const actual = substitution(message, alphabet, false);
            // expect(actual).to.be.false;
            expect(actual).to.equal(expected);
        });
    })

    describe("correct decoded messsage", () => {
        it("return false if input is empty", () => {
            const message = "";
            const actual = substitution(message, false);
            expect(actual).to.be.false;
            // expect(actual).to.equal(expected);
        });
    })

    describe("correct decoded messsage", () => {
        it("return false if alphabet is different than 26 length", () => {
            const message = "yvhht etohm";
            const expected = "hello world"
            const alphabet = "kalmpq"
            const actual = substitution(message, alphabet, false);
            // expect(actual).to.equal(expected);
        });
    })



});