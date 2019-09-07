const credits = 23500;
const pricePerDroid = 3000;
// eslint-disable-next-line no-alert
const oderedDroid = prompt('Какое количество дроидов вы желаете приобрести?');
let totalPrice;

console.group('Task-04');

function checkOrder(order) {
  if (order === null) { return 'Отменено пользователем!'; }

  const orderNumber = Number.parseInt(order, 10);
  totalPrice = pricePerDroid * orderNumber;
  return (totalPrice > credits) ? 'Недостаточно средств на счету!'
    : `Вы купили ${orderNumber} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
}

console.assert(checkOrder(null) === 'Отменено пользователем!', 'ERROR: When user is cancel');
console.assert(checkOrder('3') === 'Вы купили 3 дроидов, на счету осталось 14500 кредитов.',
  'ERROR: When totalPrice < credits');
console.assert(checkOrder('8') === 'Недостаточно средств на счету!', 'ERROR: When totalPrice > credits');

console.log(checkOrder(oderedDroid));

console.groupEnd();
