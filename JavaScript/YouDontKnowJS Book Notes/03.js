// Chapter 2: Surveying JS
// The best way to learn JS is by writing JS code.
// To do that, we need to understand how JS works, which is the focus here.
// Even if you know other programming languages, take your time to get comfortable with JS and practice each part.

// This chapter is NOT a complete reference for all JS syntax.
// It’s also NOT a full beginner’s guide to JS.
// Instead, we will look at the major topics in JS to get a general idea of the language.
// The goal is to help you write programs with more confidence.

// Many topics here will be revisited in more detail later in the book and series.
// Don’t expect this chapter to be quick – it has a lot of important details.
// Take your time to read, think, and practice each concept.

// Tip:
// If you are still learning JS, spend extra time on this chapter.
// Go section by section, explore the topics, and compare with existing JS code.
// Understanding JS deeply here will help you get much more out of the rest of the book.

//--------------------------------------------------------------------------------------

// Each File is a Program
// Almost every website or web application uses many different JS files (usually ending with .js).
// It might feel like the whole application is one big program, but JS sees things differently.

// In JS, each file is treated as its own separate program.
// This is important mainly for error handling:
// - If one file has an error (during parsing, compiling, or running), it doesn’t stop other files from running.
// - But if your app depends on multiple files and one fails, the app might only work partially.

// Even though it seems like one big program from the user’s point of view,
// JS files work together to make the application behave like a single program.
// So always make sure each JS file works correctly and handles errors in other files gracefully.

//-----------------------------------------------------------------------------------------------
// Note about JS files and modules
// Many projects use build tools that combine multiple JS files into one file for the web page.
// When this happens, JS sees this single combined file as one program.

// Multiple separate .js files can act together as one program if they share state and functions
// using the "global scope." They mix in this global namespace, so at runtime they behave as one program.

// Since ES6, JS also supports modules. Modules are file-based too.
// If a file is loaded as a module (via `import` or <script type="module">),
// all its code is treated as one module, separate from other code.

// Even though modules may seem like parts of a program, JS still treats each module separately.
// Importing a module allows it to work together with other modules at runtime.

// No matter the pattern (standalone or module), think of each file as a mini-program.
// These mini-programs cooperate to make the whole application work.

//-----------------------------------------------------------------------------------------------
// Values
// The most basic unit of information in a program is called a value.
// Values are data that hold the program's state. In JS, values are either:
// 1. Primitive values
// 2. Object values

// Using values in code
greeting("My name is Kyle."); 
// Here, "My name is Kyle." is a primitive string value.

// Strings can be surrounded by double quotes " " or single quotes ' '.
// The choice is up to you, but be consistent for readability.
"Hello"
'Hello'

// Back-tick ` strings are special because they allow interpolation:
const firstName = "Kyle";
console.log("My name is ${firstName}."); // prints: My name is ${firstName}.
console.log('My name is ${firstName}.'); // prints: My name is ${firstName}.
console.log(`My name is ${firstName}.`); // prints: My name is Kyle.

// Use back-ticks ` only if you need interpolation; otherwise, use " or '.

// Other primitive values:
while (false) {
  console.log(3.141592);
}
// Here, false is a boolean value. The loop never runs.
// Numbers like 3.141592 are used for counting, indexing, or calculations.
// For example, use Math.PI instead of hardcoding 3.141592.
// BigInt type stores very large numbers.

// Example of array indexing:
const names = ["Alice", "Kyle"];
console.log(`My name is ${names[1]}.`); // My name is Kyle
// Arrays are 0-indexed: first element is names[0].

// Null and undefined
// Both indicate "no value" or emptiness.
while (value != undefined) {
  console.log("Still got something!");
}
// Best practice: use undefined consistently as the empty value.

// Symbol
// A special hidden, unique value used mainly as object keys.
hitchhikersGuide[Symbol("meaning of life")]; // 42
// Symbols are mostly used in libraries/frameworks, not everyday JS code.
//-----------------------------------------------------------------------------------------------
