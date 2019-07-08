let myDate = new Date();
console.log(myDate);
//2019-05-14T09:19:15.503Z

let getTime = myDate.getTime();
console.log(getTime);
//1557825555503

let getYear = myDate.getFullYear();
console.log(getYear);
//2019

let getMonth = myDate.getMonth();
console.log(getMonth);
//4

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[myDate.getMonth()]);
//May

let getDate = myDate.getDate();
console.log(getDate);
//14

let getHours = myDate.getHours();
console.log(getHours);
//11

let getMinutes = myDate.getMinutes();
console.log(getMinutes);
//30

let getSeconds = myDate.getSeconds();
console.log(getSeconds);

console.log(`${getHours}:${getMinutes}:${getSeconds}`);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    const doSomething = i * i * Math.PI;
}

let end = new Date();

console.log(`The loop took ${end - start} ms`);
//The loop took 6 ms