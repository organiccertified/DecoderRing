// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length != 26 || !checkIfUnique(alphabet)){
      return false
    }
    alphabetSplit = alphabet.split("")
   
    if(encode == true){
      return getEncoded(input)

    }
    else if(encode ==false){
      return getDecoded(input)
    }
  }

  //Function to create commonAlphabet array
  const commonAlphabet = () =>{
    const commonAlphabetAr = []
    for(let i = 0; i < 26; i++){
      commonAlphabetAr.push(String.fromCharCode(97+i)) 
    }
    return commonAlphabetAr
  }

  //Function to Decode Message
  const getDecoded = (messageToDecode) => {
    let messageToDecodeSplit = messageToDecode.split("")
    let commonAlphabetAr = commonAlphabet();
    let newLetter =""

    messageToDecodeSplit.forEach((letter)=>{
      if(letter == " "){
        newLetter+=" "
      }
      else{
        commonAlphabetAr.find((element)=>{
          if(letter == element){
            let commonIndex = commonAlphabetAr.indexOf(element)
            newLetter += alphabetSplit.at(commonIndex)
            // console.log(newLetter)
          }
        })
      }
    })
    
    return newLetter
  }
  

  //Function to Encode Message
  const getEncoded = (messageToEncode) =>{
    let messageToEncodeSplit = messageToEncode.split("")
    let commonAlphabetAr = commonAlphabet();
    let newLetter =""

    messageToEncodeSplit.forEach((letter)=>{
      if(letter == " "){
        newLetter+=" "
      }
      else{
        commonAlphabetAr.find((element)=>{
          if(letter == element){
            let commonIndex = commonAlphabetAr.indexOf(element)
            newLetter += alphabetSplit.at(commonIndex)
            // console.log(newLetter)
          }
        })
      }
    })
    
    return newLetter
  }

  //Function check if alphabet contains unique chars
   function checkIfUnique(chars){
    let splitStr = chars.split("")
    let splitStrCopy = chars.split("")
    let duplicatedCharFlag = false
    let unique = true

    splitStr.forEach((element)=> {
      splitStrCopy.splice(0, 1)
      duplicatedCharFlag = splitStrCopy.some((duplicated) => element == duplicated)

      if(duplicatedCharFlag == true){
        unique = false
      }  

      

    })
    return unique
   }
   console.log("ykrrpik")
   console.log(substitution("message", ".lmoknijbuhvygctfxrdzeswaq"))

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
