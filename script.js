// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log('click')
  var password = generatePassword();
  console.log(password)

  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0"];
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "-"];

function generatePassword(){

var promptResponse = [];
randomPass = [];

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
randomPass.push(promptResponse[Math.floor(Math.random() * promptResponse.length)]);
}

console.log(randomPass)

return randomPass.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
