//  JavaScript Lesson: Math.random()
//  Topic: Generating Random Numbers in JavaScript

//  Math.random()
//  Returns a floating-point number between 0 (inclusive) and 1 (exclusive).
//  This means it can return 0, but it will never return exactly 1.

console.log(Math.random());
// Example output: 0.7263512 → Every time it gives a different number between 0 and 1

// ------------- Generate a random number between 0 and 100 (exclusive)
console.log(Math.random() * 100);
// Example output: 72.63512

// ------------- Get a whole number (integer) using Math.floor()
console.log(Math.floor(Math.random() * 100));
// Output: An integer between 0 and 99

// ------------- Random number between min and max (exclusive max)
// ➤ Formula: Math.floor(Math.random() * (max - min) + min)

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomNumber(1, 10));
// Output: A number from 1 to 9

// ------------- Random number between min and max (inclusive max)
// ➤ Formula: Math.floor(Math.random() * (max - min + 1) + min)

function getRandomNumberInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumberInclusive(1, 10));
// Output: A number from 1 to 10

// ------------- Get a random item from an array
const fruits = ["apple", "banana", "cherry", "mango"];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit);
// Output: One random fruit from the array

// ------------- Use with Math.round() to get less accurate but rounded number
console.log(Math.round(Math.random() * 10));
// Output: Random number between 0 and 10 (inclusive)

// ------------- Use with Math.ceil() to avoid 0
console.log(Math.ceil(Math.random() * 10));
// Output: Random number between 1 and 10 (inclusive)
