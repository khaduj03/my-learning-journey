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
// Pillar 1: Scope and Closure
// 1. Scope :Scope decides where a variable can be accessed.
// Think of scope like buckets, and variables as marbles inside the buckets. You can only see the marbles in your bucket or in outer buckets, not in inner ones.
// JavaScript uses lexical scope, meaning where you write a function decides what variables it can access, not where you call it.

// 2. Hoisting and var/let/const
// Variables declared with var are hoisted to the top of their function and function-scoped.
// Variables declared with let and const are block-scoped, and cannot be used before they are defined (this is called Temporal Dead Zone or TDZ).

// 3. Closure : A closure happens when a function remembers variables from its outer scope, even if it runs somewhere else.
// Closures let functions keep private variables, preserve data across calls, and are used a lot in modules and callbacks.

// Example:
function outer() {
  let msg = "Hello";
  return function inner() {
    console.log(msg);
  };
}

const sayHello = outer();
sayHello(); // Prints: "Hello"


// Even after outer() finishes, inner() remembers msg.

// Key Points
// Scope = decides which variables are visible.
// Closure = functions can remember outer variables.