import users from './users.js';

const calculateTotalBalance = (usersArr) => usersArr.reduce((acu, item) => acu + item.balance, 0);

console.group('Task-07');

console.log(calculateTotalBalance(users)); // 20916

console.groupEnd();
