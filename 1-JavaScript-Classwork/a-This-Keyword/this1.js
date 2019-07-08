console.log("-----this-----");

console.log("-0---foo-bar-a---")
a = 10;
function foo() {
    console.log(this.a);
    
}
foo() 
//10


function bar() {
    foo();
}
a = 11;

bar(); 
//11

console.log("-1---fooo-a-obj---")
"use strict"

 function fooo() {
     console.log(this.a);
 }

 let obj = {
     a: 2
 }

 fooo.call(obj); 
 //2

 console.log("-2---foo2-obj2-b-doFoo---");

 function foo2() {
     console.log(this.b)
 }

 function doFoo() {
     foo2();
 }

 let obj2 = {
     b: 2,
     foo2: foo2,
 }

 b = "Ooooops global";

 doFoo.call(obj2.foo2); 
 //Ooooops global

 console.log("-3---foo3-obj3-c-bar2---");

function foo3() {
    console.log(this.c)
}

let obj3 = {
    c: 5,
}

c = 20;

let bar2 = function() {
    foo3.call(obj3)
}

bar2() 
//5

console.log("-4---foo4-bar3-d---");

function foo4(d) {
    this.d = d;
}

let bar3 = new foo4(2); 
//creating a new object

console.log(bar3);      
//foo4 { d: 2 }
console.log(bar3.d)  
//2

console.log("-5---bar4---")

function bar4() {

}

let instanceOfBar = new bar4();
console.log(instanceOfBar);

console.log("-6---car-maxSpeed---");

function car(maxSpeed) {
    this.maxSpeed = maxSpeed;
}

let fastCar = new car(200);
console.log(fastCar); 
//car { maxSpeed: 200 }

let slowCar = new car(50);
console.log(slowCar); 
//car { maxSpeed: 50 }

console.log(fastCar.maxSpeed); 
//200
console.log(slowCar.maxSpeed); 
//50

console.log("-7---foo5-e-f-obj4-obj5---");

function foo5() {
    console.log(this.e + this.f);
}

let obj4 = {
    e: 40,
    f: 30,
    key: foo5,
}

e = 20;
f = 25;

obj4.key(); 
// 70
foo5(); 
//45

let obj5 = {
    e: 3,
    f: 4,
    key: obj4,
}

obj5.key.key(); 
//70
console.log(obj5.key); 
//{ e: 40, f: 30, key: [Function: foo5] }






