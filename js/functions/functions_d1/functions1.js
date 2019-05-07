/* ### Task 1
Go to your JavaScriptl test, rewrite the answers using functions!  */

/* ### Task 2

#### 1. Reverse
Create a function to reverse a number. 
Examples: 
* reverse(34532) -> expected output: 23543 */

function reverseNumber(num1_1) {
    let num1 = num1_1;
    let num1Reverse = num1.toString().split("").reverse().join("");
    console.log(num1Reverse);
}
reverseNumber(123456789);

console.log("----------")

/* #### 2. Alphabetical Order
Create a function to sort a string into alphabetical order. 
Examples:
<<<<<<< HEAD
* alphaOrder("webdev") -> expected output: "bdeevw"
* Note: Assume numbers, symbols and punctuation are not included in the string.   */

function sortString(myString_1) {
    let myString = myString_1;
    let stringSorted = myString.split("").sort().join("").trim().toLowerCase();
    console.log(stringSorted);
}
sortString("I Love you");

console.log("----------")

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

/* #### 5. A Lifetime Supply...
Create a function to calculate how much you'll need for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. 

Examples: 
* calcSupply(25, 2) -> expected output: You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80. 
* calcSupply(40, 3) -> expected output: You will need 43,800 packets of crisps  (3 a day) to last you till the age of 80. 

**Bonus - A lifetime supply**
Accept floating point values for amount per day and round the result.  */

/* #### 6. For the longest word
Create a function to find the longest word in string. 
Examples: 
* longestWord("this is a web development course") ->  expected output: "development" */

/* #### 7. AEIOU: Vowels
Create a function that takes a string in its parameters and counts the number of vowels in the string. 
Examples: 
* findVowels("this is a string") -> expected output: 4 vowels found

* Notes: vowels are "a, e, i, o u".  */

/* #### 8. Data Types
Create a function that detects the data type of the argument passed. 

Examples: 
* detectType("hello") -> expected output: type of argument is a string. 
* detectType(4) -> expected output: type of argument is a number.  */

/* #### 9. Count Occurrences 
Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 

Examples: 
* countOccurrences("this is a string", "i") -> expected output: occurrences of i: 3  */

/* #### 10. Counting Letters
Create a function that counts the number of occurrences of each letter in a string. 

Examples: 
* countLetters("tree") -> expected output: t: 1, r: 1, e: 2 */