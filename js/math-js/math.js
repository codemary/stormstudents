console.log("-----1M-----");
/* #### 1. Random Number
Create a function to return a random integer.  */
function myRandomNumber() {
    console.log(Math.random());
}
myRandomNumber();


console.log("-----2M-----");
/* #### 2. Lowest Number
Create a function that takes an array as an argument and returns the number with the lowest value. */
let smallestNumber = numbersArray => {
    let smallestNumber = numbersArray[0];
    for (let i = 0; i < numbersArray.length; i++) {
        smallestNumber = Math.min(smallestNumber, numbersArray[i]);
    }
    return console.log(smallestNumber);
}
smallestNumber([2, -0.983274, 87, -1.2, 0, 847, 34]);


console.log("-----3M-----");
/* #### 3. The Power Of
Create a function that takes two numbers as arguments. Return the value of the first number to the power of the second number.  */
let thePowerOfGrayskull = (numberToBePowered, empoweringNumber) => console.log(Math.pow(numberToBePowered, empoweringNumber));
thePowerOfGrayskull(2, 4);


console.log("-----4M-----");
/* #### 4. Highest Number
Create a function that takes an array as an argument and returns the highest number in that array.  */
let biggestNumber = numbersArray => {
    let biggestNumber = numbersArray[0];
    for (let i = 0; i < numbersArray.length; i++) {
        biggestNumber = Math.max(biggestNumber, numbersArray[i]);
    }
    return console.log(biggestNumber);
}
biggestNumber([2, -0.983274, 87, -1.2, 0, 847, 34]);


console.log("-----5M-----");
/* #### 5. Pi
Create a function that given a number n, returns PI to n decimal places.
Examples:
* myPi(5) ➞ 3.14159 //5 decimal places
* myPi(4) ➞ 3.1416 //4 decimal places
* myPi(15) ➞ 3.141592653589793 // 15 decimal places 
**Bonus** 
#### Random Name 
Create a function for our webdev class 13a that returns a random student's name. */
let PI_DecimalPlace = decimalPlace => console.log(Math.PI.toFixed(decimalPlace));
PI_DecimalPlace(3);


//### Date Object
console.log("-----1D-----");
/* #### 1. What day is it? 
Create a function to to display the current date and time in the following format: Today is Wednesday. The current time is 1PM : 34 : 59.  */
let myDate = new Date();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(myDate.getDay());

let getDateInfo = () => {
    let isToday = dayNames[myDate.getDay()];
    let getHours = myDate.getHours();
    let getMinutes = myDate.getMinutes();
    let getSeconds = myDate.getSeconds();
    if (getHours > 12) {
        getHours = getHours - 12 + "PM";
    }  else if (getHours === 12) {
        getHours = getHours + "PM"
    }
    else getHours = getHours + "AM";

    return console.log(`Today is ${isToday}. The current time is ${getHours}:${getMinutes}:${getSeconds}.`); 
}

getDateInfo();

console.log("-----2D-----");
/* #### 2. Date Formats
Create a function to display the current date in the following formats dd-mm-yyyy, dd/mm/yyyy. */
let getFullDate = () => {
    let getDay = myDate.getDate();
    let getMonth = myDate.getMonth();
    let getYear = myDate.getFullYear();
    return console.log(`${getDay}-${getMonth}-${getYear}, ${getMonth}/${getDay}/${getYear}`)
}
getFullDate();

console.log("-----3D-----");
/* #### 3. Is New Year's day a Sunday?
Create a function to check whether the 1st of January is a Sunday between the years of 2014 and 2050. */
let newYearsDaySundays = (startYear, endYear) => {
    let sundayArray = [];
    for (let i = startYear; i < endYear; i++) {
        let newYear = new Date(`January 1, ${i}`)
        let isSunday = newYear.getDay();
        if (isSunday === 0) {
            sundayArray.push(`01-01-${i}`);
        }
    }
    return console.log(`These New Years days were Sundays: ${sundayArray.join(", ")}`)
}
newYearsDaySundays(2014, 2050);

console.log("-----4D-----");
/* #### 4. How many days till Christmas?
Create a function to calculate the days till Christmas.  */
let howLongUntilChristmas = (today) => {
    let oneMinute = 60 * 1000;
    let oneHour = oneMinute * 60;
    let oneDay = oneHour * 24;
    let nextChristmas = new Date();
    nextChristmas.setMonth(11);
    nextChristmas.setDate(25);
    let milliSecondsUntil = nextChristmas.getTime() - today.getTime();
    let daysUntil = Math.floor(milliSecondsUntil / oneDay);
    return console.log(daysUntil);
}
howLongUntilChristmas(myDate);
console.log(myDate.getTime());




console.log("-----5D-----");
/* #### 5. Days in a month
Create a function to calculate the number of days in a specified month. 
Examples and Expected Output: 
* getDaysInMonth(1, 2012); --> 31
* getDaysInMonth(2, 2012); --> 29
* getDaysInMonth(9, 2012); --> 30
* getDaysInMonth(12, 2012); --> 31 */
let getDaysInAMonth = (myMonth, myYear) => {
    let myDays = new Date(myYear, (myMonth + 1), 0);
    return myDays.getDate();
}
console.log(getDaysInAMonth(1, 400));

let getLengthOfMonths = () => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < 12; i++) {
        console.log(`${getDaysInAMonth(i, 2019)} - ${months[i]}`);
    }
}
console.log("---2019---");
getLengthOfMonths();
getDaysInAMonth(1, 2017);