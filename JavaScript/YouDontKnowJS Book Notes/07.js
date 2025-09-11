// Chapter 3: Digging to the Roots of JS
// If you've read Chapters 1 and 2 and taken time to think about them,
// you should be getting a better feel for JS. If you skipped Chapter 2,
// go back and spend more time there before continuing.

// Chapter 2 was a high-level survey (syntax, patterns, behaviors).
// Chapter 3 goes deeper: it looks at the low-level root characteristics
// of JavaScript that underlie almost every line of code you write.

// This chapter is harder and more detailed than typical introductory material.
// The goal is to help you understand *how* JS works at its core and *why*
// it behaves the way it does. Expect to have "Why?" questions answered here.

// Important notes:
// - This chapter is not the final, complete explanation of everything JS.
//   The rest of the book series covers many details more fully.
// - Don't rush. Read slowly, try examples, and think about each concept.
// - It's normal to finish this chapter with more questions. That's expected.
//   The book series exists so you can continue exploring those questions.

//----------------------------------------------------------------------------------
// Iteration in JS
// Programs often need to process data step by step. How we iterate over data
// affects readability and organization of our code.

// 1. Iterator Pattern
// The iterator pattern is a standard way to consume data piece by piece
// instead of all at once. It’s useful when dealing with large data sets,
// like database query results with many rows.

// Example idea:
// - A data source (like query results) has many items.
// - An iterator keeps a reference to that data and provides a next() method.
// - Calling next() gives you the next item in the data set.
// - When all items are consumed, a special value or flag signals completion.

// 2. Why it's useful
// - Standardized iteration makes code cleaner and easier to understand.
// - Without a standard, each data source might require its own custom loop.

// 3. ES6 Iterators
// ES6 introduced a standard protocol for iterators in JS:
// - The iterator object must have a next() method.
// - next() returns an object with:
//   - value: the current item
//   - done: boolean, false until the iteration is finished

