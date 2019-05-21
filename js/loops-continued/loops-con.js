console.log("-----1W-----");
// #### 1. Run Along
// Create a while loop that runs as long as i is less than 15. Use a while loop. 
let i = 0;
let workWithStuff = "";
while (i < 15) {
    workWithStuff += `Do stuff!(${i}) `;
    i++;
}
console.log(workWithStuff);


console.log("-----2W-----");
// #### 2. City Names
// Create an array of city names. Loop through the array and add the city names to a string. 
// * Example of expected output: "Berlin, Paris, Prague, Rome". 
i = 0;
let cityArray = ["Berlin", "Paris", "Hamburg", "Überlingen", "Bremen"];
let cityString = "";
while (i < cityArray.length) {
    cityString += ` ${cityArray[i]},`;
    i++;
}
console.log(cityString);


console.log("-----3w-----");
// #### 3. Odds and Evens
// Create a function that takes an array as an argument. The function should add 1 to each odd integer and should minus 1 from each even integer. 
// * Examples:
// * evenOddTransform([3, 5, 2, 4] -> expected output: [4, 6, 1, 3]
// * evenOddTransform([6, 9, 10, 20] -> expected output: [5, 10, 9, 19]
let addToOddMinusToEven = numArray => {
    let i = 0;
    while (i < numArray.length) {
        switch (numArray[i]) {
            case numArray[i] % 2 === 0: 
            numArray[i]--;
            break;
            default: numArray[i]++;
        }
        i++;
    }
    return console.log(numArray);
}
addToOddMinusToEven([3, 5, 2, 4]);
addToOddMinusToEven([6, 9, 10, 20]);
addToOddMinusToEven([5, 23, 7, 3, 8, 5, 0, 12]);


// ### Do While: Use do while loops to complete the tasks below.
console.log("-----1DW-----");
// #### 1. sumOfNumbers
// Create a function that takes an array of at least 3 numbers as an argument and returns the sum of the numbers. Use a do while loop. 
let sumOfNumbers = numsToAdd => {
    i = 0;
    let sum = 0;
    do {
        sum = sum + numsToAdd[i];
        i++;
    }
    while (i < numsToAdd.length);
    return console.log(sum);
}
sumOfNumbers([35, 35, 35, 35, 60]); //200
sumOfNumbers([3, 5, 2, 4]); //14
sumOfNumbers([-50, 100, 25, 25, -10]); //90


console.log("-----2DW-----");
// #### 2. Add it up!
// Create a function that adds numbers from 1-20 together using a while loop. 
let addItUpp = endNum => {
    i = 0;
    let sum = 0;
    do {
        sum = sum + i;
        i++;
    }
    while (i <= endNum);
    return console.log(sum);
}
addItUpp(20);
addItUpp(4);


console.log("-----DW-----");
// #### 3. Count Instances 
// Create a function that takes an array as an argument and determines whether the array's elements are strictly increasing, decreasing or neither. 
// * Examples:
// * check([1, 2, 3]) ➞ "increasing"
// * check([3, 2, 1]) ➞ "decreasing"
// * check([1, 2, 1]) ➞ "neither"
// * check([1, 1, 2]) ➞ "neither"
let incrOrDecr = checkThisArr => {
    i = 0;
    let answer = "";
    do {
        if ((checkThisArr[i] < checkThisArr[i+1]) && (answer !== "decreasing") && (answer !== "neither")) {
            answer = "increasing";
        } else if ((checkThisArr[i] > checkThisArr[i+1]) && (answer !== "increasing") && (answer !== "neither")) {
            answer = "decreasing";
        } 
        else answer = "neither";
        i++;
    }
    while (i < (checkThisArr.length - 1));
    return console.log(answer);
}
incrOrDecr([5, 4, 2, 1, 0, -1, -3]); //decreasing
incrOrDecr([-5, -2, 0, 2, 5, 6, 10]); //increasing
incrOrDecr([1, 5, -2, 5, 8, 0]); //neither



// ### forEach(): Use the forEach() method to complete the tasks below
console.log("-----1FE-----");
// #### 1. Capitalize
// Create a function that takes an array of names and returns an array with the first letter capitalized using a do while loop.
// * Examples
// * format(["matt", "sara", "lara"]) ➞ ["Matt", "Sara", "Lara"]
// * format(["samuel", "MARIA", "luke", "mary"]) ➞ ["Samuel", "Maria", "Luke", "Mary"]
// * format(["Cynthia", "Karen", "Jane", "Carrie"]) ➞ ["Cynthia", "Karen", "Jane", "Carrie"]
// * Notes: Keep names in the same order and make sure that only the first lesson of the name is capitalised. See "Maria" in example 2. 
let capitalizeNames = arrOfNames => {
    capitalizedArr = [];
    arrOfNames.forEach(element => {
        capitalizedArr.push(element[0].toUpperCase() + element.slice(1).toLowerCase());
    });
    return console.log(capitalizedArr);
}
capitalizeNames(["matt", "sara", "lara"]);
capitalizeNames(["samuel", "MARIA", "luke", "mary"]);
capitalizeNames(["Cynthia", "Karen", "Jane", "Carrie"]);
	

