// -------------------- Add Elements to Array --------------------
const numbers1 = [1, 2, 3];
numbers1.push(4); // Add to end
numbers1.unshift(7); // Add to beginning
numbers1.splice(2, 0, "a", "b", "c"); // Add at index 2
numbers1.splice(2, 1); // Remove one element at index 2
console.log(numbers1);

// -------------------- Find Elements in Array --------------------
const numbers2 = [1, 2, 3, 4, 1, 2, 3, 4];
console.log(numbers2.indexOf(1)); // First occurrence
console.log(numbers2.lastIndexOf(1)); // Last occurrence
console.log(numbers2.includes(4)); // Check if includes 4

if (numbers2.indexOf(4) === 3) {
  console.log("yes");
}

const techs = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
];

console.log(techs.includes({ id: 1, name: "html" })); // false (reference check)

const found1 = techs.find((t) => t.name === "html");
const foundIndex1 = techs.findIndex((t) => t.name === "css");
console.log(found1, foundIndex1);

// -------------------- Remove Elements from Array --------------------
const numbers3 = [1, 2, 3, 4, 5];
numbers3.splice(1, 2); // Remove from index 1, delete 2 items
let popped = numbers3.pop(); // Remove last
let shifted = numbers3.shift(); // Remove first
console.log(numbers3, popped, shifted);

// -------------------- Remove All Elements --------------------
let numbers4 = [1, 2, 3, 4, 5];
let ref = numbers4;
numbers4 = []; // 1st method
// numbers4.length = 0;          // 2nd method
// numbers4.splice(0, numbers4.length); // 3rd method
console.log(numbers4, ref);

// -------------------- Combine and Slice Arrays --------------------
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const sliced = combined.slice(2, 4);
console.log(combined, sliced);

// Object references
const objArray = [{ id: 2 }];
const mixed = objArray.concat([1, 2, 3]);
objArray[0].id = 20; // Affects 'mixed' too (reference)
console.log(mixed);

// -------------------- Spread Operator --------------------
const a = [1, 2, 3];
const b = [3, 5, 6];
const c = [...a, ...b, "x"];
const clone = c.slice();
console.log(c, clone);

// -------------------- Iterate Arrays --------------------
const numbers5 = [1, 2, 2, 3];
numbers5.forEach((n) => console.log(n + 4));

// -------------------- Join and Split --------------------
const numbers6 = [1, 2, 3];
console.log(numbers6.join(" "));

const msg = "none coding is cool";
const words = msg.split(" ");
const rejoined = words.join("-");
console.log(words, rejoined);

// -------------------- Sort Arrays --------------------
const nums = [4, 3, 2, 1, 4];
nums.sort();
nums.reverse();
console.log(nums);

const items = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
];
items.sort((a, b) => a.name.localeCompare(b.name));
console.log(items);

// -------------------- Test Elements (every, some) --------------------
const posCheck = [1, 2, 3];
console.log(posCheck.every((v) => v >= 0));

const mixCheck = [1, -1, 2, 3];
console.log(mixCheck.some((v) => v >= 0));

// -------------------- Filter Array --------------------
const mixNumbers = [-1, 1, -2, 3, 5, 6];
const filtered = mixNumbers.filter((v) => v >= 0);
console.log(filtered);

// -------------------- Map Array --------------------
const nums2 = [1, 3, 5, 7];
const doubled = nums2.map((v) => v * 2);
console.log(doubled);

const skills = ["html", "css", "js", "python"];
const listItems = skills.map((p) => `<li>${p}</li>`).join("");
console.log(listItems);

const wrapped = skills.map((value) => ({ value }));
console.log(wrapped);

// Chained map and filter
const nums3 = [1, 2, 3, 4];
const result = nums3.filter((v) => v >= 0).map((n) => ({ value: n }));
console.log(result);

// -------------------- Reduce Array --------------------
const nums4 = [1, 2, 3, 5];
const total = nums4.reduce((acc, val) => acc + val, 0);
console.log(total);

// -------------------- Access Array Elements --------------------
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel"; // Update
let lastCar = cars[cars.length - 1];
console.log(cars, lastCar);

// -------------------- Loop Through Array --------------------
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let htmlList = "<ul>";
for (let i = 0; i < fruits.length; i++) {
  htmlList += `<li>${fruits[i]}</li>`;
}
htmlList += "</ul>";
console.log(htmlList);

// -------------------- Push Elements --------------------
const fruits2 = ["Banana", "Orange", "Apple"];
fruits2.push("Lemon");
console.log(fruits2);

