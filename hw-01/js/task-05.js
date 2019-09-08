// eslint-disable-next-line no-alert
const userCountry = prompt('Введите вашу страну для расчета доставки!');

function correctCountry(country) {
  if (country === null || country === '') {
    return null;
  }
  return country.substring(0, 1).toUpperCase()
  + country.substring(1, country.length).toLowerCase();
}

const userCountryCorrect = correctCountry(userCountry);

switch (userCountryCorrect) {
  case 'Китай':
    console.log(`Доставка в ${userCountryCorrect} будет стоить 100 кредитов`);
    break;
  case 'Чили':
    console.log(`Доставка в ${userCountryCorrect} будет стоить 250 кредитов`);
    break;
  case 'Австралия':
    console.log(`Доставка в ${userCountryCorrect} будет стоить 170 кредитов`);
    break;
  case 'Индия':
    console.log(`Доставка в ${userCountryCorrect} будет стоить 80 кредитов`);
    break;
  case 'Ямайка':
    console.log(`Доставка в ${userCountryCorrect} будет стоить 120 кредитов`);
    break;
  case null:
    // eslint-disable-next-line no-alert
    alert('Вы не ввели страну или отменили выбор');
    break;
  default:
    // eslint-disable-next-line no-alert
    alert('В вашей стране доставка не доступна');
}
