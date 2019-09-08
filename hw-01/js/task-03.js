let message = '';
const ADMIN_PASSWORD = 'jqueryismyjam';

// eslint-disable-next-line no-alert
const inputData = prompt('Введите пароль!');

function checkUserPass(pass) {
  if (pass === null) {
    return 'Отменено пользователем!';
  }
  if (pass === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }
  return 'Доступ запрещен, неверный пароль!';
}

message = checkUserPass(inputData);

// eslint-disable-next-line no-alert
alert(message);
