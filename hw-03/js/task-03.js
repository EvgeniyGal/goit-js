function findBestEmployee(employees) {
  let bestEmpl = 0;
  const employArr = Object.entries(employees);
  for (let i = 1; i < employArr.length; i++) {
    if (employArr[i][1] > employArr[bestEmpl][1]) {
      bestEmpl = i;
    }
  }
  return `${employArr[bestEmpl][0]}: ${employArr[bestEmpl][1]}`;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
