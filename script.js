// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Add event listener to copy password to clipboard when the password box is clicked
  passwordText.addEventListener("click", function() {
    copyToClipboard(passwordText);
  });
}

// Function to generate a random password
function generatePassword() {
   // Define character sets for the password
   var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
   var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var numericChars = "0123456789";
   var specialChars = "!@#$%^&*()_+-=[]{}|;':,.<>?";
 
   // Initialize the combined character set
   var allChars = "";
 
   // Prompt user for password length
   var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");
 
   // Validate user input for password length
   if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
     alert("Please enter a valid password length between 8 and 128 characters.");
     return "";
   }
 
   // Confirm user for including lowercase characters
   if (confirm("Include lowercase characters? Click OK for Yes, Cancel for No.")) {
     allChars += lowercaseChars;
   }
 
   // Confirm user for including uppercase characters
   if (confirm("Include uppercase characters? Click OK for Yes, Cancel for No.")) {
     allChars += uppercaseChars;
   }
 
   // Confirm user for including numeric characters
   if (confirm("Include numeric characters? Click OK for Yes, Cancel for No.")) {
     allChars += numericChars;
   }
 
   // Confirm user for including special characters
   if (confirm("Include special characters? Click OK for Yes, Cancel for No.")) {
     allChars += specialChars;
   }
 
   // Check if at least one character set is selected
   if (allChars === "") {
     alert("Please select at least one type of characters for the password.");
     return "";
   }
 
   // Initialize the generated password
   var generatedPassword = "";
 
   // Generate password using random characters
   for (var i = 0; i < passwordLength; i++) {
    console.log("var i", i);
     var randomIndex = Math.floor(Math.random() * allChars.length); 
     console.log("randomIndex", randomIndex);
     generatedPassword += allChars.charAt(randomIndex);
     console.log("allChars", allChars);
      console.log("generatedPassword", generatedPassword);
   }
 
   // Return the generated password
   return generatedPassword;
 }
 

// Function to copy text to clipboard
function copyToClipboard(element) {
  // Use the modern Clipboard API
  navigator.clipboard.writeText(element.value)
    .then(function() {
      // Success message (optional)
      alert("Password copied to clipboard!");
    })
    .catch(function(err) {
      console.error('Unable to copy to clipboard', err);
    });
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
