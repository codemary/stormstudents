const body = document.querySelector('body');
body.setAttribute('style', 'margin: 0; padding: 0; hight: 100vh;')


const main = document.querySelector('div');

main.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex-direction: column;')
console.log(main.style);

const title = document.querySelector('h1');

title.setAttribute('style', 'color: red;');
title.style.textDecoration = 'underline';

const link = document.querySelector('a');
link.setAttribute('target', '_blank');

console.log(link.getAttribute('href'));



