// Assignment code here
var passwordNumbers = '1234567890';
var passwordLower = 'abcdefghijklmnopqrstuvwxyz';
var passwordUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var passwordSpecials = '[]{}!@#$%^&*()_-';
var passwordDataSet = '';

function generatePassword() {
  // Get references to the #generate element

  var password_length = window.prompt('Between 8 - 24 charectors, how long would you like your password?')

  // using the parseInt to convert string into integer
  if (parseInt(password_length) <= 24 && parseInt(password_length) >= 8) {
    var use_uppercase = window.confirm('Do you want to use uppercase letters?')
    var use_lowercase = window.confirm('Do you want to use lowercase letters?')
    var use_special = window.confirm('Do you want to use special text letters?')
    var use_Numbers = window.confirm('Do you want to use Numbers?')
    var password = '';

    if (use_uppercase == 1) {
      passwordDataSet = passwordDataSet + passwordUpper;
    };
    if (use_Numbers == 1) {
      passwordDataSet = passwordDataSet + passwordNumbers;
    };
    if (use_lowercase == 1) {
      passwordDataSet = passwordDataSet + passwordLower;
    };
    if (use_special == 1) {
      passwordDataSet = passwordDataSet + passwordSpecials;
    };

    for (var i = 0; i < password_length; i++) {
      var randomIndex = Math.floor(Math.random() * passwordDataSet.length);
      password = password + passwordDataSet[randomIndex];
    }
    return password;
  } else {
    generatePassword();
  }

};

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