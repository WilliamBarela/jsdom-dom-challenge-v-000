document.addEventListener('DOMContentLoaded', app(event));

function countUp(counter){
  return `${parseInt(counter.innerText) + 1}`;
}

function app(event){
  let counter = document.getElementById('counter');
  whhile(true){
    setTimeout(counter.innerText = countUp(counter), 1000);
}
}