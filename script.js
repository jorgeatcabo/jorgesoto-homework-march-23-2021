// Assignment Code
var generateBtn = document.querySelector("#generate");

let options=[];
options=[0];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function generatePassword(options){
  const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars="!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  const allChars=[lowercaseChars,uppercaseChars,specialChars];
  const minPasswordLength=8;
  let userChoicePasswordLength=8;
  
  // let isUserChoiceLowercaseChars=true;
  // let isUserChoiceUppercaseChars=false;
  // let isUserChoiceSpecialChars=true;

 var charBasePassword="";
 for (var i=0; i<options.length; i++){      
  charBasePassword+=allChars[options[i]];
 }

 console.log(charBasePassword);

  
  //return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword(options);
