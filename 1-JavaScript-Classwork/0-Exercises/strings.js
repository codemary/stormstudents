/* let myString = "Please locate where locate 'locate' occurs!";
console.log(myString.length);

// position
let findPosition = myString.indexOf("locate", 13);
console.log(findPosition); // 20
console.log(myString.indexOf("l")); // 1

let findLastPosition = myString.lastIndexOf("locate", 15);
console.log(findLastPosition); // 7

// search
let searchString = myString.search("where");
console.log(searchString); // 14

// EXTRACT PARTS OF A STRING
let stringFruits = "Appla, Cherry, Kiwi";
let sliceString = stringFruits.slice(7, 13);
console.log(sliceString); // Cherry
console.log(stringFruits); // Appla, Cherry, Kiwi

let subStringString = stringFruits.substring(7);
console.log(subStringString);
console.log(stringFruits);

let subStrString = stringFruits.substr(7, 5);
console.log(subStrString); // Cherr

// REPLACING
let stringToBeReplaced = "It is a lovely lovely day";
let replacedStringg = stringToBeReplaced.replace(/Lovely/ig, "cold");
console.log(replacedStringg); // It is a cold cold day
console.log(stringToBeReplaced); // It is a lovely lovely day

// trim
let newString1 = "        Hello World!      "
let trimNewString = newString1.trim();
console.log(trimNewString); // Hello World!

// EXTRACTING STRING CHARACTERS

let newString = "Hello World!";
let charAtNewString = newString.charAt(0);
console.log(charAtNewString); // H

let CharCodeAtNewString = newString.charCodeAt(0);
console.log(CharCodeAtNewString); // 72


// CONVERTING A STRING INTO AN ARRAY

let myNewString = "a, b, c, d";
console.log(myNewString.split(" ")); // [a, b, c, d]
console.log(typeof myNewString); // string


let stringToArray = myNewString.split(" ");
console.log(myNewString); // a, b, c, d
console.log(typeof stringToArray); // object */

//1. Write a program to check whether JavaScript is a string or not.
let language = "javaScript";
let isString = (typeof language == "string") ? true:false;
console.log(`${language} is a string: ${isString}`);

//2. Write a program to check whether a string is empty or not.
if (language.length < 1) {
    console.log(`"language" is an empty string.`)
} else console.log(`"language" is not an empty string.`)

//3. Write a program to split a string and convert it into an array of words. E.g. text: "I like to walk in the park.
let myString1 = "I like to walk in the park.";
let myArray1 = myString1.split(` `);
console.log(myArray1);

//4. Write a program to convert a string in abbreviated form. E.g. John Smith -> John S.
let myName = "Hannah Klein";
let myAbb = myName.substring(0, myName.indexOf(` `) + 2) + ".";
console.log(myAbb);

//5. Write a program to hide email addresses to protect from unauthorized user. E.g. "john_smith@example.com" -> "john...@example.com"
let myEmail = "example.test@email.com";
let hiddenEmail = myEmail.substr(0, 2) + "..." + myEmail.substr(myEmail.indexOf("@"));
console.log(hiddenEmail);

//6. Write a program to change a string to the following format: E.g. John Smith from Berlin -> john-smith-from-berlin.
let myString2 = "John Smith from Berlin";
let transform2 = myString2.split(` `).join(`-`).toLowerCase();
console.log(transform2);

//7. Write a program to convert a string into camel case. E.g. "john smith" -> "johnSmith"
let myArray2 = myString2.split(` `);
let camelCase = [];
for (let i = 0; i < myArray2.length; i++) {
    camelCase.push(myArray2[i][0].toUpperCase() + myArray2[i].substr(1));
}
camelCase = camelCase.join(``);
camelCase = camelCase[0].toLowerCase() + camelCase.substr(1);
console.log(camelCase);

