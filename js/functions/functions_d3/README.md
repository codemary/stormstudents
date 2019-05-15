# Functions Exercises 

## These exercises are aimed at making you more familiar with how to use functions. It is important to print all of your results to the console.

## Print all your results to the console! 

#### 1. Add up
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Examples of output:
* addUp(4) ➞ 10
* addUp(13) ➞ 91
* addUp(600) ➞ 180300

#### 2. Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
Examples:
* lessThanOrEqualToZero(3) ➞ false
* lessThanOrEqualToZero(0) ➞ true
* lessThanOrEqualToZero(-4) ➞ true
* lessThanOrEqualToZero(10) ➞ false

#### 3. Missing Number 
Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
Examples: 
* missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
* missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
* missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

#### 4. isPrime?
Create a function that returns true if a number is prime and false if it's not. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
Examples:
* isPrime(7) ➞ true
* isPrime(9) ➞ false
* isPrime(10) ➞ false

* **Note**: 1 is not a prime number 

#### 5. snake_case -> camelCase
Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase. 
Examples:
* toCamelCase("hello_world") ➞ "helloWorld"
* toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun"

#### 6. One is not like the others...
Create a function that takes an array of numbers and return the number that's unique.
Examples:
* unique([3, 3, 3, 7, 3, 3]) ➞ 7
* unique([0, 0, 0.77, 0, 0]) ➞ 0.77
* unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

#### 7. Where's Waldo? 
Create a function that takes a string and returns true if Waldo is found and false if he's not.
Examples:
* isWaldoHere("is there wal here ?") ➞ false
* isWaldoHere("I found you Waldo!") ➞ true
* isWaldoHere("is wally here?") ➞ false
* isWaldoHere("waldo is here") ➞ true

#### 8. Validate
Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

**Notes**
* The string must contain an @ character.
* The string must contain a . character.
* The @ must have at least one character in front of it.
* e.g. "john@example.com" is valid while "@example.com" is invalid.
* The . and the @ must be in the appropriate places.
* e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

#### 9. Pig Latin Translation 
Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin". 

**Rules**
* Move the first letter of each word to the end of the word.
* Add "ay" to the end of the word.
* Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

Examples:
* pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
* pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
* pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."

**Bonus**
* Preserve proper capitalization as in the examples above.

#### 10. X To The Power of X
Create a function that takes a base number and an exponent number and returns the calculation.

Examples
* calculateExponent(5, 5) ➞ 3125
* calculateExponent(10, 10) ➞ 10000000000
* calculateExponent(3, 3) ➞ 27

* **Notes**
* All test inputs will be positive integers.

**Extra Problem** 
* **Bonus** Word Ranking
Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.

Examples:
* wordRank("The quick brown fox.") ➞ "brown"
* wordRank("Nancy is very pretty.") ➞ "pretty"
* wordRank("Check back tomorrow, man!") ➞ "tomorrow"
* wordRank("Today is Wednesday.") ➞ "Wednesday"

* **Notes**
* The returned string should only contain alphabetic characters (a-z).
* Preserve case in the returned string (see 4th example above).


**Good luck & Enjoy**

