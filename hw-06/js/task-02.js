import users from './users.js';

const getUsersWithEyeColor = (usersArr, color) => usersArr.filter((item) => item.eyeColor === color);

console.group('Task-02');

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
console.groupEnd();
