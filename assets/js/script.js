// Assignment Code
var generateBtn = document.querySelector("#generate")
const minPasswordLength = 8
const maxPasswordLength = 128

//Array For Storing Character Types Selections
var options = []

// Write password to the #password input
function writePassword() {
  options = []
  var userChoicePasswordLength = 0

  //Asking user for password length

  let isNumber = false
  //Loop for verifying the input be a number
  while (!isNumber) {
    userChoicePasswordLength = prompt("Length of password (8-128):");
    // userChoicePasswordLength = parseInt(prompt("Length of password (8-128):"))
    let validateNumber = parseInt(userChoicePasswordLength)
    // In case of user selects cancel, the program ends.
    if (userChoicePasswordLength === null) {
      console.log("break");
      return;
    }

    if (/^[0-9.,]+$/.test(validateNumber)) {
      isNumber = true
    } else {
      isNumber = false
      alert("The input must be a number...")
    }
  }

  /* 
  In case of user inputs a length, It is going to verify
  the min and max length.
  */
  while (
    userChoicePasswordLength < minPasswordLength ||
    userChoicePasswordLength > maxPasswordLength
  ) {
    /*If the length is not accomplished, It is going 
to be asking to input the length again.
*/
    userChoicePasswordLength = prompt("Length of password (8-128):")

    // In case of user selects cancel, the program ends.
    if (userChoicePasswordLength === null) {
      return
    }
  }

  /*
If the user not select at least on character type, 
the program is going to be asking to do it.
*/
  while (options.length == 0) {
    if (confirm("lowercase?")) {
      options.push(0)
    }

    if (confirm("uppercase?")) {
      options.push(1)
    }

    if (confirm("numeric?")) {
      options.push(2)
    }

    if (confirm("special?")) {
      options.push(3)
    }
    if (options.length == 0) {
      alert("Choose at least one character type...")
    }
  }

  /*
If the above conditions are accomplished, 
It is called the function for generating the password,
and shown it on screen.
*/
  var password = generatePassword(options, userChoicePasswordLength)
  var passwordText = document.querySelector("#password")
  passwordText.value = password
}

function generatePassword(Options, UserChoicePasswordLength) {
  /*
This function receives the character types selected 
and the password length.
Options and UserChoicePasswordLength
*/

  /*
Are defined some constants with the character types content.
*/
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numericChars = "0123456789"
  const specialChars = "!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"

  //One constant stores the whole character types in the order was selected.
  const allChars = [lowercaseChars, uppercaseChars, numericChars, specialChars]

  //Variable that holds the group of character types selected.
  var passwordBaseChar = ""

  //Loop for filling the variable that holds the character types group selected,
  for (var i = 0; i < options.length; i++) {
    passwordBaseChar += allChars[Options[i]]
  }

  let randomNumber = 0
  let passwordChar = ""
  let passwordGenerated = ""

  /*
  Loop that iterate the password length input, 
  and generating the password randomly from the character types group created.
  */
  for (var i = 1; i <= UserChoicePasswordLength; i++) {
    randomNumber = Math.floor(Math.random() * passwordBaseChar.length)
    passwordChar = passwordBaseChar[randomNumber]
    passwordGenerated += passwordChar
  }

  return passwordGenerated
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
