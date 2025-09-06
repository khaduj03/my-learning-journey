// What’s in an Interpretation?

// Interpreted languages run code line by line.
// If the program has an error on line 5, it will only be noticed
// when the program reaches that line during execution.
// This is why errors are sometimes discovered late.

// For a long time, interpreted (or scripting) languages were seen
// as weaker compared to compiled languages.
// People thought they were slower, less optimized, and less reliable,
// partly because they often used dynamic typing instead of static typing.

// Compiled languages: these usually turn the source code into a binary file
// (an executable) that can be run later without the source code.
// In JavaScript, we normally send the source code itself, not a binary.
// That’s why some people say JS is not really a compiled language.

// But the real difference between interpreted and compiled languages
// is how they handle errors.
// In compiled languages, errors (like broken syntax) are found
// during the parsing/compilation step, before the program starts running.
// This means the program won’t run at all if there are syntax errors.

// After parsing, many languages turn the program into an Abstract Syntax Tree (AST).
// From this AST, the computer generates executable code.

// JavaScript is also parsed before it runs.
// The JS specification requires "early errors" to be reported first,
// for example if you have duplicate parameter names.
// This checking happens before any execution starts.

// So, is JS compiled?
// The parsed code is turned into an optimized binary form (bytecode).
// Then this bytecode is executed by the JavaScript Virtual Machine (VM).

// There’s more: modern JS engines use JIT (Just-In-Time) compilation.
// They take the parsed code, optimize it, and make it faster while running.
// Depending on how you look at it, you could call this either
// "compilation" or "interpretation".

// In practice, here’s what happens to JS code:
// 1. A developer writes JS code.
// 2. Tools like Babel/Webpack may transform it.
// 3. The JS engine parses it into an AST.
// 4. The AST is turned into bytecode (binary intermediate representation).
// 5. The JIT compiler optimizes it even more.
// 6. Finally, the JavaScript VM executes it.

//-------------------------------------------------------------------------------
// Web Assembly (WASM):

// ASM.js: This is a special subset of JavaScript. 
// The code looks a bit unusual compared to normal JS, 
// but it helps the JS engine understand data types better 
// and run programs faster.

// After ASM.js, engineers (first from Mozilla) created Web Assembly (WASM).
// Like ASM.js, the goal of WASM was to let other languages (like C) 
// be converted into a form that can run inside the JS engine.

// WASM looks more like Assembly language (that’s why it’s called Web Assembly).
// With this format, the JS engine doesn’t need to do all the usual work 
// like parsing and compiling before running the program.

// Programs built for WASM are compiled ahead of time (AOT).
// This means what gets delivered is already a binary file 
// that the JS engine can run very quickly with little extra work.


//-------------------------------------------------------------------------------
// Strict Mode in JavaScript

// In 2009 (ES5), JavaScript introduced "strict mode".
// It is optional, but it helps us write better and safer code.
// Even after 10+ years, many developers don’t use it by default 
// because of old coding habits and legacy code.

// Why use strict mode?
// - It’s not really about restrictions.
// - It’s more like a guide that helps us write cleaner code.
// - It gives the JS engine a better chance to optimize performance.
// - It prevents common mistakes and makes teamwork easier.

// Strict mode catches problems early.
// Example: If you write two function parameters with the same name,
// normal JS will allow it, but strict mode will throw an error before running the code.

// Some rules are checked at runtime too.
// Example: In strict mode, "this" is undefined by default (instead of pointing to the global object).

// The best way to think about strict mode is like a linter (a helper tool).
// If strict mode feels like it’s blocking you, that means your code 
// may not be written in the best way and you should rethink your approach.

// How to enable strict mode:
// Put "use strict"; at the top of a file (nothing before it except comments/whitespace):

// ✅ Example:
"use strict";
// Now the rest of the file runs in strict mode

//-------------------------------
// Strict Mode Warnings and Function-Level Usage

// Be careful: if there is even a single ";" before the "use strict" line, 
// strict mode will NOT turn on. 
// JS allows this syntax, so no error is thrown, but strict mode won't work.

// You can also enable strict mode for a single function instead of the whole file:
function someOperations() {
    // Comments or spaces before "use strict" are okay
    "use strict";
    // All code in this function now runs in strict mode
}

// Note:
// If the whole file has strict mode enabled, 
// you cannot use function-level "use strict" inside it. 
// You must choose one method.

// Function-level strict mode is only useful when converting old code slowly, 
// changing parts step by step. 
// Otherwise, it’s better to enable strict mode for the entire file.

// Will strict mode ever become the default in JS?
// Almost certainly not, because of backwards compatibility. 
// If engines assumed strict mode by default, old code might break.

// But in practice, most JS is already in strict mode:
// 1. Transpiled code (like from Babel) automatically uses strict mode.
// 2. ES6 modules also automatically use strict mode.

// So, even if strict mode is not technically default, 
// most modern JS code already follows strict mode rules.


//summary chepter one:
// What is JavaScript (JS)?

// JS follows the ECMAScript standard (currently ES2019) 
// and is managed by the TC39 committee under ECMA. 
// It runs in browsers and other environments like Node.js.

// JS is a multi-paradigm language. 
// This means you can mix different programming styles, 
// like procedural (step-by-step), object-oriented (using classes/objects), 
// and functional (using pure functions).

// JS is also a compiled language. 
// This means the JS engine checks and processes your code first, 
// reports errors if there are any, and then runs it.

// Now that we know what JS is, 
// we can start learning how it works in detail.
