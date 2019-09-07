function logItems(arrForLog) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrForLog.length; i++) {
    console.log(`${i + 1} - ${arrForLog[i]}`);
  }
}

console.group('Task-02');

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);


logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

console.groupEnd();
