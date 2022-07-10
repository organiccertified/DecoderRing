// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const caesarModule = (function () {
  // you can add any code you want within this function scope


  function caesar(input, shift, encode = true) {
    // your solution code here
    try {
      if (shift == 0 || shift > 25 || shift < -25) {
        return false
      }
      let newShift = 0;
      let shifted = []
      newShift = encode ? newShift = shift : newShift = shift * (-1)
      let lowerCaseInput = input.toLowerCase();
      let inputSeparated = separateInput(lowerCaseInput);
      let getAsciis = getAsciiValue(inputSeparated);

      if ((encode == true && shift > 0) || (encode == false && shift < 0)) {
        shifted = getEncoded(getAsciis, newShift);
      } else if ((encode == false && shift > 0) || (encode == true && shift < 0)) {
        shifted = getDecoded(getAsciis, newShift);
      }
      
      let finalcode = getLetters(shifted);
      return finalcode
    } catch (error) {
      return (`${error}`)
    }
  }

  //Separate the input and create an array of each char individually
  function separateInput(input) {
    let inputSplit = input.split("")
    return inputSplit
  }

  //Getting the ascii values of each of the chars in the array
  function getAsciiValue(inputAlreadySplit) {
    let asciiValues = []
    inputAlreadySplit.forEach(letter => {
      let asciiValueOfLetter = letter.charCodeAt();
      if (letter == "" || letter == " ") {
        asciiValues.push(" ")
      }
      // else if(asciiValueOfLetter < 97 || asciiValueOfLetter > 122){ //check if the char is different than any letter in the alphabet
      //   asciiValues.push(letter)
      // }
      else {
        asciiValues.push(asciiValueOfLetter)
      }
    });
    return asciiValues;
  }

  //Creating an array with new values (encoding)
  function getEncoded(oldValues, shift) {
    let newValues = []
    const maxTop = 122
    const minTop = 97
    oldValues.forEach(asciiValue => {
      if (asciiValue == "" || asciiValue == " ") {
        newValues.push(" ")
      } else if (asciiValue < 97 || asciiValue > 122) { //check if the char is different than any letter in the alphabet
        newValues.push(asciiValue)
      } else {
        //Does it maxes 122 ? ex  120 + 3 = 123
        let skipValue = asciiValue + (shift) //skipValue is the value of the ascii of the letter + the shift
        if (skipValue > maxTop) { //123 > 122
          let newValue = minTop - 1 + (skipValue - maxTop) //97 + (123 - 122)
          newValues.push(newValue)
        }
        //Does it mins 97? 97 - 1 = 96
        else if (skipValue < minTop) { // 96 < 97
          let newValue = maxTop + 1 + shift // 122 + (-1)
          newValues.push(newValue) //121
        } else {
          let newValue = asciiValue + shift //80 +3
          newValues.push(newValue) //83
        }
      }
    })
    return newValues;
  }

  //Creating an array with new values (decoding)
  function getDecoded(oldValues, shift) {
    let newValues = []
    const maxTop = 122
    const minTop = 97
    oldValues.forEach(asciiValue => {
      if (asciiValue == "" || asciiValue == " ") {
        newValues.push(" ")
      } else if (asciiValue < 97 || asciiValue > 122) { //check if the char is different than any letter in the alphabet
        newValues.push(asciiValue)
      } else {
        //Does it maxes 122 ? ex  120 + 3 = 123
        let skipValue = asciiValue + (shift)
        if (skipValue < minTop) {
          let newValue = maxTop + 1 - (minTop - skipValue)
          newValues.push(newValue)
        }
        //Does it mins 97? 97 - 1 = 96
        else if (skipValue > maxTop) { // 96 < 97
          let newValue = minTop - 1 - shift // 122 + (-1)
          newValues.push(newValue) //121
        } else {
          let newValue = asciiValue + shift //80 +3
          newValues.push(newValue) //83
        }
      }
    })
    return newValues;
  }


  //Get the letters from the asccii values
  function getLetters(asciiVals) {
    let finalCode = ""
    asciiVals.forEach(value => {
      if (value == "" || value == " ") {
        finalCode += " "
      } else {
        let letter = String.fromCodePoint(value)
        finalCode += letter
      }
    })
    return finalCode
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar
};