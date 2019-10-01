import users from './users.js';

const getUsersWithFriend = (usersArr, friendName) => usersArr
    .filter((item) => item.friends.some((element) => element === friendName))
    .map((item) => item.name);

console.group('Task-08');

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

console.groupEnd();
