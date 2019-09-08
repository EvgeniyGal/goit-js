const credits = 23500;
const pricePerDroid = 3000;
// eslint-disable-next-line no-alert
const oderedDroid = prompt('Какое количество дроидов вы желаете приобрести?');
let totalPrice;

console.group('Task-04');

function checkOrder(order) {
  if (order === null) {
    return 'Отменено пользователем!';
  }

  const orderNumber = Number.parseInt(order, 10);
  totalPrice = pricePerDroid * orderNumber;
  if (totalPrice > credits) {
    return 'Недостаточно средств на счету!';
  }
  return `Вы купили ${orderNumber} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
}

console.log(checkOrder(oderedDroid));

console.groupEnd();
