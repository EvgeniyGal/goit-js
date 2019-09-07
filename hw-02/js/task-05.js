function formatString(string) {
  if (string.length > 40) {
    return `${String(string).slice(0, 40)}...`;
  }
  return string;
}

console.group('Task-05');

console.assert(formatString('Curabitur ligula sapien, tincidunt non.')
=== 'Curabitur ligula sapien, tincidunt non.', 'ERROR: When string < 40 chars');
console.assert(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')
=== 'Vestibulum facilisis, purus nec pulvinar...', 'ERROR: When string > 40 chars');

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

console.groupEnd();
