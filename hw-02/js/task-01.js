const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.group('Task-01');

users.shift();
console.assert(users.toString() === 'Poly,Ajax,Chelsey', 'ERROR: Bug in dellete first element');
console.log(users);

users.pop();
console.assert(users.toString() === 'Poly,Ajax', 'ERROR: Bug in dellete last element');
console.log(users);

users.unshift('Lux');
console.assert(users.toString() === 'Lux,Poly,Ajax', 'ERROR: Bug in add first element');
console.log(users);

users.push('Jay', 'Kiwi');
console.assert(users.toString() === 'Lux,Poly,Ajax,Jay,Kiwi', 'ERROR: Bug in add tow last element');
console.log(users);

users.splice(users.indexOf('Ajax'), 1);
console.assert(users.toString() === 'Lux,Poly,Jay,Kiwi', 'ERROR: Bug in dellete -Ajax-');
console.log(users);

const userToInsert = 'Kong';
const insertBefore = 'Jay';

users.splice(users.indexOf(insertBefore), 0, userToInsert);
console.assert(users.toString() === 'Lux,Poly,Kong,Jay,Kiwi', 'ERROR: Bug in dellete -Ajax-');
console.log(users);

console.groupEnd();
