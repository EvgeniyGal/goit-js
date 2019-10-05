const list = document.getElementById('categories');

const items = list.querySelectorAll('.item');

console.log(`There are ${items.length} categories`);

items.forEach((element) => {
  const headLine = element.querySelector('h2');
  const inerItems = element.querySelectorAll('li');
  console.log(
    `Категория: ${headLine.textContent}\nКоличество элементов: ${inerItems.length}`,
  );
});
