function foo(a, b) {
  // Correct handling of zero values
  return a + b; 
}

console.log(foo(0, 1)); // Outputs 1
console.log(foo(1, 0)); // Outputs 1
console.log(foo(1, 1)); // Outputs 2
console.log(foo(0,0)); //Outputs 0