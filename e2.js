function range(a, b) {
  for (let i = 0; i <= 10; i++) {
    let a = a + i;
    if (a == b) {
      console.log(i);
    }
  }
}
console.log(range(2, 9));
