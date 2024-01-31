function exponential(a, b) {
  if (b === 0) {
    return 1;
  } else {
    return a * exponential(a, b - 1);
  }
}

console.log(exponential(4, 2));
