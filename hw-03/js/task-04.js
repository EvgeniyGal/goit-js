function countTotalSalary(employees) {
  const salerys = Object.values(employees);
  return salerys.reduce((a, b) => a + b);
}

console.group('Task-04');

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

console.groupEnd();
