//  JavaScript Lesson: Loops
//  for, for/in, for/of, while, do/while, break, continue

// ----- for loop - repeats code a specified number of times
for (let i = 17; i < 30; i++) {
  console.log(i);
}

// ----- while loop - runs as long as condition is true
let i = 0;
while (i < 9) {
  console.log(i);
  i++;
}

// -------- do/while loop - runs code block once, then repeats while condition true
let j = 3;
do {
  console.log(j);
  j++;
} while (j < 5);

// ------- for/in loop - iterates over the keys/properties of an object
const person = { name: "mohammad", age: 27 };
for (let key in person) {
  console.log(person[key]); // logs property values
}

// ------- for/in with arrays - loops over array indices (keys)
// Not recommended if you need ordered iteration
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let index in numbers) {
  txt += numbers[index];
}
console.log(txt);

// --------- forEach - calls a function on each array element
numbers.forEach(function (value, index, array) {
  console.log(value);
});

// -------- for/of loop - iterates over iterable values (array elements, strings, etc)
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// ------ break - exits loop immediately
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break; // stops loop when i equals 3
  }
  console.log("Number is " + i);
}

// --------- continue - skips current iteration, continues loop
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // skip when i equals 3
  }
  console.log("Number is " + i);
}

// ------ Iterating means looping over a sequence (strings, arrays, objects)

// Example: iterating over a string
const str = "hello";
for (const char of str) {
  console.log(char);
}

// Example: iterating over an array
const arr = [1, 2, 3];
for (const num of arr) {
  console.log(num);
}
