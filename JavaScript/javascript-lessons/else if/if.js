//JavaScript Lesson: Basics (Primitive Types, Arrays, Functions, Bitwise, If-Else)

// 
// ---------- 1. Primitive (Value) Types
// These are basic data types in JavaScript

let name = "John"; //  string
let age = 25; //  number
let isOnline = true; //  boolean
let empty = undefined; //  undefined
let nothing = null; //  null

console.log(typeof name); //  "string"
console.log(typeof age); //  "number"
console.log(typeof isOnline); //  "boolean"
console.log(typeof empty); //  "undefined"
console.log(typeof nothing); //  "object" (special case in JS)

// 
// ---------- 2. Arrays and Accessing Elements

let user = ["Ahmad", 23]; //  array with string and number
user[2] = "Javed"; //  add third element
console.log(user); //  ["Ahmad", 23, "Javed"]
console.log(user.length); //  3

// 
// ---------- 3. Functions

//  Simple function that logs a message
function greet() {
  console.log("Hello, I am from a function");
}

greet(); //  Call the function

//  Function with parameter and return value
function squarePlusTen(number) {
  let a = 10;
  number += a;
  return number;
}

let result = squarePlusTen(20);
console.log(result); //  30

// 
// ---------- 4. Bitwise Operators
//  Perform operations on binary representations

console.log(1 | 2); //  3 (Bitwise OR: 01 | 10 = 11)
console.log(1 & 2); //  0 (Bitwise AND: 01 & 10 = 00)

// 
// ---------- 5. if-else Statement

let hour = 12;

if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Time not found");
}
