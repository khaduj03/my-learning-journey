// The book is not only for beginners; it is for all programmers who want to go deeper into JS.
// Reading this book does not mean you don't know JS; it helps you become better at JS than before.
// This book is for programmers of all levels.

// The author suggests reading this book slowly and carefully.
// It is not a book to rush through quickly.
// Read part by part, and review previous sections again.
// Be patient, practice the examples, and try to understand the concepts deeply.

///-------------------------------
// Chapter 1: What Is JavaScript?
// None of us fully know JS, but we can learn more about it.

// JS is built on three main pillars:
// 1- Scope / Closures
// 2- Objects / Prototypes
// 3- Types / Coercion

// Note: When learning JS, focus on the fundamental concepts, not just making the code work.

///-------------------------------
// What’s With That Name?
// Many people think JavaScript is related to Java.
// The name JavaScript was mainly a marketing choice.
// Initially, the language was called Mocha, then LiveScript, and finally JavaScript to attract Java programmers.
// Its syntax is similar to Java, C, and C++ (e.g., curly braces and semicolons), but it is not the same.
// The main owner of JavaScript is Oracle.
// According to TC39, the official name is ECMAScript, and versions are named by year, e.g., ES5, ES6, ES2020.
// TC39 manages the official specification, meets regularly, and submits changes to ECMA.

///-------------------------------
// The Web Rules Everything About JS
// The web is the most important environment for JS.
// JS runs on browsers, servers, robots, even smart devices, but browsers are the main environment.
// TC39 often adjusts JS based on web usage and compatibility needs.

///-------------------------------
// Is this code a JS program? alert("Hello, JS!");
// Functions like alert(..), console.log(..), fetch(..), getCurrentLocation(..), getUserMedia(..)
// are not part of the JS language itself but are provided by browser APIs.
// They follow JS syntax rules but are "guests," not core JS.

///-------------------------------
// It’s Not Always JS
// Developer tools (console/REPL) seem like real JS environments but are designed for developer convenience.
// They may not strictly follow JS standards and can have quirks.
// Treat them as JS-friendly tools, not perfect JS interpreters.

///-------------------------------
// Many Faces: Paradigms
// A paradigm is a way of thinking about and structuring code.
// Common programming paradigms:
// Procedural Programming: code flows line by line, often using functions/procedures.
// Object-Oriented Programming (OOP): code is structured around objects and classes.
// Functional Programming (FP): code is organized into functions and avoids mutable state.

// Paradigms are not right or wrong; they are just different ways to think about and structure code.
// Some languages focus on a single paradigm (C = procedural, Java/C++ = OOP, Haskell = FP).
// JS is a multi-paradigm language—you can mix procedural, OOP, and FP styles freely.

///-------------------------------
// Backwards & Forwards Compatibility

// Backwards Compatibility: Code written in older versions of JS should work in newer versions.
// Forwards Compatibility: Code written in newer versions of JS should work in older versions.
// JS guarantees backwards compatibility but not forwards compatibility.

// JavaScript is not always forward-compatible. 
// For example, using ES2019 features on a browser from 2016 might cause problems.
// If it's a new syntax feature, you'll likely get a syntax error.
// If it's a new API feature, it might work until the program encounters the unsupported API.
// Should we always stick to old versions? Of course not! 
// We can use transpiling with popular tools like Babel.

// -----------------------------
// Filling the Gaps:
// JavaScript is always evolving. New features (syntax or APIs) are added every year,
// but old browsers or JS engines don’t always know these new features.

// Example: Using a feature added in ES2019 (Promise.prototype.finally)
fetchData()
  .then(renderData)
  .catch(showError)
  .finally(hideSpinner); // If this runs in a browser from 2016, the program will break

// What is the solution?
// We can use transpiling (e.g., Babel) to convert modern JS into older, compatible JS.

// Example:

// Modern JS:
let x = 3;
if (condition) {
  let y = 4;
}

// Transpiled to older JS by Babel:
var x$0 = 3;
if (condition) {
  var y$1 = 4;
}


// -----------------------------
// Polyfilling:
// A polyfill is like giving the browser or JS engine a “fake” definition of a missing method
// so it behaves as if it existed natively.

// Example: Polyfill for Promise.prototype.finally
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (fn) {
    return this.then(
      function (v) {
        return Promise.resolve(fn()).then(() => v);
      },
      function (e) {
        return Promise.resolve(fn()).then(() => { throw e; });
      }
    );
  };
}



//////Go    02.js    file :)