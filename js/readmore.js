//getting data from localStorage
let imgSection = document.querySelector('.product');
let mainWrapper = document.querySelector('#main-wrapper');
let getImg = localStorage.getItem('imgDetails');
console.log(getImg)
imgSection.innerHTML=getImg;


