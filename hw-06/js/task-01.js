import users from './users.js';

console.log(users);

// const users = require('./users');

// console.log(users);
const getUserNames = (users) => users.filter(item => item.name);
// Получить массив имен всех пользователей (поле name).

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony' ]
// Задание 2

// console.group('Task-01');

// console.log(Account.prototype.getInfo); // function

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account('Poly', 'poly@mail.com');
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// console.groupEnd();
