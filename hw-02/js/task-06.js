const spamWords = ['SPAM', 'spam', 'Spam', 'SALE', 'sale', 'Sale'];

function checkForSpam(str) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < spamWords.length; i++) {
    if (str.includes(spamWords[i])) return true;
  }
  return false;
}

console.group('Task-06');

console.assert(checkForSpam('Latest technology news') === false, 'ERROR: Function find spam but it isnt here');
console.assert(checkForSpam('Get best sale offers now!') === true, 'ERROR: Function dont find spam but it is here');

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

console.groupEnd();
