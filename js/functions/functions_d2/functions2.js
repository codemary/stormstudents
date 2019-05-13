console.log("-----1-----");
/* #### 1. XO
Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
* Return a boolean value (true or false).
* The string can contain any character.
* When neither an x nor an o is in the string, return true.
Examples:
* XO("ooxx") ➞ true
* XO("xooxx") ➞ false
* XO("ooxXm") ➞ true (case insensitive)
* XO("zpzpzpp") ➞ true (returns true if no x and o)
* XO("zzoo") ➞ false */

function countingXO(myString_1) {
    let myString = myString_1.toLowerCase();
    let myXs = 0;
    let myOs = 0;
    //counting x and o
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === "x") {
            myXs++
        } else if (myString[i] === "o") {
            myOs++
        }
    }
    let isEqual = (myOs === myXs) ? true:false;
    return isEqual;
}

console.log(`There is the same number of O's and X's: ${countingXO("ooxx")}`);
console.log(`There is the same number of O's and X's: ${countingXO("xooxx")}`);
console.log(`There is the same number of O's and X's: ${countingXO("ooxXm")}`);
console.log(`There is the same number of O's and X's: ${countingXO("zpzpzpp")}`);

console.log("-----2-----");
/* #### 2. Pie 
Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
* Total number of slices.
* Number of recipients.
* How many slices each person gets.
Example of defining the function: equalSlices(total slices, no. recipients, slices each)
Examples:
* equalSlices(11, 5, 3) ➞ false
* // 5 people x 3 slices each = 15 slices > 11 slices 
* equalSlices(8, 3, 2) ➞ true
* equalSlices(8, 3, 3) ➞ false
* equalSlices(24, 12, 2) ➞ true */

function equalSlices(totalSlice, recipientsCount, slicesEach) {
    let z = totalSlice;
    let y = recipientsCount;
    let x = slicesEach;
    let isPossible = ((y * x) <= z) ? true:false;
    return isPossible;
}

console.log(`You can split it equally: ${equalSlices(11, 5, 3)}`);
console.log(`You can split it equally: ${equalSlices(8, 3, 2)}`);
console.log(`You can split it equally: ${equalSlices(8, 3, 3)}`);
console.log(`You can split it equally: ${equalSlices(44, 12, 2)}`);

console.log("-----3-----");
/* #### 3. Cubed
Create a function that takes in an array of numbers and returns the sum of its cubes.
Examples: 
* sumOfCubes([1, 5, 9]) ➞ 855
* // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* sumOfCubes([3, 4, 5]) ➞ 216
* sumOfCubes([2]) ➞ 8
* sumOfCubes([]) ➞ 0
**Note**
If given an empty array, return 0. */

function cubed(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let num = arrayOfNumbers[i];
        sum = sum + Math.pow(num, 3);
    } 
    return `The sum of the cubes is ${sum}.`
}

console.log(cubed([1, 5, 9]));
console.log(cubed([3, 4, 5]));
console.log(cubed([2]));
console.log(cubed([]));


console.log("-----4-----");
/* #### 4. Amplify the Multiples of 4
Create a function that takes an integer and returns an array from 1 to the given number, where:
* If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
* If the number cannot be divided evenly by 4, simply return the number.
Examples
* amplify(4) ➞ [1, 2, 3, 40]
* amplify(3) ➞ [1, 2, 3]
* amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
**Notes**
The given integer will always be equal to or greater than 1.
Include the number (the number in the parameters). */

function GetMultipleFours(endNum) {
    let multiArray = [];
    //finding multiple fours and multiplying them by 10
    for (let i = 1; i <= endNum; i++) {
        if (i % 4 === 0) {
            multiArray.push(i * 10);
        } else {
            multiArray.push(i);
        }
    }
    return multiArray;
}

console.log(GetMultipleFours(4));
console.log(GetMultipleFours(3));
console.log(GetMultipleFours(12));

console.log("-----5-----");
/* #### 5. Months
Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.
* monthName(3) ➞ "March"
* monthName(12) ➞ "December"
* monthName(6) ➞ "June" */

function getTheMonthName(numberOfMonth) {
    //excluding numbers that do not match any months
    if ((numberOfMonth < 1) || (numberOfMonth > 12)) {
        return "The number you entered is invalid for this function";
    }
    else
    {   const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August",  
            "September", "October", "November", "December"];
        //getting the name of the month by index in array
        let nameOfMonth = monthsArray[numberOfMonth - 1];
        return nameOfMonth;
    }
}

