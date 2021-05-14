// Assignment code here
var generatePassword = function () {
  var pLength = passLength();
  var passCharList = criteria();
  var passCharListLength = passCharList.length;
  var password = randGen(passCharList, passCharListLength, pLength);
  return password;
}

var passLength = function () {
  passwordLength = prompt("How long would you like your password to be? \n( Must be between 8-128. )");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128.");
    passLength();
  }
  return passwordLength;
}

var criteria = function () {
  var passCharacters = "";
  var chosenCriteria = "";
  var confirmation = true;

  var upper = confirm("Would you like to have upper case characters in your password?");
  var lower = confirm("Would you like to have lower case characters in your password?");
  var number = confirm("Would you like to have numbers in your password?");
  var special = confirm("Would you like to have special characters in your password?");

  if (!upper && !lower && !number && !special) {
    alert("You need to choose at least one criteria.")
    criteria();
  }

  if (upper) {
    passCharacters += characters.upper;
    chosenCriteria += "\n-upper characters ";
  }
  if (lower) {
    passCharacters += characters.lower;
    chosenCriteria += "\n-lower characters ";
  }
  if (number) {
    passCharacters += characters.number;
    chosenCriteria += "\n-number characters ";
  }
  if (special) {
    passCharacters += characters.special;
    chosenCriteria += "\n-special characters ";
  }

  confirmation = confirm("You chose: " + chosenCriteria + "\nIs this correct?");
  if(confirmation) {
    return passCharacters;
  }
  alert("Reselecting characters.");
  return criteria();
  
}

var randGen = function (list, listLength, length) {
  var returnValue = "";
  for (i = 0; i < length; i++) {
    returnValue += list.charAt(Math.floor(Math.random() * listLength));
  }
  console.log(returnValue);
  return returnValue;
}

var characters = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  special: ' "!#$%&()*+,-./:;<=>?@[\]^_`{|}~',
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
