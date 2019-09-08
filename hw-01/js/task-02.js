const TOTAL = 100;
const ordered = 50;

console.group('Task-02');

function checkOrder(order) {
  return (order > TOTAL) ? 'На складе недостаточно твоаров!'
    : 'Заказ оформлен, с вами свяжется менеджер.';
}

console.log(checkOrder(ordered));

// It's my extention with prompt) to test code with different value of ordered
function checkOrderExtend(order) {
  return (order > TOTAL) ? `На складе нет ${order} единиц твовара!`
    : `Вы заказали ${order} единиц товара, с вами свяжется менеджер.`;
}

let isCancel = 0;

do {
  // eslint-disable-next-line no-alert
  const orderedPrompt = prompt('Введите количество товара! (Task-02)');

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

console.groupEnd();
