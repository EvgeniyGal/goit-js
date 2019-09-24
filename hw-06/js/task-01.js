import users from './users.js';

const getUserNames = (usersArr) => usersArr.map((item) => item.name);

console.group('Task-01');
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony' ]
console.groupEnd();
