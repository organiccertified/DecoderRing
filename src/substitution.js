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
   
    if(encode == true){
      return getEncoded(input, alphabet)

    }
    else if(encode ==false){
      return getDecoded(input, alphabet)
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
  const getDecoded = (messageToDecode, alphabet) => {
    let messageToDecodeSplit = messageToDecode.split("")
    const commonAlphabetAr = commonAlphabet();
    const decoderAlphabetAr = alphabet.split("");
    let newLetter =""

    messageToDecodeSplit.forEach((letter)=>{
      if(letter == " "){
        newLetter+=" "
      }
      else{
        decoderAlphabetAr.find((element)=>{
          if(letter == element){
            let commonIndex = decoderAlphabetAr.indexOf(element)
            newLetter += commonAlphabetAr.at(commonIndex)
            // console.log(newLetter)
          }
        })
      }
    })
    
    return newLetter
  }
  

  //Function to Encode Message
  const getEncoded = (messageToEncode, alphabet) =>{
    let messageToEncodeSplit = messageToEncode.split("")
    const commonAlphabetAr = commonAlphabet();
    let alphabetSplit = alphabet.split("")
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
   console.log(substitution("message", "plmoknijbuhvygctfxrdzeswaq"))

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
