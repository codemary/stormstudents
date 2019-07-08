
// syntax error

// funtion myFunction() {
//     console.log("Blah");
// }


//runtime error

// function loopp() {
//     while(true) {
//         console.log("Hello");
//     }
// }
// loopp()


// semantic error

// function calcAreaRectangle(a, b) {
//     return a + b;
// }
// console.log(calcAreaRectangle(3, 4));
// 7


// reference error

// function myFunc() {
//     console.log(`Hello ${myName}`);
// }
// myFunc();


// type error

// let fruits = true;
// for (let i = 0; i < fruits.length; i++) {
//     const item = fruits[i];
//     console.log(item);
// };



// --------------------TRY-CATCH------------------------
// try {
//     console.log("Execute this code.");

//     console.log(`Hello ${myName}.`)

//     console.log("End try code block.");

// } catch (error) {
//     console.log("Caught the error.")
// }

// try {
//     setTimeout(function() {
//         noSuchVariable;
//     }, 1000)
// } catch (error) {
//     console.log("Won't work");
// }

// setTimeout(function(){
//     try {
//         noSuchVariable;
//     } catch (error) {
//         console.log("Won't work.");
//     }
// }, 1000)

// console.log("Continue with the script");


// try {
//     hobbies;
//     name;
//     PaymentAddress;
//     lalala
// } catch (error) {
//     console.log("Error has occurred");
//     console.log(`Error name: ${error.name}`);
//     console.log(`Error message: ${error.message}`);
//     console.log(`Error stack: ${error.stack}`);
//     console.log(error);
// }

// // console.log("Continue with the script");

// let jsonString = '{ "age": 30 }';

// try {
    
//     let user = JSON.parse(jsonString);

//     if (!user.name) {
//         throw new Error("Incomplete data no name" + jsonString);
//     }
//     console.log(user.name);

// } catch(e) {

//     console.log("JSON error: " + e.message)

// }
// JSON error: Incomplete data no name{ "age": 30 }

function a() {
    throw new Error("Error from a.");
}

function b() {
    try {
        a();
    } catch (error) {
        throw(error)
    }
}

function c() {
    try {
        b();
    } catch (error) {
        console.log(`Error Message ${error.message}`);
    }
}
c();

