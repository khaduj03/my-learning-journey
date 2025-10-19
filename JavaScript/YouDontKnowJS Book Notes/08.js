// this Keyword
// "this" in JavaScript is special and often confusing.

// Common Misconceptions:
//  Many developers think "this" refers to the function itself. (Wrong)
//  Or they think "this" refers to the object that owns the method. (Not always true)

// What’s Actually True?
// - When a function is defined, it remembers variables around it using closure (that’s about scope).
// - But "this" is NOT part of scope.
// - Instead, "this" is determined by HOW a function is called, not where it was defined.

// So:
// Scope → controls variable lookups (via closure).
// this → depends on the function’s call site (the way it’s invoked).

// Scope vs Execution Context (this)
// Scope is static → it never changes after the function is defined.
// Think of it like a backpack of variables the function carries with it forever.
// Example: if a function is defined inside another, it always has access to the parent’s variables, no matter where it’s called later.

// Execution Context (this)
// this is dynamic → it depends on HOW the function is called.
// It’s not decided when you write the function, but every time the function runs.
// Think of it like the function asking: “Who called me this time?”
// Different callers give different "this" values.

// Example: scope with closure
function classroom(teacher) {
  return function study() {
    console.log("Teacher is: " + teacher);
  };
}

var assignment = classroom("Kyle");
assignment();
// Always prints "Teacher is: Kyle"
// because "teacher" comes from scope (closure).

// Example: this
function whoIsThis(me) {
  return function checkThis() {
    console.log(`${me} and my friend ${this.friend}`);
  };
}

var person = whoIsThis("Khadija");

// 1. Using globalThis
globalThis.friend = "Ali";
person();
// "Khadija and my friend Ali"
// because this === globalThis in non-strict mode.

// 2. Using call()
var obj = { friend: "Sara" };
person.call(obj);
// "Khadija and my friend Sara"

// 3. Using call/apply with another object
person.call({ friend: "Mona" });
person.apply({ friend: "Mona" });
// Both print: "Khadija and my friend Mona"

// 4. Using bind()
var boundPerson = person.bind({ friend: "Mona" });
boundPerson();
// "Khadija and my friend Mona"

// 5. Using "new"
var NewPerson = new person();
// "Khadija and my friend undefined"
// Because when a function is called with "new",
// "this" refers to the newly created object (not obj/global).
NewPerson.friend = "Fatma";
console.log(NewPerson.friend); // "Fatma"

// ------------------------------------------------------------
// Prototype and this with delegation

// Before ES6 classes, objects could share methods using prototype delegation
var homework = {
  study() {
    console.log(`Please study ${this.topic}`);
  },
};

// Create new objects linked to homework
var jsHomework = Object.create(homework);
jsHomework.topic = "JS";
jsHomework.study(); // Please study JS

var mathHomework = Object.create(homework);
mathHomework.topic = "Math";
mathHomework.study(); // Please study Math

// Explanation:
// - jsHomework and mathHomework delegate the study() method to homework via prototype chain
// - "this" is dynamic and points to the caller object (jsHomework or mathHomework)
// - This allows one shared method to work with multiple objects having different data

// Key takeaway:
// - A function closed over scope can only access that scope
// - A function using dynamic this can flexibly operate with different objects
//----------------------------------------------------------------------------
// Scope → Tells where you can use a variable.
// Lexical Scope → Scope is decided when you write the code, not when it runs.
// Hoisting → JS moves variable names to the top before running.
// Function Scope → var works only inside a function.
// Block Scope → let and const work inside { } blocks.
// TDZ (Temporal Dead Zone) → You can’t use let or const before declaring them.
// Closure → A function remembers variables from its outer scope, even after that scope is closed.
// Why Closure is Important → Helps make private and organized code (modules).


// Pillar 2: Prototypes
// In JavaScript, you can make objects directly — you don’t always need classes.
// Prototype is a system that lets objects connect and share behavior.
// Two objects can work together through something called behavior delegation.
// Delegation means one object uses another object’s functions.
// This is different from class inheritance, where one class copies from another.
// Prototypes and delegation are natural and powerful in JavaScript.

// Pillar 3: Types and Coercion
// Every value in JS has a type (like number, string, boolean, etc.).
// Coercion means JS can change one type to another automatically.
// Example: "5" * 2 → 10 (string turned into number).
// Many developers use TypeScript or Flow to control types.
// But you should still understand how JS types really work.
// Without knowing types and coercion, your JS foundation is weak.


// Read books in this order:
// Book 1: Get Started → learn JS basics.
// Book 2: Scope & Closures → learn scope and closure.
// Book 3: Objects & Classes → learn this, prototype, class.
// Book 4: Types & Grammar → learn data types and rules.
// Book 5: Sync & Async → learn time control (now & later).
// Book 6: ES.Next & Beyond → learn new future JS features.
//  Books 2–4 can be read in any order.
//  Don’t skip any book — each is important.
//  Book 5 can be read later if it feels hard.
//  Practice a lot! The best way to learn code is writing it yourself.


// Primitive vs Object:
// Primitive → copied by value.
// Object → copied by reference (share same object).

// Function forms:
// Anonymous, Named, Arrow, IIFE, Async, Generator.
// Name functions for clarity; avoid too many anonymous functions.


// Conditional coercion:
// JS converts values to Boolean in if, while, ? statements.
// Learn coercion to avoid mistakes.

// Prototypal classes:
// Old style: use function + prototype.
// Modern style: use ES6 class.
// Both create linked objects, but class is cleaner.
