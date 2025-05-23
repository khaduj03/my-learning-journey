// Copying objects in JavaScript

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Method 1: Using for...in loop to copy properties from circle to another object
const another = {};
for (let key in circle) {
  another[key] = circle[key];
}
console.log(another);
// Output: { radius: 1, draw: [Function: draw] }

// ----------------------------------------------------
// Method 2: Using Object.assign to copy properties and add new ones
const another2 = Object.assign({ color: "red" }, circle);
console.log(another2);
// Output: { color: 'red', radius: 1, draw: [Function: draw] }

// ----------------------------------------------------
// Method 3: Using Object.assign to merge multiple objects into one
let another3 = Object.assign(circle, { value: 1 }, { color: "red" });
console.log(another3);
// Output: { radius: 1, draw: [Function: draw], value: 1, color: 'red' }

// ----------------------------------------------------
// Method 4: Using spread operator to copy properties and add new ones
const another4 = { color: "red", ...circle };
console.log(another4);
// Output: { color: 'red', radius: 1, draw: [Function: draw] }

// ----------------------------------------------------
// Garbage Collection note:
// JavaScript automatically cleans up objects that are no longer referenced.

// ----------------------------------------------------
// Sorting an array of objects by property

const numbers = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// Sort numbers by 'name' in ascending order
numbers.sort(function (a, b) {
  if (a.name < b.name) return -1; // a goes before b
  if (a.name > b.name) return 1; // b goes before a
  return 0; // names are equal
});

console.log(numbers);
// Output: [{id: 1, name: "a"}, {id: 2, name: "b"}]

// ----------------------------------------------------
// Filtering an array of objects by condition

const users = [
  { name: "ali", age: 23 },
  { name: "javed", age: 12 },
  { name: "mohammad", age: 23 },
  { name: "dawood", age: 43 },
];

// Filter users with age >= 18 (adults)
const adults = users.filter((user) => user.age >= 18);

console.log(adults);
// Output: [
//   { name: "ali", age: 23 },
//   { name: "mohammad", age: 23 },
//   { name: "dawood", age: 43 }
// ]
