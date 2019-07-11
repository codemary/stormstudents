let promise = new Promise(function(resolve, reject){
    resolve(
        setTimeout(function() {
            alert("Job is done")
        }, 1000)
        )
    
})

// let promise2 = new Promise(function(resolve, reject){
//     setTimeout(() => reject(new Error("woops!")), 2000)
// })

let promise3 = new Promise (function(resolve, reject) {
    resolve(console.log("Job Done!")        //Job Done!
    )

    reject(new Error("Job Not Done!"))      //ignored
    
    setTimeout(() => resolve("....."));
})

// let promise4 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("Job is done")
//     },4000)
// })

let promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(new error("Job is not done"))
    },4000)
})

promise4.then(
    result => alert(result),
    // error => alert(error)
).catch(error => alert(error));

// promise4.catch(alert(error));

new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
})
.finally(() => alert("Promise ready"))
.then(result => alert(result))
.catch(err => alert(error));

//async

async function myFunc() {
    let myVar = "hello";

}

myFunc().then(alert("async promise"));


//await
function resolveAfter2Seconds() {
    return new Promise (resolve => {
        setTimeout(() => { 
        resolve('resolved');
    }, 2000);
});
}

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    //expected output: 'resolved'
}

