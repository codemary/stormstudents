console.log("------1--------")
let counter = 10;
while(counter > 0) {
    console.log(counter--);
}
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

let countdown = function(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
}
countdown(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

console.log("-------2------");
function factorial(number) {
    if (number <= 0) {
        return 1; //0.5
    } else {
        //console.log(number);
        return (number * factorial(number - 1));
    }
}
console.log(factorial(5)); 
//120, 60