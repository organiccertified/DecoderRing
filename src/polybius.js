// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    //this function splits into letters the input and adds it into an array
    let splitInput = input.split("")


    //This function creates the grid
    const createArray = () => {
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


    //creates a letter grid
    polyGrid = createArray()



    //This function creates an array with the pairs for encoding
    const getEncoded = (msgToEncodeSplit) => {
      let encodedMessage = ""
      let rowIndex = 0
      let columnIndex = 0
      let found = false

      msgToEncodeSplit.forEach((letter) => {


        let encodedMessageTemp = ""

        if (letter == "i" || letter == "j") {
          encodedMessageTemp = "42"
        } else {
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
                rowIndex = polyGrid.indexOf(row)
                encodedMessageTemp = columnIndex.toString() + rowIndex.toString()
              }

            }


          })


        }
        encodedMessage += encodedMessageTemp
      })

      return encodedMessage

    }




    return getEncoded(splitInput)









  }



  console.log("23513434112251");
  console.log(polybius("message"))
  return {
    polybius,
  };
})();

module.exports = {
  polybius: polybiusModule.polybius
};