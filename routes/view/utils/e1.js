const num = [1, 2, 3, 4, 5];
const newmylife = num.reduce(function (acc, curval) {
  return acc + curval;
}, 0);
console.log(newmylife);
