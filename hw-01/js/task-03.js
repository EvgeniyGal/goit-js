let message = '';
const ADMIN_PASSWORD = 'jqueryismyjam';

// eslint-disable-next-line no-alert
const inputData = prompt('Введите пароль!');

function checkUserPass(pass) {
  if (pass === null) {
    return 'Отменено пользователем!';
  } if (pass === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }
  return 'Доступ запрещен, неверный пароль!';
}

console.assert(checkUserPass(ADMIN_PASSWORD) === 'Добро пожаловать!', 'ERROR: Put right pass but take sonething else');
console.assert(checkUserPass(null) === 'Отменено пользователем!', 'ERROR: Cancel but take sonething else');
console.assert(checkUserPass('dvv') === 'Доступ запрещен, неверный пароль!', 'ERROR: Put wrong pass take sonething else');

message = checkUserPass(inputData);

// eslint-disable-next-line no-alert
alert(message);
