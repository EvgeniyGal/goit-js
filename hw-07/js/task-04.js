const btnIncr = document.querySelector('button[data-action="increment"');
const btnDecr = document.querySelector('button[data-action="decrement"');
const outputValue = document.getElementById('value');

function Counter() {
  let count = 0;

  return {
    increment() {
      // eslint-disable-next-line no-plusplus
      return ++count;
    },

    decrement() {
      // eslint-disable-next-line no-plusplus
      return --count;
    },
  };
}

const counter = Counter();

counter.count = 100;

function handleIncr() {
  outputValue.textContent = counter.increment();
}

function handleDecr() {
  outputValue.textContent = counter.decrement();
}

btnIncr.addEventListener('click', handleIncr);
btnDecr.addEventListener('click', handleDecr);
