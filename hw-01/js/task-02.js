const TOTAL = 100;
const ordered = 50;

console.group('Task-02');

function checkOrder(order) {
  if (order > TOTAL) {
    return 'На складе недостаточно твоаров!';
  }
  return 'Заказ оформлен, с вами свяжется менеджер.';
}

console.assert(
  checkOrder(2) === 'Заказ оформлен, с вами свяжется менеджер.',
  'ERROR: When ordered < TOTAL',
);
console.assert(
  checkOrder(150) === 'На складе недостаточно твоаров!',
  'ERROR: When ordered > TOTAL',
);

console.log(checkOrder(ordered));

// It's my extention with prompt) to test code with different value of ordered

function checkOrderExtend(order) {
  if (order > TOTAL) {
    return `На складе нет ${order} единиц твовара!`;
  }
  return `Вы заказали ${order} единиц товара, с вами свяжется менеджер.`;
}

console.assert(
  checkOrderExtend(2)
    === 'Вы заказали 2 единиц товара, с вами свяжется менеджер.',
  'ERROR: When ordered < TOTAL',
);
console.assert(
  checkOrderExtend(150) === 'На складе нет 150 единиц твовара!',
  'ERROR: When ordered > TOTAL',
);

let isCancel = 0;

do {
  // eslint-disable-next-line no-alert
  const orderedPrompt = window.prompt('Введите количество товара! (Task-02)');

  if (orderedPrompt === null) {
    isCancel = 1;
  } else {
    const orderedNumberPrompt = Number.parseInt(orderedPrompt, 10);

    if (Number.isNaN(orderedNumberPrompt)) {
      // eslint-disable-next-line no-alert
      alert('Количество товара введено с шибкой');
    } else {
      console.log(checkOrderExtend(orderedNumberPrompt));
    }
  }
} while (isCancel === 0);

console.groupEnd('Task-02');
