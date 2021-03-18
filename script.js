// Assignment Code
var generateBtn = document.querySelector("#generate");

var options=[];


  const minPasswordLength=8;
  var userChoicePasswordLength=16;
  

// Write password to the #password input
function writePassword() {
  options=[];
  
  if (confirm("lowercase?")) {
    options.push(0);  
  }
  
  if (confirm("uppercase?")) {
    options.push(1);  
  }

  if (confirm("numeric?")) {
    options.push(2);  
  }

  if (confirm("special?")) {
    options.push(3);  
  }
  
    var password = generatePassword(options,userChoicePasswordLength);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  
    // passwordText.value = "You didn't select any character types...";
  

}

function generatePassword(Options,UserChoicePasswordLength){
  const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChars="0123456789";
  const specialChars="!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  const allChars=[lowercaseChars,uppercaseChars,numericChars,specialChars];
  
  var passwordBaseChar="";

  for (var i=0; i<options.length; i++){      
    passwordBaseChar+=allChars[Options[i]];
  }

  let randomNumber=0;
  let passwordChar="";
  let passwordGenerated="";

  for(var i=1; i<=UserChoicePasswordLength; i++){
    // console.log(Math.floor(Math.random()*passwordBaseChar.length));
    randomNumber=Math.floor(Math.random()*passwordBaseChar.length);
    passwordChar=passwordBaseChar[randomNumber];
    passwordGenerated+=passwordChar;
  }
  return passwordGenerated;
}

// Add event listener to generate button

  generateBtn.addEventListener("click", writePassword);
