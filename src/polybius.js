// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    //FUNCTIONS
    //This function creates the grid
    const createCodeGrid = () => {
      let letterGrid = []
      let startAsciiPos = 97
      let count = 0

      for (let i = 1; i < 6; i++) {
        let tempRow = []
        for (let k = 1; k < 6; k++) {
          if (count == 8) {
            tempRow.push("i/j")
            count = count + 2
          } else {
            tempRow.push(String.fromCodePoint(startAsciiPos + count))
            count++
          }
        }
        letterGrid.push(tempRow)
      }
      return letterGrid
    }

    //This functions splits the input in pairs of numbers if needs to be decode
    const splitInPairs = (stringOfNumbers) =>{
      numbersToDecodeSplit = stringOfNumbers.split("");
      let pairArray = []
      let numberOfPairs = numbersToDecodeSplit.length/2
  
      for(let i = 0; i < numberOfPairs; i++){
        let temp = ""
        for(let k = 0; k < 2; k++){

          if(numbersToDecodeSplit[0] == " "){
            temp += numbersToDecodeSplit[0]
            numbersToDecodeSplit.splice(0, 1)
            k++
          }
          else{
            temp += numbersToDecodeSplit[0]
            numbersToDecodeSplit.splice(0, 1)
          }

        }
        pairArray.push(temp)
      }
      return pairArray;
    }

    //This function creates an array with the pairs for encoding
    const getEncoded = (msgToEncodeSplit) => {
      let encodedMessage = ""
      let rowIndex = 0
      let columnIndex = 0
      let found = false

      //Create grid
      polyGrid = createCodeGrid()

      msgToEncodeSplit.forEach((letter) => {
        let encodedMessageTemp = ""
        if (letter == "i" || letter == "j") {
          encodedMessageTemp = "42"
        } 
        else if(letter == " ") {
          encodedMessageTemp = " "
        }
        else{
          polyGrid.forEach((row) => {
            if (row.some((element) => element == letter)) {
              row.forEach((letterInTheRow) => {
                if (letterInTheRow == letter) {
                  columnIndex = row.indexOf(letter) + 1
                  rowIndex = 0
                  found = true
                }
              })
              if (found) {
                rowIndex = polyGrid.indexOf(row) + 1
                encodedMessageTemp = columnIndex.toString() + rowIndex.toString()
              }
            }
          })
        }
        encodedMessage += encodedMessageTemp
      })
      return encodedMessage
    }

    //This function decodes a msg from numbers to letters
    const getDecoded = (numbersToDecode)=>{
      let msg = ""
      let pairsToLookUp = splitInPairs(numbersToDecode)
      
      return lookForTheLetterInTheGrid(pairsToLookUp)
    }



    //This function look for the letter in the grid
    const lookForTheLetterInTheGrid = (arrayOfPairs)=>{
      polyGrid = createCodeGrid()
      // console.log("grid created")
      let letters = ""

      arrayOfPairs.forEach((pair)=>{
        if(pair == "42"){
          // console.log("ij")
          letters += polyGrid[1][3]
        }
        else if(pair == " "){
          letters += " "
        }
        else{
          splitPair = pair.split("")

          columnPos = splitPair[0] - 1
          rowPos = splitPair[1] - 1

          letters += polyGrid[rowPos][columnPos]
          // console.log(letters)
        }

        
      })
      return letters
    }

    //This function checks if the message is odd or not
    const checkIfMessageIsOdd = (strToCheck) =>{ //es impar?
      let splitAlready = strToCheck.split(" ")
      let isOdd = false
      let count = 0;

      splitAlready.forEach((pair)=>{
        if(pair == " "){
          // count++
        }
        else if(pair.length % 2 != 0 ){
          isOdd = true
        }
        
        
      })

      return isOdd

    }

    //FINAL RETURN
    //Check if code or decode message
    if(encode){
      
      return getEncoded(input.split(""))
    }
    else if(encode==false){
      //check if length of input is odd
      
      if(checkIfMessageIsOdd(input)){
        // console.log("odd")

        return false
        
      }
      else{
        // console.log("even")
        let decodedMsg = getDecoded(input)
        return decodedMsg
      }
      
      

      //this function splits into letters the input and adds it into an array
      

    }
    

  }



  // console.log("my message");
  console.log(polybius("2345 23513434112251", false))

  return {
    polybius,
  };
})();

module.exports = {
  polybius: polybiusModule.polybius
};