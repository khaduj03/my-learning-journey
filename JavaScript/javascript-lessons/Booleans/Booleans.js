//  JavaScript Lesson: Booleans

// ----------- Boolean is a data type with only two possible values: true or false

console.log(true); //  true
console.log(false); //  false

// ----------- Booleans are often the result of comparisons

console.log(10 > 5); //  true
console.log(10 < 5); //  false
console.log(5 === 5); //  true
console.log(5 !== 3); //  true

// ----------- Boolean values in variables

let isOnline = true;
let isLoggedIn = false;

console.log(isOnline); //  true
console.log(isLoggedIn); //  false

// ----------- Boolean function: Boolean(value)
//  Converts any value to true or false based on rules

console.log(Boolean(1)); //  true
console.log(Boolean(0)); //  false
console.log(Boolean("hello")); //  true
console.log(Boolean("")); //  false
console.log(Boolean(null)); //  false
console.log(Boolean(undefined)); //  false
console.log(Boolean(NaN)); //  false

// ----------- Falsy values in JavaScript
//  These always return false when converted to Boolean

// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN

// Everything else is considered "truthy"

// ----------- Example: Check if input is empty
let input = "";

if (input) {
  console.log("You entered something");
} else {
  console.log("Input is empty"); //  This will run because input is falsy
}

// ----------- Logical operators with Booleans

// AND (&&): true only if both sides are true
console.log(true && true); //  true
console.log(true && false); //  false

// OR (||): true if at least one side is true
console.log(true || false); //  true
console.log(false || false); //  false

// NOT (!): reverses the value
console.log(!true); //  false
console.log(!false); //  true
