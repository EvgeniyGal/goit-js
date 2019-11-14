import utils from './utils.js';

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const changeBodyColor = () => {
  refs.body.style.backgroundColor = utils.colors[utils.randomIntegerFromInterval(0,
    utils.colors.length - 1)];
};

let timer = null;

const startChangeColor = () => { timer = setInterval(changeBodyColor, 1000); };

const stopChangeColor = () => { clearInterval(timer); };

refs.btnStart.addEventListener('click', startChangeColor);
refs.btnStop.addEventListener('click', stopChangeColor);
