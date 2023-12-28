let sum = [1, 2, 3, 4, 5, 6, 7];
let newinteger = sum.reduce(function (acc, curval) {
  return acc + curval;
}, 0);
console.log(newinteger);
