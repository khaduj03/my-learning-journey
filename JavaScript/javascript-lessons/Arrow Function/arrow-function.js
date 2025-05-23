// -- Arrow Functions ------------------------------------------------------------------

// Example: find and findIndex with arrow functions

const numbers = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const found = numbers.find((number) => number.name === "a");
console.log(found); // { id: 1, name: "a" }

const foundIndex = numbers.findIndex((num) => num.id === 1);
console.log(foundIndex); // 0

// ---------------------------------------------------
// Example with Regular Function and event listeners:

// let hello = function() {
//   document.getElementById("demo").innerHTML += this;
// };
// window.addEventListener("load", hello);  // "this" is window
// document.getElementById("btn").addEventListener("click", hello);  // "this" is the button

// Here, "this" changes depending on the event context: window on load, button on click

// Example with Arrow Function and event listeners:

// let hello = () => {
//   document.getElementById("demo").innerHTML += this;
// };
// window.addEventListener("load", hello);  // "this" is always window
// document.getElementById("btn").addEventListener("click", hello);  // still window

// Arrow functions do NOT have their own "this", so it stays the same as the surrounding scope

// Using Arrow Functions Inside Objects (Advanced example)

const person = {
  name: "Alice",
  age: 25,
  sayHello: function () {
    console.log("Hello, I'm " + this.name); // "this" refers to person object
  },
  growOlder: function () {
    setTimeout(function () {
      this.age++;
      console.log(this.age); // "this" here refers to global object (window), NOT person
    }, 1000);
  },
};

person.sayHello(); // Output: "Hello, I'm Alice"
person.growOlder(); // Output: NaN (because "this.age" is undefined on global object)

// >> Problem: inside setTimeout's regular function, "this" is NOT the person object

// >>> Solution: Use arrow function to preserve "this"

const personFixed = {
  name: "Alice",
  age: 25,
  sayHello: function () {
    console.log("Hello, I'm " + this.name); // "this" is person
  },
  growOlder: function () {
    setTimeout(() => {
      this.age++; // "this" now refers to person object
      console.log(this.age);
    }, 1000);
  },
};

personFixed.sayHello(); // Output: "Hello, I'm Alice"
personFixed.growOlder(); // Output: 26 (increments every second)

// Explanation:
// - Arrow function does not have its own "this" and takes "this" from the surrounding scope (personFixed).

// Creating objects with arrow functions (returning an object literal):

const createPerson = (name, age) => ({ name: name, age: age });

let personObj = createPerson("Bob", 30);
console.log(personObj); // { name: 'Bob', age: 30 }

// Using array methods with arrow functions

const products = [
  { name: "Laptop", price: 900 },
  { name: "Phone", price: 600 },
  { name: "Keyboard", price: 50 },
  { name: "Mouse", price: 20 },
];

// Filter products cheaper than $100, map prices, sum prices with reduce

let totalPrice = products
  .filter((product) => product.price < 100) // products with price < 100
  .map((product) => product.price) // get prices only
  .reduce((total, price) => total + price, 0); // sum prices

console.log(totalPrice); // 70

// Using arrow function in class methods and setInterval

class Car {
  constructor(model) {
    this.model = model;
    this.speed = 0;
  }

  // Using arrow function inside setInterval to preserve "this"
  accelerate() {
    setInterval(() => {
      this.speed += 10; // "this" refers to the Car instance
      console.log(this.model + " is going at " + this.speed + " km/h");
    }, 1000);
  }
}

const myCar = new Car("Tesla");
myCar.accelerate();
// Output every second: Tesla is going at 10 km/h, 20 km/h, 30 km/h, ...
