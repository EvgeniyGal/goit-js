const credits = 23500;
const pricePerDroid = 3000;
const oderedDroid = prompt('Какое количество дроидов вы желаете приобрести?');
let totalPrice;

console.group('Task-04');

if (oderedDroid === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * Number.parseInt(oderedDroid);

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${Number.parseInt(
        oderedDroid,
      )} дроидов, на счету осталось ${credits - totalPrice} кредитов.`,
    );
  }
}

console.groupEnd();
