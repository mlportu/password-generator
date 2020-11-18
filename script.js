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

var promptResponse = []

 var passLength = prompt("Please select a number between 8 and 128");
 console.log(passLength);

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
  promptResponse = promptResponse.concat(lowerCaseLetters);
}

if(upperCase){
  console.log(upperCaseLetters)
  promptResponse = promptResponse.concat(upperCaseLetters);
}

if(numbers){
  console.log(numbersList)
  promptResponse = promptResponse.concat(numbersList);
}

if(symbols){
  console.log(symbolList)
  promptResponse = promptResponse.concat(symbolList);
}

console.log(promptResponse)

for(var i=0; i< passLength; i++){
randomPass =  Math.floor(Math.random() * promptResponse.length)
}

console.log(randomPass)

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
