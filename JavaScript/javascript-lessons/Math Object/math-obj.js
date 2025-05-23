// ---------------------------- Math Object - Basics

Math.round(4.4); //  Rounds to nearest integer → 4
Math.round(4.5); //  Rounds to nearest integer → 5

Math.ceil(4.1); //  Rounds UP → 5
Math.floor(4.9); //  Rounds DOWN → 4
Math.trunc(4.9); //  Removes decimal part → 4 (ES6+)

// ---------------------------- Math.sign(x) → Tells the sign of a number
Math.sign(-4); // → -1
Math.sign(0); // →  0
Math.sign(4); // →  1

// ---------------------------- Power and Roots
Math.pow(8, 2); // → 64 (8^2)
Math.sqrt(64); // → 8 (Square root)

// ---------------------------- Absolute value
Math.abs(-4.7); // → 4.7 (removes negative sign)

// ---------------------------- Trigonometry - sin and cos (angles in radians)
Math.sin((90 * Math.PI) / 180); // → 1 (sin(90°))
Math.cos((0 * Math.PI) / 180); // → 1 (cos(0°))

// ---------------------------- Constants
Math.PI; // → 3.14159...
Math.E; // → 2.71828...

// ---------------------------- Random number
Math.random(); // → Random number between 0 (inclusive) and 1 (exclusive)

// ---------------------------- Get random number in range [min, max)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Example:
getRandomNumber(1, 10); // → A random number from 1 to 9

// ---------------------------- Max and Min
Math.max(1, 2, 3, 4, 32); // → 32
Math.min(1, 2, 1, 1, 0, -5); // → -5

// ---------------------------- More examples
console.log(Math.round(1.5)); // → 2
console.log(Math.max(1, 2, 3, 4, 5)); // → 5
console.log(Math.min(1, 2, 3, 0)); // → 0
console.log(Math.abs(-12)); // → 12
console.log(Math.PI); // → 3.14159...
console.log(Math.random()); // → e.g. 0.7264...
