let userCountry;

userCountry = prompt('Введите вашу страну для расчета доставки!');

userCountry =
  userCountry.substring(0, 1).toUpperCase() +
  userCountry.substring(1, userCountry.length).toLowerCase();

console.group('Task-05');

switch (userCountry) {
  case 'Китай':
    console.log(`Доставка в ${userCountry} будет стоить 100 кредитов`);
    break;
  case 'Чили':
    console.log(`Доставка в ${userCountry} будет стоить 250 кредитов`);
    break;
  case 'Австралия':
    console.log(`Доставка в ${userCountry} будет стоить 170 кредитов`);
    break;
  case 'Индия':
    console.log(`Доставка в ${userCountry} будет стоить 80 кредитов`);
    break;
  case 'Ямайка':
    console.log(`Доставка в ${userCountry} будет стоить 120 кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}

console.groupEnd();