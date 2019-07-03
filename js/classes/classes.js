console.log("-----1-----");
// #### 1. Person Class
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return console.log(`${this.name}, ${this.age} years old.`);
    }
}
let John = new Person("John", 19);
John.describe();


console.log("-----2-----");
// #### 2. Volume
// Write a JavaScript program to get the volume of a cylinder with four decimal places using object classes. 
// * Note: Volume of a cylinder : V = πr2h - r is the radius and h is the height of the cylinder.
class Cylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    calcVolume() {
        let volume = Number((Math.PI * this.radius * 2 * this.height).toFixed(4));
        console.log(typeof volume);
        return this.volume = volume; 
    }
}
let myCylinder = new Cylinder(10, 3);
console.log(typeof myCylinder.height)
myCylinder.calcVolume();
console.log(myCylinder);


console.log("-----3-----");
// #### 3. Tick Tock
// Rewrite the following code to use the "class" syntax. 
  function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();


console.log("-----4-----");
// #### 4. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// * Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".



console.log("-----5-----");
// #### 5. Circle
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

// Look at the example of a Rectangle constructor which can help you in getting started. 

// ```javascript
// class Rectangle {
//   constructor(sideA,sideB){
//     this.sideA = sideA;
//     this.sideB = sideB;
//   }
//   getArea(){return this.sideA*this.sideB};
//   getPerimeter(){return (this.sideA + this.sideB) *2 };
// }

// ```
// * Example: 
// ```javascript
// let circ = new Circle(11);
// circ.getArea();

// // Should return 380.132711084365.

// let circ = new Circle(4.44);
// circ.getPerimeter();

// // Should return  27.897342763877365
// ```
