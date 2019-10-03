const btnIncr = document.querySelector('button[data-action="increment"');
const btnDecr = document.querySelector('button[data-action="decrement"');
const outputValue = document.getElementById('value');

class Counter {
  constructor() {
    this.count = 0;
  }

  get getCount() {
    return this.count;
  }

  increment() {
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }
}

const counter = new Counter();

function handleIncr() {
  outputValue.textContent = counter.increment();
}

function handleDecr() {
  outputValue.textContent = counter.decrement();
}

btnIncr.addEventListener('click', handleIncr);
btnDecr.addEventListener('click', handleDecr);
