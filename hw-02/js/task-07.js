const numbers = [];
let isCancel = 0;
let total = 0;

do {
  // eslint-disable-next-line no-alert
  const input = prompt('Введите любое число! (Task-07)');
  if (input === null) {
    isCancel = 1;
  } else {
    const inputNumber = Number(input);
    if (!Number.isNaN(inputNumber)) {
      numbers.push(inputNumber);
    } else {
      // eslint-disable-next-line no-alert
      alert('Вы ввели число с ошибкой!!!');
    }
  }
} while (isCancel === 0);

// function calcTotal(numberArr) {
//   if (numberArr.length === 0) {
//     return 0;
//   }
//   let tempTotal = 0;
//   // eslint-disable-next-line no-plusplus
//   numberArr.forEach((element) => {
//     tempTotal += element;
//   });
//   return tempTotal;
// }
// total = calcTotal(numbers);

function calcTotal(numberArr) {
  if (numberArr.length === 0) {
    return 0;
  }
  for (let i = 0; i < numberArr.length; i++) {
    total += numberArr[i];
  }
  return total;
}

console.group('Task-07');

console.log(`Общая сумма чисел равна ${calcTotal(numbers)}`);

if (numbers.length !== 0) {
  console.log('Самый компактный вариант с callback функцией (numbers.reduce((a, b) => a + b))): ',
    numbers.reduce((a, b) => a + b));
}

console.groupEnd();
