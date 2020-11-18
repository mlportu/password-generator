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
 console.log(samplePrompt);

 var lowerCase = confirm("Lowercase");
 console.log(lowerCase);

 var upperCase = confirm("Uppercase");
 console.log(upperCase);

 var numbers = confirm("numbers");
 console.log(numbers);

 var symbols = confirm("symbols");
 console.log(symbols);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
