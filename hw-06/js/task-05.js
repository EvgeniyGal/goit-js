import users from './users.js';

const getUserWithEmail = (usersArr, email) => usersArr.find((item) => item.email === email);

console.group('Task-05');

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

console.groupEnd();
