const boxes = document.getElementById('boxes');
const controls = document.getElementById('controls');
const input = controls.firstElementChild;
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
  for (let i = 0; i < input.value; i++) {
    htmlCode = `${htmlCode}<div style="background-color: ${genColour()}; width: ${30
      + i * 10}px; height: ${30 + i * 10}px;"></div>`;
  }
  boxes.insertAdjacentHTML('afterbegin', htmlCode);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

render.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);
