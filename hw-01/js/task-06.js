let input;
let total = 0;

while (true) {
  input = prompt('Введите любое число!');
  if (input === null) {
    break;
  }

  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
}

alert(`Общая сумма чисел равна ${total}`);
