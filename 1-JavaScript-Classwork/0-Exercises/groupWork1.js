// TASK FOR GROUP 2 (SAAD, HANNAH, RAMEZ, ASHU)
// Make a random number with 30 numbers:

// like: 1343434985059937134343498

// Make an array with max 4 numbers:
// array: [33][41][61][12]

// Check the array numbers inside the random number and count if one number was found count+1.

// 1 correct: 100€
// 2 correct: 150€
// 3 correct: 500€
// 4 correct: 10000€

// Use switch to output for each case!

let randomNum = "649382656703821023936158917404";
let howMuchMoneyForTheNum = numArray => {
    let compArray = [];
    for (let i = 0; i < (randomNum.length - 1); i++) {
        compArray.push(randomNum[i].concat(randomNum[i+1]))
    }
    let count = 0;
    for (let i = 0; i < numArray.length; i++) {
        let element = numArray[i].toString()
        if (compArray.includes(element)) {
            count++;
        }
    }
    switch (count) {
        case 1: 
            console.log(`You won 100€.`)
        break;
        case 2: 
            console.log(`You won 150€.`)
        break;
        case 3: 
            console.log(`You won 500€.`)
        break;
        case 4: 
            console.log(`You won 1000€.`)
        break;
        default: 
            console.log(`You lost.`)
    }
    return;

}
howMuchMoneyForTheNum([57, 17, 23, 64]);