import users from './users.js';

const getNamesSortedByFriendsCount = (usersArr) => usersArr
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((item) => item.name);

console.group('Task-09');

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.groupEnd();
