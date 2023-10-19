var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()_+";

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("How many characters would you like your password to be?");

// Add a function to generate a password
function generatePassword() {
  var password = "";
  var passwordCharSet = "";
  var passwordLength = prompt("How many characters would you like your password to be?");


// Check to verifty password length is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }

// Confirm what characters to use in password
  var useUpperCase = confirm("Would you like to use uppercase letters?");
  var useLowerCase = confirm("Would you like to use lowercase letters?");
  var useNumbers = confirm("Would you like to use numbers?");
  var useSpecial = confirm("Would you like to use special characters?");

  if (useUpperCase) {
    passwordCharSet += upperCase;
  }

  if (useLowerCase) {
    passwordCharSet += lowerCase;
  }

  if (useNumbers) {
    passwordCharSet += numbers;
  }

  if (useSpecial) {
    passwordCharSet += special;
  }

  if (passwordCharSet === "") {
    alert("You must select at least one character type.");
    return;
  }

// Generate password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordCharSet.length);
    password += passwordCharSet[randomIndex];
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
