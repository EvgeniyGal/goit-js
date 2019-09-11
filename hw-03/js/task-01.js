const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;

const keys = Object.keys(user);

console.group('Task-01');

// На цикл for...of ESlint ругается что он кушает много ресурсов
keys.forEach((element) => {
  console.log(`${element}: ${user[element]}`);
});

console.groupEnd();
