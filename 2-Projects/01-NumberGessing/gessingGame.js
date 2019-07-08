// function gessingGame() {
//     while (true) { // do loop for endless guessing fun
//         let toGuess;

//         function randomNumber() {
//             toGuess = (Math.floor((Math.random()*10)+1));
//         }
//         randomNumber()
//         console.log(toGuess);
        
        
//         let inputNumber = Number(window.prompt("Guess a number from 1 - 10"))


//         for (let i = 0; i < 3; i++) {
//             if (inputNumber === toGuess) {
//                 //console.log(inputNumber);

//                 alert("You win! The number is " + toGuess);
//                 break;

//             } else if (i === 2) {
//                 window.alert(" You lost! Restart");
//                 break;
//             } else {
//                 //console.log(inputNumber);
//                 inputNumber = Number(window.prompt("Wrong number try again!"));
//                 //console.log(inputNumber);

//             }
//         }
//     }
// }

const gameDiv = document.querySelector('.gameBox');

function gessingGame() {
    let htmlForm = '<form id="gessingForm"><p id="formText">Guess a number from 1 - 10:</p><br><input type="text" id="number" name"number"><button for="number">Ok</button></form>'
    gameDiv.innerHTML = htmlForm;
    // while(true) {
        let toGuess;
        function randomNumber() {
            toGuess = (Math.floor((Math.random()*10)+1));
        }
        randomNumber()
        let inputNumber = Number(document.getElementById("number").value)
    // }
    console.log(inputNumber);

}