// Example:
let arr3 = [1, 2, 3];
let iterator = arr3[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

//whenw e use for of the bihind show happen same events and use from [Symbol.iterator]
for (let item of arr) {
  console.log(item);
}
//and string are also itralbe
let str = "Hi!";
for (let ch of str) {
  console.log(ch);
}

//the map and set are also itrale:
let map=new Map([
    ["name","khadija"],
    ["age","20"]
])

for(let[key,value]of map){
    console.log(key,value)
}

//even we can create an object be itrable:
let rage={
    start:1,
    end:5,
    [Symbol.iterator](){
       let current=this.start;
       let end=this.end
       return{
           next(){
               if(current<=end){
                   return{value:current++,done:false}
               }else{
                   return {done:true}
                }
            }
        }
    }
} 

for (let name of lange){
    console.log(name)
}
//Generator Function:
function* rangeGenerator(start,end) {
    for (let i=start;i<=end;i++){
        yield i;
    }
}

for (let name of rangeGenerator(1,5)){
    console.log(name)
}
//----------------------------------------------------------------------
// Consuming Iterators in JS
// With ES6 iterators, you can get values one by one using next() and checking done,
// but that’s manual and less readable. ES6 provides easier ways to consume iterators.

// 1. for..of loop
// The for..of loop automatically consumes an iterator until done is true.
let it = [10, 20, 30][Symbol.iterator]();
for (let val of it) {
  console.log(`Iterator value: ${val}`);
}
// Output:
// Iterator value: 10
// Iterator value: 20
// Iterator value: 30

// 2. Spread operator (...)
// The spread operator can also consume an iterator in two main ways:

// a) Spread into an array
let arr = [...[1, 2, 3][Symbol.iterator]()];
console.log(arr); // [1, 2, 3]

// b) Spread into a function call
function sum(a, b, c) {
  return a + b + c;
}
let nums = [1, 2, 3][Symbol.iterator]();
console.log(sum(...nums)); // 6

// Notes:
// - The spread operator internally consumes the iterator, just like for..of.
// - It works both to gather values into an array or to provide arguments to a function.
//--------------------------------------------------------------------------------------
// Iterables in JS
// An iterable is a value that can be looped over using the iterator protocol.
// Each time you iterate, a new iterator is created, so you can iterate multiple times.

// 1. Built-in iterables
// Arrays, strings, maps, sets, and some other built-in structures are iterables.

// a) Arrays
let ar2 = [10, 20, 30];
for (let val of arr2) {
  console.log(`Array value: ${val}`);
}
// Output: 10, 20, 30

// Shallow copy of an array using spread
let arrCopy = [...arr2];
console.log(arrCopy); // [10, 20, 30]

// b) Strings
let greeting = "Hello world!";
let chars = [...greeting];
console.log(chars);
// ["H","e","l","l","o"," ","w","o","r","l","d","!"]

// c) Maps
// A Map associates keys to values. Default iteration returns [key, value] tuples.
let buttonNames = new Map();
buttonNames.set(btn1, "Button 1");
buttonNames.set(btn2, "Button 2");

for (let [btn, btnName] of buttonNames) {
  btn.addEventListener("click", function() {
    console.log(`Clicked ${btnName}`);
  });
}

// Using .values() to iterate only values
for (let btnName of buttonNames.values()) {
  console.log(btnName);
}
// Output: Button 1, Button 2

// Using .entries() with arrays to get index and value
let numbers = [10, 20, 30];
for (let [idx, val] of numbers.entries()) {
  console.log(`[${idx}]: ${val}`);
}
// Output: [0]: 10, [1]: 20, [2]: 30

// 2. Key points
// - Built-in iterables usually provide three iteration forms:
//   keys() → keys-only, values() → values-only, entries() → [key, value]
// - You can make your own data structures iterable by implementing the iterator protocol.
//   This allows your custom data to work with for..of loops and the spread (...) operator.
//-----------------------------------------------------------------------------------------

// Iterators vs Iterables
// Iterables are values that can be looped over (arrays, strings, maps, sets, etc.).
// Iterators are objects that follow the iteration protocol and produce values one at a time.
// Key point: An iterator is itself iterable. Calling an iterator on an existing iterator just returns the same iterator.

//---------------------------------------------------------------------------------------

// Closures in JS
// A closure happens when a function "remembers" variables from its outer scope, even if executed elsewhere.

// Key points:
// 1. Only functions create closures, not objects.
// 2. Closures keep a reference to the variable, not just its value.
// 3. Useful for preserving state across multiple function calls or asynchronous code.

// Example 1: Simple closure
function greeting(msg) {
    return function who(name) {
        console.log(`${msg}, ${name}!`);
    };
}

var hello = greeting("Hello");
var howdy = greeting("Howdy");

hello("Kyle");   // Hello, Kyle!
hello("Sarah");  // Hello, Sarah!
howdy("Grant");  // Howdy, Grant!
// Each inner function remembers its own 'msg' from outer scope.

// Example 2: Counter closure
function counter(step = 1) {
    var count = 0;
    return function increaseCount() {
        count = count + step;
        return count;
    };
}

var incBy1 = counter(1);
var incBy3 = counter(3);

incBy1(); // 1
incBy1(); // 2
incBy3(); // 3
incBy3(); // 6
incBy3(); // 9
// 'count' persists for each function because of closure.

// Example 3: Closures in async callbacks
function getSomeData(url) {
    ajax(url, function onResponse(resp) {
        console.log(`Response (from ${url}): ${resp}`);
    });
}
getSomeData("https://some.url");
// The inner function onResponse remembers 'url' even after getSomeData finishes.

// Example 4: Closures in event handlers
for (let [idx, btn] of buttons.entries()) {
    btn.addEventListener("click", function onClick() {
        console.log(`Clicked on button (${idx})!`);
    });
}
// Each onClick function closes over its own 'idx' and 'btn' variables.
