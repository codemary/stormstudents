const firstParagraph = document.querySelector('p');

console.log(firstParagraph); 
//<p>I am the first paragraph inside the first div.</p>

const firstDiv = document.querySelector('body > div:nth-child(2)');

console.log(firstDiv); 
//<div>
//<p>I am the first paragraph inside the first div.</p>
//<p class="getMe">I am the second paragraph inside the first div.</p>
//</div>

const allClassGetMe = document.querySelectorAll('.getMe');

console.log(allClassGetMe);
//NodeList(2) [p.getMe, div.getMe, ul.getMe]

console.log(allClassGetMe[1]);
//<div class="getMe">
//<p>I am the fourth paragraph inside the second div</p>
//</div>

console.log(allClassGetMe.length); 
//3

allClassGetMe.forEach((element, key) => {
    console.log(key, element);
});
