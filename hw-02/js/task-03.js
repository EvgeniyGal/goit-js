function calculateEngravingPrice(message, pricePerWord) {
  if (message === '') { return 0; }
  const wordArr = String(message).split(' ');
  return wordArr.length * pricePerWord;
}

console.group('Task-03');

console.assert(calculateEngravingPrice('Hjh jhd jcn', 10) === 30, 'ERROR: Something wrong in calculating');
console.assert(calculateEngravingPrice('', 10) === 0, 'ERROR: Something wrong when ampty message');

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.groupEnd();
