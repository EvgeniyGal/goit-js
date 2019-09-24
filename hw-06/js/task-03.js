import users from './users.js';

const getUsersWithGender = (usersArr, gender) => usersArr.filter((element) => element.gender === gender).map((element) => element.name);

console.group('Task-03');

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.groupEnd();
