import users from './users.js';

const getSortedUniqueSkills = (usersArr) => usersArr
    .reduce((accum, item) => {
      accum.push(...item.skills.filter((element) => !accum.includes(element)));
      return accum;
    }, [])
    .sort();

console.group('Task-10');

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

console.groupEnd();
