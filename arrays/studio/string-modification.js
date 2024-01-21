const input = require('readline-sync');
let str = "LaunchCode";

let userInput = input.question('How many characters to remove?');
let relocatedCharsCount = Number(userInput);

if(relocatedCharsCount > str.length) {
    relocatedCharsCount = 3;
}
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strCut = str.substring(0, relocatedCharsCount);
let strEnd = str.slice(relocatedCharsCount);
console.log(`${strEnd}${strCut}`);
//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
