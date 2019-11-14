import utils from './utils.js';


const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

function changeBodyColor() {
  body.style.backgroundColor = utils.colors[utils.randomIntegerFromInterval(0,
    utils.colors.length - 1)];
  console.log('hi');
}

let timer = null;

function startChangeColor() {
  timer = setInterval(changeBodyColor, 1000);
}

function stopChangeColor() {
  clearInterval(timer);
}

btnStart.addEventListener('click', startChangeColor);
btnStop.addEventListener('click', stopChangeColor);