// -------------------- Array Type Checks --------------------
console.log(Array.isArray(fruits2)); // true
console.log(fruits2 instanceof Array); // true

// -------------------- toString and join --------------------
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.toString());
console.log(fruits3.join(" * "));

// -------------------- pop() Method --------------------
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits4.pop();
console.log(fruits4, removed);
// ------------------------- push()
// Adds an item to the end of the array
fruits.push("Kiwi");

// ------------------------- shift()
// Removes the first item of the array
fruits.shift();

// ------------------------- unshift()
// Adds an item to the beginning of the array
fruits.unshift("Lemon");

// ------------------------- Accessing by index
console.log(fruits[0]); // Access first item

// ------------------------- Add item using length
fruits[fruits.length] = "Kiwi"; // Adds to end

// ------------------------- delete
// Removes item but leaves an empty spot (undefined). Avoid using.
delete fruits[0];

// ------------------------- concat()
// Merges arrays into a new one
const girls = ["Anna"];
const boys = ["Tom"];
const children = girls.concat(boys);

// ------------------------- splice()
// Adds/removes items at a specific position
fruits.splice(2, 0, "Lemon", "Kiwi"); // Add
fruits.splice(0, 1); // Remove 1 item at index 0

// ------------------------- slice()
// Returns a portion of the array (non-destructive)
const citrus = fruits.slice(1, 3); // ["Orange", "Lemon"]

// ------------------------- toString()
// Converts array to comma-separated string
fruits.toString();

// ------------------------- sort()
// Sorts array alphabetically (or Unicode by default)
fruits.sort();

// ------------------------- reverse()
// Reverses the array order
fruits.reverse();

// ------------------------- sort() with numbers
const points = [40, 100, 1, 5];
points.sort((a, b) => a - b); // Ascending

// ------------------------- shuffle array
points.sort(() => 0.5 - Math.random());

// ------------------------- Math.max.apply()
// Finds max in array
Math.max.apply(null, points);

// ------------------------- Math.min.apply()
// Finds min in array
Math.min.apply(null, points);

// ------------------------- Custom max with loop
let max = -Infinity;
for (let i = 0; i < points.length; i++) {
  if (points[i] > max) max = points[i];
}

// ------------------------- forEach()
// Loops through array items
points.forEach((value, index, array) => {
  console.log(value);
});

// ------------------------- map()
// Creates a new array by transforming each element
const doubled2 = points.map(value => value * 2);

// ------------------------- filter()
// Creates a new array with values that pass a test
const over18 = points.filter(value => value > 18);

// ------------------------- reduce()
// Reduces array to single value from left to right
const sum = points.reduce((total, value) => total + value, 0);

// ------------------------- reduceRight()
// Same as reduce, but right to left
const rightSum = points.reduceRight((total, value) => total + value, 0);

// ------------------------- every()
// Returns true if all elements pass the test
const allOver18 = points.every(value => value > 18);

// ------------------------- some()
// Returns true if at least one element passes the test
const anyOver18 = points.some(value => value > 18);

// ------------------------- indexOf()
// Finds first index of a value
points.indexOf(100);

// ------------------------- lastIndexOf()
// Finds last index of a value
points.lastIndexOf(100);

// ------------------------- find()
// Returns the first value that matches condition
const found = points.find(value => value > 18);

// ------------------------- findIndex()
// Returns index of first value that matches condition
const foundIndex = points.findIndex(value => value > 18);

// ------------------------- Array.from()
// Converts string or iterable into an array
Array.from("ABC"); // ["A", "B", "C"]

// ------------------------- Array.keys()
// Returns an iterator with indexes
for (let key of points.keys()) {
  console.log(key);
}

// ------------------------- entries()
// Returns an iterator of index/value pairs
for (let [index, value] of points.entries()) {
  console.log(index, value);
}

// ------------------------- includes()
// Checks if a value is in the array
points.includes(100);

// ------------------------- Constants and mutability
const cars = ["BMW"];
cars[0] = "Toyota"; // Allowed
cars.push("Audi");  // Allowed

// ------------------------- Multidimensional arrays
const matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][1]); // 4

// ------------------------- fill()
// Fills array with a static value
new Array(3).fill("x"); // ["x", "x", "x"]

// ------------------------- copyWithin()
// Copies part of array within itself
const nums5 = [1, 2, 3, 4, 5];
nums5.copyWithin(0, 3); // [4, 5, 3, 4, 5]
