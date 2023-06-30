// Assignment code here


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



// Get password length from user input
function getPasswordLength() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");

  // Validate user input
  while (length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    length = prompt("Enter the length of the password (between 8 and 128 characters):");
  }

  return length;
}