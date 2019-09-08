let input;
let total = 0;
let isCancel = 0;

function parsInput(userInput) {
  const userNumber = Number(userInput);
  if (Number.isNaN(userNumber)) {
    // eslint-disable-next-line no-alert
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
}

do {
  // eslint-disable-next-line no-alert
  input = prompt('Введите любое число!');
  if (input === null) {
    isCancel = 1;
  } else {
    parsInput(input);
  }
} while (isCancel === 0);

// eslint-disable-next-line no-alert
alert(`Общая сумма чисел равна ${total}`);
