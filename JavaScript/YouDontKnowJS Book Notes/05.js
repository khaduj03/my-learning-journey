// Functions in JS
// A function is like a procedure: a group of instructions you can run one or more times.
// Functions can take inputs (parameters) and return outputs (values).

// 1. Function Declaration
function awesomeFunction(coolThings) {
  // do something
  return amazingStuff;
}
// This is a function declaration.
// The name 'awesomeFunction' is connected to the function when the code is compiled (before running).

// 2. Function Expression
var awesomeFunction = function (coolThings) {
  // do something
  return amazingStuff;
};
// This is a function expression.
// The function is assigned to 'awesomeFunction' only when the code reaches this line at runtime.

// Important: In JS, functions are values!
// You can assign them to variables, pass them around, and store them in objects.

// 3. Functions with parameters
function greeting(myName) {
  console.log(`Hello, ${myName}!`);
}
greeting("Kyle"); // Hello, Kyle!
// 'myName' is a parameter, a local variable inside the function.

// 4. Functions returning values
function greeting(myName) {
  return `Hello, ${myName}!`;
}
var msg = greeting("Kyle");
console.log(msg); // Hello, Kyle!
// You can return only one value, but use an object or array to return multiple values.

// 5. Functions as object properties
var whatToSay = {
  greeting() {
    console.log("Hello!");
  },
  question() {
    console.log("What's your name?");
  },
  answer() {
    console.log("My name is Kyle.");
  },
};
whatToSay.greeting(); // Hello!
// Functions can be stored in objects and called through their properties.

//---------------------------------------------------------------------------------------
// Comparisons in JS
// When we write programs, we often need to compare values to make decisions.
// JS gives us several ways to do that.

// 1. Equality comparisons
// The most common question is: "Is X the same as Y?"

// JS has nuances between exact equality and equivalence.
// Sometimes we want exact matching, sometimes just "close enough".

// 2. Strict equality ===
// Triple-equals (===) checks if values are exactly the same in type and value.

3 === 3.0;          // true, numbers are the same
"yes" === "yes";    // true, same string
null === null;      // true
false === false;    // true

42 === "42";        // false, number vs string
"hello" === "Hello"; // false, different case
true === 1;         // false, boolean vs number
0 === null;         // false
"" === null;        // false
null === undefined; // false

// Remember: === is strict. Use it when you need exact matches.
//-------------------------------------------------------------------------------------------
// Strict Equality === in JS
// The === operator checks both the value AND the type of the compared values.
// Example:
42 === "42";  // false because one is number, one is string

// Important nuance: === does NOT convert types (no coercion).
// But it has some "lies" for special cases:

NaN === NaN;  // false, NaN is not equal to itself!
0 === -0;     // true, -0 is treated as equal to 0

// How to handle these cases safely:
Number.isNaN(NaN); // true, use this for NaN checks
Object.is(0, -0);  // false, use Object.is to compare -0 correctly
// Object.is can be thought of as a "really strict" equality check

// Object comparisons (non-primitives) are different
//[1,2,3] === [1,2,3];          // false
//{a:42} === {a:42};            // false
//(x => x*2) === (x => x*2);    // false

// Why? JS compares objects by reference, not by content (structural equality)
var x = [1,2,3];
var y = x;                     // y points to the same array as x
y === x;                       // true, same reference
//y === [1,2,3];                 // false, different reference
//x === [1,2,3];                 // false, different reference

// Key point: JS does NOT compare object contents automatically.
// You must implement your own checks if you want "structural equality".
// Structural equality is tricky for objects like functions, closures, etc.
// JS only compares identity (are they the same object in memory?).

//--------------------------------------------------------------------------
//Coercive Comparisons:
//Coercion means changing a value from one type to another (like string → number).

//=== vs ==:
//=== (strict equality): compares values without coercion. Types must match.
42 === "42"; // false

//== (coercive equality): compares values with coercion. If types are different, JavaScript first converts one side.
42 == "42"; // true ("42" → 42)
1 == true;  // true (true → 1)


//How == works:
//- If types are the same → works exactly like ===.
//- If types are different → converts them, then compares.
//Examples:
0 == false;   // true
"" == 0;      // true
null == undefined; // true (special case)


//Relational operators (<, >, <=, >=)
//If both sides are numbers → compared as numbers.
//If one side is a string → string is usually converted to a number.
//If both sides are strings → compared alphabetically (dictionary order).
"10" < 9;   // false ("10" → 10)
"10" < "9"; // true (alphabetical: "1" comes before "9")



//Why people say == is dangerous:
//Some results look strange::
[] == 0;      // true
[] == "";     // true
[1] == 1;     // true


//The best way to handle it
//Use === when you want safe, exact comparison.
//Use == only when you clearly understand how coercion works (example:checking if something is null or undefined).
if (x == null) {
  // true if x is null or undefined
}

//---------------------------------------------------------------------------------------
// Organizing Code in JavaScript
// In JS, we often need ways to organize data (values) and behavior (functions).
// Two common patterns are:
// 1. Classes
// 2. Modules
// They can be used together or separately. 
// To be good in JS, you should understand both.

//---------------------------------------------------------------------------------------
// Classes in JS
// A class is like a blueprint (plan) for making objects.
// It defines data (properties) and behaviors (methods).
// To actually use it, you must create an instance with 'new'.

class Page {
  constructor(text) {
    this.text = text; // data (property)
  }
  print() {
    console.log(this.text); // behavior (method)
  }
}

class Notebook {
  constructor() {
    this.pages = []; // data: list of Page objects
  }
  addPage(text) {
    var page = new Page(text); // create a new Page
    this.pages.push(page);     // store it in pages
  }
  print() {
    for (let page of this.pages) {
      page.print(); // call behavior of each Page
    }
  }
}

var mathNotes = new Notebook(); // create Notebook instance
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos tan ...");
mathNotes.print();

// Key points:
// - A class defines the structure but is not a real value by itself.
// - 'new' creates an instance (object) you can use.
// - Methods (like print) are called on instances, not the class itself.
// - Classes help organize data and behavior together, making code easier to maintain.

//---------------------------------------------------------------------------------------
// Class Inheritance
// Inheritance allows one class (child) to build on another class (parent).
// The child can use the parent's properties/methods AND add/override its own.

class Publication {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }
  print() {
    console.log(`
      Title: ${this.title}
      By: ${this.author}
      ${this.pubDate}
    `);
  }
}

class Book extends Publication {
  constructor(bookDetails) {
    super(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
    this.publisher = bookDetails.publisher;
    this.ISBN = bookDetails.ISBN;
  }
  print() {
    super.print(); // call parent's print
    console.log(`
      Publisher: ${this.publisher}
      ISBN: ${this.ISBN}
    `);
  }
}

class BlogPost extends Publication {
  constructor(title, author, pubDate, URL) {
    super(title, author, pubDate);
    this.URL = URL;
  }
  print() {
    super.print(); // call parent's print
    console.log(this.URL);
  }
}

var YDKJS = new Book({
  title: "You Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789"
});
YDKJS.print();

var forAgainstLet = new BlogPost(
  "For and against let",
  "Kyle Simpson",
  "October 27, 2014",
  "https://davidwalsh.name/for-and-against-let"
);
forAgainstLet.print();

// Key points about Inheritance:
// - 'extends' makes a child class from a parent class.
// - 'super' calls the parent constructor or parent method.
// - A child can override a parent method but still call it with super.
// - This is called polymorphism: methods with the same name in parent and child can co-exist.
// - Inheritance helps organize related classes and reuse code.
