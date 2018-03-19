let wat    = document.querySelector('.fb__wat');
let tim    = document.querySelector('.fb__Tim');
let weet   = document.querySelector('.fb__Weet');
let ballon = document.querySelector('.fb__ballon');
let waggel = document.querySelector('.fb__waggel');
let laag1  = document.querySelector('.fb-laag1');
let tut    = document.querySelector('.fb__tut');
let html5    = document.querySelector('.fb__html5');
let css    = document.querySelector('.fb__css');
let js    = document.querySelector('.fb__js');


const animeren = () => {
    setTimeout(() => {wat.classList.remove('fb--uit')},10);
    setTimeout( () => {tim.classList.remove('fb--uit')},300);
    setTimeout( () => {weet.classList.remove('fb--uit')},600);
    setTimeout( () => {ballon.classList.remove('fb--uit')},900);
    setTimeout( () => {waggel.classList.add('fb--waggel')},1000);
    // overgang laag 2
    setTimeout( () => {laag1.classList.add('fb--uit')},2000);
    setTimeout( () => {tut.classList.add('fb--uit')},2000);
    setTimeout( () => {html5.classList.remove('fb--uit')},2300);
    setTimeout( () => {css.classList.remove('fb--uit')},2600);
    setTimeout( () => {js.classList.remove('fb--uit')},2900);
};


animeren();

// banner linken
const gaNaarPagina = () => window.open('www.google.com','_blank');
document.querySelector('.fb').addEventListener('click',gaNaarPagina());