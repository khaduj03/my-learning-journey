// Arrays and Objects
// Besides primitive values, JS also has object values.
// Arrays are a special type of object that store an ordered list of data.
// Array elements are accessed using numeric indexes.

const names = ["Frank", "Kyle", "Peter", "Susan"];
console.log(names.length); // 4
console.log(names[0]); // Frank
console.log(names[1]); // Kyle

// JS arrays can hold any value type:
// - primitives (string, number, boolean, null, undefined, symbol)
// - objects (including other arrays)
// - functions (functions are also values and can be stored in arrays or objects)

// Functions and Objects

// Functions are a special kind of object (sub-type of object).
// We'll study functions in more detail later.

// Objects are more general than arrays:
// - They store a collection of values
// - Values are accessed using keys (property names), not numeric indexes

const name = {
  first: "Kyle",
  last: "Simpson",
  age: 39,
  specialties: ["JS", "Table Tennis"]
};

// Accessing values in an object
console.log(`My name is ${name.first}.`);  // Using dot notation
console.log(`My name is ${name["first"]}.`); // Using bracket notation

// Determining the type of a value
console.log(typeof 42);                // "number"
console.log(typeof "abc");             // "string"
console.log(typeof true);              // "boolean"
console.log(typeof undefined);         // "undefined"
console.log(typeof null);              // "object" -- known bug!
console.log(typeof {a: 1});            // "object"
console.log(typeof [1,2,3]);           // "object" (arrays are objects)
console.log(typeof function hello(){});// "function"

// Warning:
// typeof null returns "object" (unexpected)
// typeof arrays returns "object" (not "array")
// typeof functions correctly returns "function"

// Converting a value from one type to another is called "coercion"
// We'll study coercion later in this chapter

// Primitive values and object values behave differently when assigned or passed around
// Details are in Appendix A: "Values vs References"
//-------------------------------------------------------------------------------

// Declaring and Using Variables

// Values in JS can be used directly (literals) or stored in variables.
// Variables are like containers for values.

// Variables must be declared before they are used.
// There are different ways to declare variables, each with slightly different behavior.

// Example using var
var name2 = "Kyle"; // declares a variable with an initial value
var age;           // declares a variable without an initial value

// Example using let
let name2 = "Kyle"; // declares a block-scoped variable
let age;           // block-scoped variable without initial value

// The difference between var and let is mainly scope
// var is function-scoped or globally-scoped
// let is block-scoped (limited to the block it is declared in)

var adult = true;
if (adult) {
    var name2 = "Kyle";  // function/global scoped
    let age = 39;       // block scoped
    console.log("Shhh, this is a secret!");
}

console.log(name2); // "Kyle" - var is accessible outside the block
console.log(age);  // Error! - let is not accessible outside the block

// Block-scoping helps avoid variable name conflicts
// var is still useful when you want a variable to be accessible in a wider scope
// Choosing var or let depends on the context of your program

//-----------------------------------------------------------------------------------------------
// var, let, and const

// It's common to hear "avoid var" in favor of let or const
// because var can be confusing due to its scope behavior.
// But knowing how to use var properly is useful!
// You should learn all features and use them when appropriate.

// Example of const
const myBirthday = true; // must be initialized and cannot be reassigned
let age = 39;            // block-scoped, can be reassigned

if (myBirthday) {
    age = age + 1;       // OK! let variable can change
    // myBirthday = false; // Error! const cannot be reassigned
}

// Note: const does not make objects or arrays immutable
const actors = ["Morgan Freeman", "Jennifer Aniston"];
actors[2] = "Tom Cruise"; // OK, the array itself can change
// actors = [];            // Error! cannot reassign the variable

// Best use of const: give a name to a simple primitive value
// Example: myBirthday instead of using true directly
// This makes code easier to read and understand


//-----------------------------------------------------------------------------------------------
// Tip for using const
// If you use const only with primitive values (like numbers, strings, booleans),
// you avoid confusion between re-assignment (not allowed) and mutation (allowed for objects/arrays).
// This is the safest way to use const.

// Other ways to declare variables in JS:

// 1. Function declaration
function hello(name) {
    console.log(`Hello, ${name}.`);
}
hello("Kyle"); // Hello, Kyle.

// 'hello' is created in the outer scope, so it's accessible from outside
// 'name' is a parameter, only accessible inside the function (its scope)

// 2. Catch clause
try {
    someError();
} catch (err) {
    console.log(err);
}

// 'err' is block-scoped, only exists inside the catch block
// Works like a variable declared with 'let'
