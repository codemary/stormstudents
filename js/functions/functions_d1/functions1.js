/* ### Task 1
Go to your JavaScriptl test, rewrite the answers using functions!  */

/* ### Task 2
#### 1. Reverse
Create a function to reverse a number. 
Examples: 
* reverse(34532) -> expected output: 23543 */

function reverseNumber(num1_1) {
    let num1 = num1_1;
    let num1ToArray = num1.toString().split("");
    let num1Reverse = num1ToArray.reverse().join("");
    console.log(num1Reverse);
}
reverseNumber(123456789);

console.log("----------");

/* #### 2. Alphabetical Order
Create a function to sort a string into alphabetical order. 
Examples:
<<<<<<< HEAD
* alphaOrder("webdev") -> expected output: "bdeevw"
* Note: Assume numbers, symbols and punctuation are not included in the string.   */

function sortString(myString_1) {
    let myString = myString_1;
    let arraySorted = myString.split("").sort();
    let stringSorted = arraySorted.join("").trim().toLowerCase();
    console.log(stringSorted);
}
sortString("I Love you");

console.log("----------");

/* #### 3. The Greater Numbers
Create a function which accepts two arguments, an array of numbers and a number. The function should return the elements of the array which are greater than the second argument. 
Examples: 
* findGreatest([3, 4, 5], 4) -> expected output: 5
* findGreatest([10, 20, 30], 12) -> expected output: 20, 30
* findGreatest([0, 10, 3], 4) -> expected output: 10 */

function biggerNumbers(numArray_1, num1_1) {
    let num1 = num1_1;
    let numArray = numArray_1;
    let arrayBigger = [];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > num1) {
            arrayBigger.push(numArray[i]);
        }
    }
    console.log(arrayBigger);
}
biggerNumbers([10, 20, 30], 12);

console.log("----------");

/* #### 4. Dog Years
Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy's age. Calculate the dog's age in dog years based on the calculaton of 1 human year = 7 dog years. 
Example
* dogAge(4) -> expected output example: "Your doggo is 28 years old in human years!" */

function dogYears(dogAge_1) {
    let dogAge = dogAge_1;
    let doggyYears = dogAge * 7;
    console.log(`Your doggo is ${doggyYears} years old in human years!`);
}
dogYears(10);

console.log("----------");

/* #### 5. A Lifetime Supply...
Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 
Examples: 
* calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80. 
* calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps  (3 a day) to last you till the age of 80. 
**Bonus - A lifetime supply**
Accept floating point values for amount per day and round the result.  */

function snackCalc(age_1, dailyAmount_1) {
    let age = age_1;
    let dailyAmount = dailyAmount_1;
    let yearsLeft = 80 - age;
    let lifetImeSupply = yearsLeft * dailyAmount;
    console.log(lifetImeSupply);
}
snackCalc(29, 3);


console.log("----------");

/* #### 6. For the longest word
Create a function to find the longest word in string. 
Examples: 
* longestWord("this is a web development course") ->  expected output: "development" */

function searchLongest(myString_1) {
    let myString = myString_1;
    let myArray = myString.split(" ");
    let longestWord = "";
    for(let i = 0; i < myArray.length; i++) {
        if (longestWord.length < myArray[i].length) {
            longestWord = longestWord.replace(longestWord, myArray[i]);
        }
    }
    console.log(longestWord);
}
searchLongest("oiasjfiasuhg I love foxes");

console.log("----------");
/* #### 7. AEIOU: Vowels
Create a function that takes a string in its parameters and counts the number of vowels in the string. 
Examples: 
* findVowels("this is a string") -> expected output: 4 vowels found
* Notes: vowels are "a, e, i, o u".  */

function findVowels(myString_1) {
    let myString = myString_1;
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelsFound = [];
    let myArray = myString.toLowerCase().split("");
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (myArray[i] === vowels[j]) {
                vowelsFound.push(myArray[i]);
            }
        }
    }
    console.log(`${vowelsFound.length} vowels found.`);
}
findVowels("I love foxes.");

console.log("----------");

/* #### 8. Data Types
Create a function that detects the data type of the argument passed. 
Examples: 
* detectType("hello") -> expected output: type of argument is a string. 
* detectType(4) -> expected output: type of argument is a number.  */

function findType(unknown_1) {
    let unknown = unknown_1;
    console.log(`Type of argument is a ${typeof unknown}.`);
}
findType(NaN);

console.log("----------");

/* #### 9. Count Occurrences 
Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 
Examples: 
* countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3  */

function findOccurrence(myString_1, myLetter_1) {
    let myString = myString_1;
    let myLetter = myLetter_1;
    let myArray = myString.toLowerCase().split("");
    let lettersFound = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === myLetter.toLowerCase()) {
            lettersFound.push(myArray[i]);
        }
    }
    let numberOfLetters = lettersFound.length;
    console.log(`Occurrences of ${myLetter}: ${numberOfLetters}`);
}
    findOccurrence("I love foxes a lot", "o");

console.log("----------");

/* #### 10. Counting Letters
Create a function that counts the number of occurrences of each letter in a string. 
Examples: 
* countLetters("tree") -> expected output: t: 1, r: 1, e: 2 */

function countingLetters(myString_1) {
    let myString = myString_1;
    let myArray = myString.toLowerCase().split("");
    let myLettersArray = [myArray[0]];
    let myCountArray = [1];
    for (let i = 0; i < myArray.length; i++) {
            let character = myArray[i]
            let count = 0
            if (myLettersArray.includes(character) === false) {
                myLettersArray.push(character);
                count = 1;
            } else if (myLettersArray.includes(character) === true) {
                
            } 
    }
    console.log(myLettersArray);
    console.log(myCountArray);
}
countingLetters("Hello");

