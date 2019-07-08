//1.  
function cityStart(myCity)   {
    let start1 = `Los`;
    let start2 = `New`;
    if ((myCity.substring(0, 3).toLowerCase() === start1.toLowerCase()) || (myCity.substring(0, 3).toLowerCase() === start2.toLowerCase())) {
        console.log(`The city name does start with ${start1} or ${start2}.`);
    } else console.log(`The city name does not begin with ${start1} or ${start2}.`);
}
cityStart("Los Angeles")

// 2. 
function arraySum(...array1) {
    let sum1 = 0;
    for (let i = 0; i < array1.length; i++) {
        sum1 = sum1 + array1[i];
    }
    console.log(sum1);
}
arraySum(5, 16, 50)

// 3. 
function printName(firstName, lastName) {   
    let wholeName = (`${lastName}, ${firstName}`);
    console.log(wholeName);
}
printName("Hannah", "Klein")

// 4. 
/*  let endNumber1 = 1000;
    let divider = 100;
    for (let i = 0; i <= endNumber1; i++) {
    if (i % divider === 0) {
        console.log(true);
    } else console.log(false); 
} */

//or

function hunDiv(num1, divider) {
    if (num1 % divider === 0) {
        console.log(true);
    } else console.log(false); 
}
hunDiv(300, 100)

// 5.
function arrayEnding(ending, ...array2) {
    for (let i = 0; i < array2.length; i++) {
        array2[i] = array2[i] + ending;
    }
    console.log(array2);
}
arrayEnding("ly", `clever`, `meek`, `heavy`, `nice`, `repeated`);

// 6. 
function evenOdd1(endNumber2) {
    for (let i = 1; i <= endNumber2; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even.`)
        } else console.log(`${i} is odd`);
    }
}
evenOdd1(20);

//or
function evenOdd2(num2_2) {
    let num2 = num2_2;
    if (num2 % 2 === 0) {
        console.log(`${num2} is even.`);
    } else console.log(`${num2} is odd`);
}
evenOdd2(36);


// 7. 
function angleCalc(wholeRadius1, givenAngles1) {    
    let wholeRadius = wholeRadius1;
    let givenAngles = givenAngles1;
    let lastAngle = 0;
    let sumOfAngles = 0;
    let right_angle = 90;

    for (let i = 0; i < givenAngles.length; i++) {
        sumOfAngles = sumOfAngles + givenAngles[i];
    }

    lastAngle = wholeRadius - sumOfAngles;

    if (wholeRadius - sumOfAngles <= 0) {
        console.log(`Something is wrong.`)
    } else if (wholeRadius - sumOfAngles > right_angle) {
        console.log(`The last angle has ${lastAngle}° and is obtuse.`);
    } else if (wholeRadius - sumOfAngles < right_angle) {
        console.log(`The last angle has ${lastAngle}° and is acute.`);
    } else console.log(`The last angle has ${lastAngle}° and is a right angle.`);
}
angleCalc(180, [60, 45]);
//I did it this way, because now you can use it with stuff that has more angles.



// 8. 
function namesArrayUpp(someNames_1) {    
    let someNames = someNames_1;
    let array3 = someNames.split(` `);
    let firstUpper = [];

    for (let i = 0; i < array3.length; i++) {
        firstUpper.push(array3[i][0].toUpperCase()+array3[i].slice(1));
    }

    someNames = firstUpper.join(` `);
    console.log(someNames);
}
namesArrayUpp(`hannah, batman, captain marvel`)

// 9. 
function wordCount(mySentence_1) {    
    let mySentence = mySentence_1;
    console.log(mySentence.split(` `).length)
}
wordCount(`I like Foxes very much. That is true.`);

// 10. 

function arrayMultiplier(...array4) {    
    for (let i = 0; i < array4.length; i++) {
        array4[i] *= array4.length;
    }
    console.log(array4);
}
arrayMultiplier(5, 6, 3, 9, 10, 4)