//8. Write a program that returns ordinal numbers (1st, 2nd, 3rd, 4th, 5th etc.)
let endNum = 10;
let myArray3 = [];
for (let i = 1; i <= endNum; i++) {
    if (i === 1) {
        myArray3.push(`${i}st`);
    } else if (i === 2) {
        myArray3.push(`${i}nd`);
    } else if (i === 3) {
        myArray3.push(`${i}rd`);
    } else myArray3.push(`${i}th`);
}
console.log(myArray3);

//9. Declare a variable and sort the characters into alphabetical order.
let myString3 = "I live in Berlin";
let stringSort = myString3.replace(/ /g, ``).toLowerCase().split(``).sort();
console.log(stringSort);

//10. Write a program that takes a number (1-60) and returns a corresponding string of hyphens. Examples: (1) ➞ "-" (5) ➞ "-----" (3) ➞ "---"
let character = "-";
let myString4 = "";
let myNum1 = 5;
for (let i = 1; i <= myNum1; i++) {
    myString4 = myString4.concat(character);
}
console.log(myString4);

//Arrays

//1. Leap Years Write a program which finds the leap years in a given range of years.
let startYear = 1899;
let endYear = 1919;

if (startYear > endYear) {
    console.log("Oops! You did something wrong.")
} else 
    for (let i = startYear; i <= endYear; i++) {
        if (i % 4 != 0) {
            console.log(`${i} is a common year.`);
        } else if (i % 100 != 0) {
            console.log(`${i} is a leap year.`)
        } else if (i % 400 != 0) {
            console.log(`${i} is a common year.`);
        } else console.log(`${i} is a leap year`)
    }


//2. First & Last Write a program that takes an array and returns the first and last elements as a new array.
//   Expected Output: [5, 10, 15, 20, 25] ➞ [5, 25] ["javascript", 13, null, false, true] ➞ ["javascript", true] [undefined, 4, "6", "hello", null] ➞ [undefined, null]

//let myArray4 = [5, 10, 15, 20, 25];
let myArray4 = ["javascript", 13, null, false, true];
//let myArray4 = [undefined, 4, "6", "hello", null];
let arrayParts = [];
arrayParts.push(myArray4[0], myArray4[myArray4.length -1]);
console.log(arrayParts);

//3. Find the Smallest Number Write a program that takes an array of numbers and returns the smallest number in the set.
//E.g [34, 15, 88, 2] ➞ 2 [34, -345, -1, 100] ➞ -345 [-76, 1.345, 1, 0] ➞ -76 [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999 [7, 7, 7] ➞ 7
//let myArray5 = [34, 15, 88, 2];
//let myArray5 = [34, -345, -1, 100];
//let myArray5 = [-76, 1.345, 1, 0];
let myArray5 = [0.4356, 0.8795, 0.5435, -0.9999];
//let myArray5 = [7, 7, 7];
let smallestNum = myArray5[0];
for (let i = 0; i < myArray5.length; i++) {
    for (let j = 0; j < myArray5.length; j++) {
        if (smallestNum > myArray5[j]) {
            smallestNum = myArray5[j];
        }
    }
}
console.log(smallestNum);

//4. Return Student Names Write a program that takes an array of students and returns an array of student names. Example: [ { name: "Steve"}, { name: "Mike"}, { name: "John"} ]
//➞ ["Steve", "Mike", "John"]
let myArray6 = [ { name: "Steve"}, { name: "Mike"}, { name: "John"}, { name: "Ted"}, { name: "Alex"}, { name: "Matt"} ];
let newArray6 = [];
for (let i = 0; i < myArray6.length; i++) {
    newArray6.push(myArray6[i].name)
}
console.log(newArray6);

//5. Spell it out Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
//E.g. spelling("bee") ➞ ["b", "be", "bee"] spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"] spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]
let myString5 = "spaceship";
let newString5 = "";
let myArray7 = [];

/* for (let i = 0; i < myString5.length; i++) {
    if (myArray7.length > 0) {
        myArray7.push(myArray7[i - 1] + myString5[i]);
    } else myArray7.push(myString5[i])
} */

for (let i = 0; i < myString5.length; i++) {
    newString5 = newString5.concat(myString5[i]);
    myArray7.push(newString5);
}

console.log(myArray7);
