import users from './users.js';

const getInactiveUsers = (usersArr) => usersArr.filter((item) => !item.isActive);

console.group('Task-04');

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.groupEnd();
