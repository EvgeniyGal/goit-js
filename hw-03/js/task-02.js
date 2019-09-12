function countProps(obj) {
  return Object.keys(obj).length;
}
console.group('Task-02');

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

console.groupEnd();
