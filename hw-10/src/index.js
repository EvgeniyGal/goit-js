import './styles.css';
import menuTemplate from './menu.hbs';
import menuData from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('#theme-switch-control'),
  menu: document.querySelector('#menu'),
};

const savedThem = localStorage.getItem('theme');

if (savedThem === undefined) {
  localStorage.setItem('theme', Theme.LIGHT);
  refs.body.classList.add('light-theme');
} else if (savedThem === Theme.LIGHT) {
  refs.switch.checked = false;
  refs.body.classList.add(Theme.LIGHT);
} else {
  refs.switch.checked = true;
  refs.body.classList.add(Theme.DARK);
}

function changeThem({ target }) {
  if (target.checked === true) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

refs.switch.addEventListener('click', changeThem);

const markup = menuData.reduce((acc, e) => acc + menuTemplate(e), '');

refs.menu.innerHTML = markup;
