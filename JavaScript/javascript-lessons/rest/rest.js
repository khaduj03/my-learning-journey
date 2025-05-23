// Rest operator collects all remaining arguments into an array
function sum(...args) {
  console.log(args); // args is an array of all arguments passed
  let num = 0;
  // Add each number in args to num
  args.forEach(function (number) {
    num += number;
  });
  return num;
}

console.log(sum(1, 2, 33, 4, 44)); // Output: 84

// Rest operator with one normal parameter + rest
function sum(discount, ...args) {
  // Sum all numbers in args using reduce
  const total = args.reduce((a, b) => a + b, 0);
  // Apply discount and return final value
  return total * (1 - discount);
}

console.log(sum(0.7, 1, 2, 33, 4, 44)); // Output: 26.1
