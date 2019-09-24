import users from './users.js';

const getUsersWithAge = (usersArr, min, max) => usersArr.filter((item) => item.age >= min && item.age <= max);

console.group('Task-06');

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.groupEnd();
