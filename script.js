// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log('click')
  var password = generatePassword();

  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

var lowerCaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbersList = ["1234567890"];
var symbolList = ["!@#$%^&*()_+=-"];

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


if(lowerCase){
  console.log(lowerCaseLetters)
}

if(upperCase){
  console.log(upperCaseLetters)
}

if(numbers){
  console.log(numbersList)
}

if(symbols){
  console.log(symbolList)
}

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