console.log("-----2FE-----");
// #### 2. No Duplicates!
// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items. Create a function using a do while loop which takes an array and transforms it into a set of unique values. See the examples below.
// * Example
// * [1, 4, 4, 7, 7, 7]
// * // original array
// * [1, 4, 7]
// * // original array transformed into a set
// * [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// * [2, 2, 2, 2, 2, 2] ➞ [2]
// * [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
function noDuplicates(numbersArray) {
    let uniqueNumsArr = [];
    numbersArray.forEach(element => {
            if (!uniqueNumsArr.includes(element)) {
                uniqueNumsArr.push(element);
        }
    })
    return console.log(uniqueNumsArr);
}
noDuplicates([1, 4, 4, 7, 7, 7]);


console.log("-----3-----");
// #### 3. Repeat it 
// Create a function that takes two arguments (item, times). Create a function that repeats the "item" as many times as specified by "times". The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.
// * Example: repeat("example", 3) -> ["example", "example", "example"]
function repeatIt(thisString, thisManyTimes) {
    i = 0;
    let repeatedArr = [];
    do {
        repeatedArr.push(thisString);
        i++
    }
    while (i < thisManyTimes);
    return console.log(repeatedArr);
}
repeatIt("nana-nana", 6);
repeatIt("BATMAN", 1);





// **Bonuses - Choose the loop**
console.log("-----Bonus-----");
// #### Find the Odd Ones Out
// Create a function that takes an array as an argument and find the integer which occurs an odd number of times. 
// * Examples
// * findOdd([-2, -2, 3, 3, -5, 7, -5, 7, 7]) ➞ 7 (appears three times)
// * findOdd([3, 2, 2, 3, 20, 10, 2, 20, 10, 3, 3, 2, 2]) ➞ 2 (appears 5 times)
// * findOdd([12]) ➞ 12 (appears once)
function getOddOccurrences(arrayOfNums) {
    let oddOccurrence = "";
    for (const element of arrayOfNums) {
        let count = 0;
        //count occurrences of a number by comparison 
        for (const compare of arrayOfNums) {
            if (element === compare) {
                count++
            }
        }
        //see if it is a odd count
        let findOdd = (count % 2 != 0);
        switch (findOdd) {
            case true:
            oddOccurrence = `${element} occurs an odd number of times`;
            break;
        }
    }
    return console.log(oddOccurrence);
}
getOddOccurrences([-2, -2, 3, 3, -5, 7, -5, 7, 7]);
getOddOccurrences([3, 2, 2, 3, 20, 10, 2, 20, 10, 3, 3, 2, 2]);
getOddOccurrences([12]);



// #### Factors 
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
// [3, 6, 12, 36]
// * // 3 is a factor of 6 (3 * 2 = 6)
// * // 6 is a factor of 12 (6 * 2 = 12)
// * // 12 is a factor of 36 (12 * 3 = 36)
console.log("-----Factors-----");
// Create a function that determines whether or not an array is a factor chain using a while loop.
// * Examples
// * factorChain([1, 2, 4, 8, 16, 32]) ➞ true
// * factorChain([1, 1, 1, 1, 1, 1]) ➞ true
// * factorChain([2, 4, 6, 7, 12]) ➞ false
// * factorChain([10, 1]) ➞ false
function getFactorChain(arrayOfNums) {
    i = 0;
    let isFactorChain = true;
    while (i < (arrayOfNums.length - 1)) {
        let factor = Number.isInteger(arrayOfNums[i+1] / arrayOfNums[i]);
        // console.log(factor);
        switch (factor) {
            case false: 
            isFactorChain = false;
            break;
        }
        i++;
    }
    return console.log(`It is a factor chain ${isFactorChain}`);
}
getFactorChain([3, 6, 13, 36]);
getFactorChain([1, 2, 4, 8, 16, 32]);
getFactorChain([1, 1, 1, 1, 1, 1]);
getFactorChain([2, 4, 6, 7, 12]);
getFactorChain([10, 1]);

console.log("------------");
let arrayOfNums = [2, 4, 6, 7, 9];
console.log(Number.isInteger(arrayOfNums[2] / arrayOfNums[0]));
console.log(Number.isInteger(7 / 6));
