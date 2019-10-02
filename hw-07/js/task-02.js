const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsLi = ingredients.map((item) => {
  const tempLi = document.createElement('li');
  tempLi.textContent = item;
  return tempLi;
});

document.getElementById('ingredients').prepend(...ingredientsLi);
