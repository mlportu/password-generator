// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log('click')
  var password = generatePassword();

  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword(){
 var samplePrompt = prompt("This is a sample prompt to get information");
 console.log(samplePrompt)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
