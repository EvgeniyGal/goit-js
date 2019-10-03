const slider = document.getElementById('font-size-slider');
const text = document.getElementById('text');


slider.setAttribute('min', '4');
slider.setAttribute('max', '150');
slider.setAttribute('step', '2');
slider.setAttribute('value', Number.parseInt(window.getComputedStyle(text, null).getPropertyValue('font-size'), 0));

function setTextSize() {
  text.style.fontSize = `${slider.value}px`;
}

slider.addEventListener('input', setTextSize);
