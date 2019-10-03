const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

function updateInput() {
  if (input.value === '') {
    output.textContent = 'незнакомец';
  } else {
    output.textContent = input.value;
  }
}

input.addEventListener('input', updateInput);
