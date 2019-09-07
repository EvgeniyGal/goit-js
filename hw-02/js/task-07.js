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

function calcTotal(numberArr) {
  if (numberArr.length === 0) {
    return 0;
  }
  let tempTotal = 0;
  // eslint-disable-next-line no-plusplus
  numberArr.forEach((element) => {
    tempTotal += element;
  });
  return tempTotal;
}

console.group('Task-07');

console.assert(calcTotal([5, 9, 3]) === 17, 'ERROR: Somthing wrong in calculeting total');
console.assert(calcTotal([]) === 0, 'ERROR: Somthing wrong when empty array');

total = calcTotal(numbers);

console.log(`Общая сумма чисел равна ${total}`);

console.groupEnd();
