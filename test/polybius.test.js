// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests written by Erick ", () => {
  describe("correct encoded messsage", () => {
    it("expect the correct encoded message", () => {
      const message = "Hello World";
      const expected = "3251131343 2543241341"
      const actual = polybius(message);
      // expect(actual).to.be.false;
      expect(actual).to.equal(expected);
    });
})

describe("correct decoded messsage", () => {
  it("expect the correct encoded message", () => {
    const message = "3251131343 2543241341";
    const expected = "hello world"
    const actual = polybius(message, false);
    // expect(actual).to.be.false;
    expect(actual).to.equal(expected);
  });
})

describe("correct decoded messsage", () => {
  it("return false if input is empty", () => {
    const message = "";
    const actual = polybius(message, false);
    expect(actual).to.be.false;
    // expect(actual).to.equal(expected);
  });
})



});
  