const mainTitle = document.createElement('h1');
document.body.style.textAlign = 'center';
const list = document.createElement('ul');
list.style.width = '200px';
list.style.margin = '0 auto';
mainTitle.textContent = 'Please choose task!';
document.body.prepend(mainTitle);
document.body.append(list);

for (let i = 0; i < 8; i++) {
  list.insertAdjacentHTML(
    'beforeend',
    `<li><a href="./task-${`${i + 1}`.padStart(
      2,
      '0',
    )}.html" target="_blank">Task-${`${i + 1}`.padStart(2, '0')}</a></li>`,
  );
}
