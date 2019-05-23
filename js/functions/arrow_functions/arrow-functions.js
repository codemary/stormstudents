console.log("-----1-----");
/* #### 1. Multiply
Multiply two numbers and return the result using an arrow function.  */
let multiplyThis = (a, b) => a * b;
console.log(multiplyThis(3, 5));
//15

console.log("-----2-----");
/* #### 2. Double The Odds
Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.  */
const numbersArray = [3, 5, 67, 12, 34, 4, 9, 30];

let getDoubleOdds = doubleTheOdds => {
    let doubleOddsArray = [];
    for (let i = 0; i < doubleTheOdds.length; i++) {
        if (doubleTheOdds[i] % 2 != 0) {
            doubleOddsArray.push(doubleTheOdds[i] * 2);
        }
    }
    return doubleOddsArray;
}
console.log(getDoubleOdds(numbersArray));

console.log("-----3-----");
/* #### 3. Loopyloop
Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.  */
let substractTen = substractionArray => {
    let subTenArray = [];
    for (let i = 0; i < substractionArray.length; i++) {
        subTenArray.push(substractionArray[i] - 10);
    }
    return subTenArray;
}
console.log(substractTen(numbersArray));

console.log("-----4-----");
/* #### 4. Cars
Create an object named car. Create key pair values which include the model of the car, the manufacturer, year etc. Create an arrow function which prints the key pair values of the object.  */

//creating keys-array
const carData = ["manufacturer", "model", "year", "class"];

//creating cars-arrays
const car_1 = ["Audi", "TT", 1998, "Sports car"];
const car_2 = ["Seat", "Leon", 1999, "Compact car"];
const car_3 = ["Volkswagen", "Beetle", 1938, "Compact car"];
const car_4 = ["Honda", "Civic", 1972, "Compact car"];

//creating array to store the car objects
let carObjectArray = [];

//storing the keys and values in objects and push them into array
let getCarInfo = carInfo => {
    let carObject = {};
    for (let i = 0; i < carData.length; i++) {
        let carKey = carData[i];
        let carValue = carInfo[i];
        carObject[carKey] = carValue;
    }
    return carObjectArray.push(carObject);
}
getCarInfo(car_1);
getCarInfo(car_2);
//getCarInfo(car_3);
//getCarInfo(car_4)

console.log(carObjectArray);

//printing the key and value pairs
let getCarKeyAndValue = carsArray => {
    //looping through the array to get the car objects
    for (let i = 0; i < carsArray.length; i++){
        let getObject = carsArray[i];
        //looping through the objects to get key and value
        for (let j = 0; j < Object.keys(getObject).length; j++) {
            console.log(`${Object.keys(getObject)[j]}:  ${Object.values(getObject)[j]}`);
        }
    }
    return;
}

getCarKeyAndValue(carObjectArray);

console.log("-----5-----");
/* #### 5. Filter
Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than `70`. Store the result into a variable.  */

let getHigherThan70 = numbersToSearch => {
  let higherThan70 = [];
  for (let i = 0; i < numbersToSearch.length; i++) {
    if (numbersToSearch[i] > 70) {
      higherThan70.push(numbersToSearch[i]);
    }
  }
  return higherThan70;
}
console.log(getHigherThan70([3, 62, 234, 7, 23, 74, 23, 76, 92]));

console.log("-----6-----");
/* #### 6. Geometrizer
Create two functions that calculate the properties of a circle. 
---------
Create a function called calcCircumfrence:
* Pass the radius to the function.
* Calculate the circumference based on the radius, and output "The circumference is NN".
---------
Create a function called calcArea:
* Pass the radius to the function.
* Calculate the area based on the radius, and output "The area is NN". */
const radiusInCm = 35; 
let calcCircumference = radius => (2 * Math.PI * radius).toFixed(2);
console.log(`The circumference is ${calcCircumference(radiusInCm)}cm.`);

let calcArea = radius => (Math.PI * Math.pow(radius, 2)).toFixed(2);
console.log(`The area is ${calcArea(radiusInCm)}cm.`);


console.log("-----7-----");
/* #### 7. The Inventors
Given the following array, complete the tasks below. 
```javascript */
    const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
      },
      {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
      },
      {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
      },
      {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
      },
      {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
      },
      {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
      },
      {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
      },
      {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
      },
      {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
      },
      {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
      },
      {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
      },
      {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
      }
    ];
/* ```
* Filter the list of inventors for those who were born in the 1500's. 
* Sort the inventors by birthdate, oldest to youngest. 
* Return an array of the inventors' first and last names. */
console.log("-----7a-----");
let getBirthCentury = inventors => {
  for (let i = 0; i < inventors.length; i++) {
    if ((inventors[i].year >= 1500) && (inventors[i].year < 1600)){
      console.log(inventors[i])
    }
  }
  return;
}
getBirthCentury(inventors);


console.log("-----7b-----");
let sortTheInventors = inventors => {
  inventors.sort(function (a, b) {
    return a.year - b.year;
  })
  return console.log(inventors);
}
sortTheInventors(inventors);


console.log("-----7c-----");
function firstAndLast(inventors) {
  let firstAndLastArr = [];
  for (let element of inventors) {
    firstAndLastArr.push(`${element["first"]} ${element["last"]}`);
  }
  return console.log(firstAndLastArr);
}
firstAndLast(inventors);



console.log("-----8-----");
/* #### 8. Look at all the people...
Given the following array, sort the people alphabetically by last name.
```javascript */
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
      'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
      'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
      'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
      'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
      'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
      'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
      'Blair, Tony', 'Blake, William'
    ];

let sortNames = arrayOfNames => {
  let sortedArray = arrayOfNames.sort();
  return console.log(sortedArray);
}
sortNames(people);