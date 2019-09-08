const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.group('Task-01');

users.shift();
console.log(users);

users.pop();
console.log(users);

users.unshift('Lux');
console.log(users);

users.push('Jay', 'Kiwi');
console.log(users);

users.splice(users.indexOf('Ajax'), 1);
console.log(users);

const userToInsert = 'Kong';
const insertBefore = 'Jay';

users.splice(users.indexOf(insertBefore), 0, userToInsert);
console.log(users);

console.groupEnd();
