
// arguments is a special array-like object available inside regular JavaScript functions.

// It contains all the arguments passed to the function, even if you didn't explicitly define parameters for them.

// It's useful when you want to create a function that can accept any number of arguments.



// Example 1: Simple sum function with two parameters
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); // Output: 3

// Example 2: Sum function that sums all arguments passed (using 'arguments' object)
function sumAll() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}
console.log(sumAll(1, 2, 3, 4, 5, 5)); // Output: 20

// Reduce method example for summing array elements
const numbers = [1, -1, 2, 3];

// Summing using a for...of loop
let sum = 0;
for (let n of numbers) {
  sum += n;
}
console.log(sum); // Output: 5

// Summing using Array.reduce method
let sumWithReduce = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sumWithReduce); // Output: 5

// Function with default parameters for calculating interest
function interest(principal, rate = 3.5, years = 5) {
  // rate and years have default values if not provided
  return ((principal * rate) / 100) * years;
}

console.log(interest(100000)); // Output: 17500
