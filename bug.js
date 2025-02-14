function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line is incorrect!
  }
  return a + b;
}

console.log(foo(0, 1)); // Outputs 0
console.log(foo(1, 0)); // Outputs 0
console.log(foo(1, 1)); // Outputs 2