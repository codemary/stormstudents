const btn1 = document.querySelector('#firstDiv>button');

const btn2 = document.querySelector('#secondDiv>button');

const allBtns = document.querySelectorAll('button');

const title = document.querySelector('h1');
console.log(title);

function changeTitle() {
    title.innerHTML = 'CLICK THE BUTTONS!';
}

// title.addEventListener.onmouseover = changeTitle;

title.addEventListener('mouseover', changeTitle)

function random(number) {
        return Math.floor(Math.random()*(number+1));
    }

function btnBackgroundChange() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    allBtns.forEach(button => {
        button.style.backgroundColor = rndCol;
    });
}

// btn1.addEventListener('click', btnBackgroundChange);
btn1.addEventListener('click', () => {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    allBtns.forEach(button => {
        button.style.backgroundColor = rndCol;
    });
})


function changeBtn1() {
    btn1.innerHTML = 'Now, click the other one!';
}

btn1.addEventListener('click', changeBtn1); 
  
function backgroundChange() {
    let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

btn2.onclick = backgroundChange;


