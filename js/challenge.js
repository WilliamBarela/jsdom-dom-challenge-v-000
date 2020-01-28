document.addEventListener('DOMContentLoaded', app(event));
let counter = document.getElementById('counter');

function countUp(){
  counter.innerText = `${parseInt(counter.innerText) + 1}`;
}

function app(event){
  setTimeout(countUp(), 1000);
}