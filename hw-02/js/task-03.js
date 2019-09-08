function calculateEngravingPrice(message, pricePerWord) {
  if (message === '') {
    return 0;
  }
  const wordArr = message.split(' ');
  return wordArr.length * pricePerWord;
}

console.group('Task-03');

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
