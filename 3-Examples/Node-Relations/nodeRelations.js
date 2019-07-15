const article = document.querySelector('article');

console.log(article.children);
//returns a html collection

//has to be transformed into an array. like this:
let articleChildren = Array.from(article.children);

//or this:
//let articleChildren = [...article.children];

//array
console.log(articleChildren);

articleChildren.forEach(child => {
    child.classList.add('article-element');
})

const articleTitle = document.querySelector('h2');

console.log(articleTitle.parentElement); //article
console.log(articleTitle.parentElement.parentElement); //body

console.log(articleTitle.nextElementSibling); //p 
console.log(articleTitle.previousElementSibling); //null, because there is no previous sibling

console.log(articleTitle.nextElementSibling.nextElementSibling); //div

//don't do this, but it works:
console.log(articleTitle.nextElementSibling.parentElement.children);