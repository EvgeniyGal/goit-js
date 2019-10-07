const list = document.getElementById('categories');

const items = list.querySelectorAll('.item');

console.group('Task-01');
console.log(`There are ${items.length} categories`);

items.forEach((element) => {
  const headLine = element.querySelector('h2');
  const inerItems = element.querySelectorAll('li');
  console.log(
    `Категория: ${headLine.textContent}\nКоличество элементов: ${inerItems.length}`,
  );
});

console.groupEnd();
