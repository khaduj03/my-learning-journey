//  JavaScript Lesson: typeof Operator

// The typeof operator returns a string indicating the type of the unevaluated operand.

// --------- typeof with different data types:

console.log(typeof "hello"); // "string"
// Explanation: "hello" is a string

console.log(typeof 123); // "number"
// Explanation: 123 is a number

console.log(typeof true); // "boolean"
// Explanation: true is a boolean value

console.log(typeof undefined); // "undefined"
// Explanation: undefined means a variable has no value assigned

console.log(typeof null); // "object"
// Explanation: this is a known JavaScript quirk — typeof null returns "object"

console.log(typeof {}); // "object"
// Explanation: {} is an object (empty object literal)

console.log(typeof []); // "object"
// Explanation: arrays are technically objects in JavaScript

console.log(typeof function () {}); // "function"
// Explanation: functions have their own type "function"

console.log(typeof Symbol()); // "symbol"
// Explanation: Symbol is a unique primitive type

// ----------- Using typeof in conditions:

let myVar = 42;

if (typeof myVar === "number") {
  console.log("myVar is a number");
} else {
  console.log("myVar is NOT a number");
}

// -------- typeof with variables that are not declared

// console.log(typeof someUndefinedVar); // "undefined"
// typeof does not throw an error even if variable is not declared.
