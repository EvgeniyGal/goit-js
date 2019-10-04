const boxes = document.getElementById('boxes');
const controls = document.getElementById('controls');
const input = controls.getElementsByTagName('input');
const render = document.querySelector('button[data-action="render"');
const destroy = document.querySelector('button[data-action="destroy"');

function genColour() {
  function genRandColour() {
    return Math.round(Math.random() * 255);
  }
  return `rgb(${genRandColour()}, ${genRandColour()}, ${genRandColour()})`;
}

function createBoxes() {
  let htmlCode = '';
  for (let i = 0; i < 9; i++) {
    htmlCode = `${htmlCode}<div style="background-color: ${genColour()}; width: ${30 + i * 10}px; height: ${30 + i * 10}px;"></div>`;
  }
  console.log(input.value);
  console.log(input);
  console.log(htmlCode);
  boxes.insertAdjacentHTML('afterbegin', htmlCode);
}

function destroyBoxes() {

}

render.addEventListener('click', createBoxes);
// Задание 8
// Напиши скрипт создания и очистки коллекции
// элементов. Пользователь вводит количество элементов
// в input и нажимает кнопку Создать, после чего
// рендерится коллекция. При нажатии на кнопку
// Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая
//  принимает 1 параметр amount - число. Функция
//  создает столько div, сколько указано в amount
//  и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть
//  шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает
// div#boxes.
