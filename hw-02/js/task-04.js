function findLongestWord(string) {
  if (string === '') {
    return '';
  }
  const wordArr = string.split(' ');
  let longestWord = '';
  wordArr.forEach((element) => {
    longestWord = element.length > longestWord.length ? element : longestWord;
  });
  return longestWord;
}

console.group('Task-04');

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

console.groupEnd();
