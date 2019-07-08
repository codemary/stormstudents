console.log("------1------");
let myVar = "I am global!";

function outerFunction() {
    let myVar = "I am just local scope!";

    let innerFunction = function() {
        return console.log(myVar);
    }
    return innerFunction;
}
outerFunction()();
//I am just local scope!


console.log("-----2------");
function makeAdder(x) {
    function add(y) {
        console.log(y);
        return y + x;
    }
    
    return add;
}
let plusOne = makeAdder(1)(3);
console.log(plusOne);
//3
//4

let plusTen = makeAdder(10);
console.log(plusTen(plusOne)); //plusOne is 4
//4
//14

console.log("----3-------");
function makeTitler(x) {
    function title(y) {
        return `${x} ${y}`;
    }
    return title;
}
let mrTitle = makeTitler("Mr.")("Otto");
let msTitle = makeTitler("Ms.");

console.log(mrTitle);
//Mr. Otto
console.log(msTitle("Croft"));
//Ms. Croft

console.log(makeTitler("Dr.")("Jones"));
//Dr. Jones
console.log(makeTitler("Lady")("Sybil"));
//Lady Sybil

