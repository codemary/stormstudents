function mathRound(number) {
    return Math.round(number);
}
console.log(mathRound(2.5));
//3

function mathCeil(number) {
    return Math.ceil(number);
}
console.log(mathCeil(2.2));
//3

function mathFloor(number) {
    return Math.floor(number);
}
console.log(mathFloor(2.9));
//2

function mathRandom() {
    return Math.random();
}
console.log(mathRandom());

function mathMin(arg1, arg2, arg3) {
    return Math.min(arg1, arg2, arg3);
}
console.log(mathMin(2, -5, 9));
//-5

function mathMax() {
    let numArray = [3, 50, -6, 1, 234];
    let bigElement;
    let bigNum;

    for (let i = 0; i < numArray.length; i++) {
        const element = numArray[i]; 

        for (let j = 0; j < numArray.length; j++) {
            bigElement = numArray[j];
            bigNum = Math.max(numArray[i], numArray[j]);
        }
    }

    return bigNum;
}

console.log(mathMax());




