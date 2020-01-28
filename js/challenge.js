document.addEventListener('DOMContentLoaded', app(event));

function countUp(counter){
  counter.innerText = `${parseInt(counter.innerText) + 1}`;
}

function app(event){
  let counter = document.getElementById('counter');
  setTimeout(countUp(counter), 1000);
}