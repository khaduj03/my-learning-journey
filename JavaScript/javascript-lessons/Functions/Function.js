// JavaScript Functions
// A function is a block of code designed to perform a specific task.
// It runs only when it is called (invoked).

// Example: Function as an object
// let Circle = new Function('radius', `
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// `);

// let x = new Circle(6);
// console.log(x);

// ------------------------------------------------------
// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("demo").innerHTML = toCelsius(77);

// ------------------------------------------------------
// Recursive function: Factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// ------------------------------------------------------
// Closures
// Closures allow functions to access variables from an outer function scope even after the outer function has finished executing.
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  }
}

const newFunction = outerFunction('outside');
newFunction('inside');

// ------------------------------------------------------
// Function Composition
const compose = (f, g) => (x) => f(g(x));

const multiplyBy2 = (num) => num * 2;
const add5 = (num) => num + 5;

const composedFunction = compose(multiplyBy2, add5);
console.log(composedFunction(5)); // Output: 20

// ------------------------------------------------------
// Recursive Fibonacci function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10)); // Output: 55

// ------------------------------------------------------
// Fibonacci with memoization (caching results)
function fibonacciMemo() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n <= 1) {
      return n;
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fibonacciCached = fibonacciMemo();
console.log(fibonacciCached(10)); // Output: 55

// ------------------------------------------------------
// Counter using closure
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3

// ------------------------------------------------------
// Custom map function
function map(array, func) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }
  return result;
}

let numbers = [1, 2, 3, 4];
let doubled = map(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

// ------------------------------------------------------
// Curried multiplication function
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // 24

// ------------------------------------------------------
// Compose function (regular syntax)
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function add5(x) {
  return x + 5;
}

function multiplyBy2(x) {
  return x * 2;
}

let addAndMultiply = compose(multiplyBy2, add5);
console.log(addAndMultiply(10)); // 30

// ------------------------------------------------------
// Sum function using rest parameters and reduce
function sum(...args) {
  return args.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(10, 20, 30)); // 60

// ------------------------------------------------------
// Memoization function to cache results
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slowFunction = (num) => {
  console.log('Calculating...');
  return num * 2;
};

const fastFunction = memoize(slowFunction);
console.log(fastFunction(10)); // Calculating... 20
console.log(fastFunction(10)); // 20 (from cache)

// ------------------------------------------------------
// Immediately Invoked Function Expression (IIFE)
(function () {
  let secret = "I am a secret";
  console.log(secret); // Output: I am a secret
})();

// ------------------------------------------------------
// Async/Await and Promises in JavaScript
// Promises help handle asynchronous operations more cleanly.

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 5000);
  });
}

async function getData() {
  console.log("Waiting for data...");
  let data = await fetchData(); // Waits until fetchData resolves
  console.log(data); // Output: Data fetched
}

getData();

// ------------------------------------------------------
// Explanation of async/await with example
// Promise: A promise is like a "promise" that something will be ready later.
// async: marks a function to use await inside it.
// await: waits for the promise to resolve before continuing.

function loadGame() {
  return new Promise((resolve) => {
    console.log("Loading game...");
    setTimeout(() => {
      resolve("Game loaded!");
    }, 3000); // Game loads after 3 seconds
  });
}

async function startGame() {
  console.log("Waiting for game to load...");
  let gameStatus = await loadGame(); // Waits for game to load
  console.log(gameStatus); // Output: Game loaded!
}

startGame();

// ------------------------------------------------------
// Promise example with then()
function prepareJuice() {
  return new Promise((resolve) => {
    console.log("Preparing juice...");
    setTimeout(() => {
      resolve("Juice is ready!");
    }, 2000); // Juice ready after 2 seconds
  });
}

prepareJuice().then((message) => {
  console.log(message); // Output: Juice is ready!
});

// Explanation:
// - prepareJuice: function that returns a promise to prepare juice.
// - resolve: signals that the juice is ready.
// - then: runs when the promise is fulfilled, allowing you to use the juice.

// ------------------------------------------------------
// Factory function example
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

let c1 = createCircle(1);
let c2 = createCircle(2);

console.log(c1);
console.log(c2);

// ------------------------------------------------------
// Another factory function example with area property
function otherCircle(radius) {
  return {
    radius,
    area: Math.PI * radius * radius,
  };
}

let circle = otherCircle(5);
console.log(circle);

// ------------------------------------------------------
// Constructor function example
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

let circle2 = new Circle(2);
console.log(circle2);

// ------------------------------------------------------
// Constructor function with area property (typo fixed)
function Circle3(radius) {
  this.radius = radius;
  this.area = Math.PI * radius * radius;
}

let circle4 = new Circle3(3);
console.log(circle4);

// ------------------------------------------------------
// Constructor property example
function CircleConstructor(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw from constructor");
  };
}

const another = new CircleConstructor(3);
console.log(another);
// Example: another.constructor points to CircleConstructor function

