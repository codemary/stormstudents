//1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
let myString = `I can walk in the park all day.`;
console.log(myString.slice(myString.indexOf(`park`), myString.indexOf(`park`) + 4));


//2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
myString = `JavaScript`;
console.log(myString.substr(3, 3));

//3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
myString = `Hello World!`;
console.log(myString.toUpperCase());

//4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
myString = `Hello Earthlings`;
console.log(myString.toLowerCase());


//5. Check if the sentence "nice shoes" contains the letter l or n. 
myString = `nice shoes`;
let search1 = myString.search(`l`);
let search2 = myString.search(`n`);
console.log(search1, search2);

//6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ
myString = `JavaScript`;
console.log(myString[0] + myString + myString[0]);

//7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
//eg. of output: javascript => iptJavaScriptipt
console.log(myString.substr(-3) + myString + myString.substr(-3));

//8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".
console.log(myString.includes(`Java`));

//9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
let first = myString[0];
let last = myString[9];
console.log(myString.replace(myString[myString.length -1], first).replace(myString[0], last));




//10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 

//11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