console.log(getTheMonthName(13));
console.log(getTheMonthName(6));
console.log(getTheMonthName(10));

console.log("-----6-----");
/* #### 6. Even Number Generator
Create a function that finds all even numbers from 1 to the given number.
Examples:
* evenNums(8) ➞ [2, 4, 6, 8]
* evenNums(4) ➞ [2, 4]
* evenNums(2) ➞ [2]
If there are no even numbers, return an empty array. */ 

function evenNumberGen(endNumber) {
    let evenNumArray = [];
    for (let i = 1; i <= endNumber; i++) {
        //finding even numbers and pushing them into array
        if (i % 2 === 0) {
            evenNumArray.push(i);
        }
    }
    return evenNumArray;
}

console.log(evenNumberGen(20));
console.log(evenNumberGen(0));
console.log(evenNumberGen(12));

console.log("-----7-----");
/* #### 7. Dictionary
Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.
Examples
* dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
* dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
* dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
**Notes**
* If none of the words match, return an empty array.
* Keep the filtered array in the same relative order as the original array of words. */

function findMatchingWord(myLetters_1, wordArray) {
    let myLetters = myLetters_1.toLowerCase();
    let filteredArray = [];
    for (let i = 0; i < wordArray.length; i++) {
        //extracting first letters of the words in array to match with the starting letters
        let comparePart = wordArray[i].substr(0, myLetters.length).toLowerCase();
        if (comparePart === myLetters) {
            filteredArray.push(wordArray[i]);
        }
    }
    return filteredArray;
}

console.log(findMatchingWord("bu", ["button", "breakfast", "border"]));
console.log(findMatchingWord("tri", ["triplet", "Tries", "trip", "piano", "tree"]));
console.log(findMatchingWord("beau", ["pastry", "delicious", "name", "boring"]));

console.log("-----8-----");
/* #### 8. is a four letter word. 
Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
Examples: 
* isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
* isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
* isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"] */

function getFourLetterWords(searchThisArray) {
    let myFourLettersArray = []
    //searching for four-lettered words
    for (let i = 0; i < searchThisArray.length; i++) {
        let word = searchThisArray[i];
        if (word.length === 4) {
            myFourLettersArray.push(word);
        }
    }
    return myFourLettersArray;
}

console.log(getFourLetterWords(["John", "James", "Jack", "Jeanne"]));
console.log(getFourLetterWords(["Tomato", "Corn", "Lettuce"]));
console.log(getFourLetterWords(["Dog", "Cat", "Deer"]));


console.log("-----9-----");
/* #### 9. Is it Symmetrical? 
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.
Examples:
* isSymmetrical(7227) ➞ true
* isSymmetrical(12567) ➞ false
* isSymmetrical(44444444) ➞ true
* isSymmetrical(9939) ➞ false
* isSymmetrical(1112111) ➞ true */

function isSymmetrical(checkNum) {
    //reversing the number to compare it
    let numArray = checkNum.toString().split("");
    let numArrayReverse = numArray.reverse();
    let numReverse = Number(numArrayReverse.join(""));
    //comparing the initial number with the reversed number
    let isSymmCheck = (checkNum === numReverse);

    return isSymmCheck;
}

console.log(`7227 is symmetrical: ${isSymmetrical(7227)}`);
console.log(`12567 is symmetrical: ${isSymmetrical(12567)}`);
console.log(`44444444 is symmetrical: ${isSymmetrical(44444444)}`);
console.log(`9939 is symmetrical: ${isSymmetrical(9939)}`);
console.log(`1112111 is symmetrical: ${isSymmetrical(1112111)}`);

console.log("-----10-----");
/* #### 10. c4n y0u r34d th15? 
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
Examples:
* hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
* hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
* hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
**Notes**
For your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5. */

function hackerSpeak(myString) {
    //replacing a, e, i, o, s with numbers
    let myStringHack = myString.replace(/a/ig, 4).replace(/e/ig, 3).replace(/i/ig, 1).replace(/o/ig, 0).replace(/s/ig, 5);
    return myStringHack;
}
let myStringHack_1 = hackerSpeak("javascript is cool");
console.log(myStringHack_1);
let myStringHack_2 = hackerSpeak("programming is fun");
console.log(myStringHack_2);
let myStringHack_3 = hackerSpeak("become a coder");
console.log(myStringHack_3);


console.log("----------");