// const car = {
//     name: "Fiat",   // Car name
//     model: "500",   // Car model
//     color: "white", // Car color
//     start: function() { // Method to start the car
//       console.log("Car started!");
//     },
//     stop: function() { // Method to stop the car
//       console.log("Car stopped!");
//     }
//   };

// car.start()
// car.stop()
// console.log(car.name)

// #### 2.2 Bracket Notation ------------------------------
// console.log(car["model"]); // 500

// ### 3. Adding or changing properties and methods ------------------------------
// car.color = "red"; // Add new property or update existing one
// car.year = 2021;   // Add new property
// car.honk = function() { // Add new method
//     console.log("Beep beep!");
//   };

//   car.honk(); // Beep beep!
// Delete properties ------------------------------------
// delete car.color;
// console.log(car.color); // undefined

//---------------------------------------------------------------
// ### Objects and 'this' keyword
// 'this' refers to the current object itself inside methods.
// For example:
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // John Doe
//-----------------------------------------------------------
// Nested Objects -----------------------
const person2 = {
  name: "Ali",
  age: 30,
  address: {
    street: "Street 1",
    city: "Tehran",
  },
};

console.log(person2.address.city); // Tehran
///// Using 'this' in objects ----------------------------------------
const person3 = {
  firstName: "Sara",
  lastName: "Ahmadi",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person3.fullName()); // Sara Ahmadi

// Constructor Functions ------------------------------
// In JavaScript, constructor functions are templates to create multiple objects with similar properties and methods.
function Car(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
}

const myCar1 = new Car("Toyota", "Corolla", 2020);
const myCar2 = new Car("Honda", "Civic", 2019);

console.log(myCar1.name); // Toyota
console.log(myCar2.name); // Honda

function Pen(color, model, year) {
  this.color = color;
  this.model = model;
  this.year = 2222;
}

const newPen = new Pen("red", "big");
console.log(newPen.year); // 2222

// Object.assign() ---------------------------------------------------------------
// Used to copy properties from one object to another
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const mergedObject = Object.assign(target, source);

console.log(mergedObject); // {a: 1, b: 4, c: 5}
// -----------------------------------------------------
const defaultSettings = { theme: "light", notifications: true };
const userSettings = { theme: "dark" };

const finalSettings = Object.assign({}, defaultSettings, userSettings);
console.log(finalSettings); // {theme: 'dark', notifications: true}

const set = { name: "khadija", lastname: true };
const setAgain = { name: "atifa" };
const final = Object.assign(set, setAgain);
console.log(final);
//----------------------------------------------------
// Copying objects:
const original = { x: 10, y: 20 };
const copy = Object.assign({}, original);

copy.x = 50;
// console.log(original); // {x: 10, y: 20}  (original object unchanged)
console.log(copy); // {x: 50, y: 20}

//----------------------------------
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = Object.assign({}, obj1);

obj2.b.c = 10;
console.log(obj1.b.c); // 10  (both objects refer to same nested object)

//-----------------------------------------getter example
const toyBox = {
  toy: "Car",
  get checkToy() {
    return this.toy;
  },
};

// Just accessing the toy inside the box
console.log(toyBox.checkToy); // Output: "Car"

//----------------------------setter example
const toyBox2 = {
  toy: "",
  set changeToy(newToy) {
    this.toy = newToy;
  },
};

// Adding a new toy to the box
toyBox2.changeToy = "Doll";

// Now the box has a doll
console.log(toyBox2.toy); // Output: "Doll"

// Getter that always returns toy name in uppercase
const toyBox3 = {
  toy: "ball",
  get checkToy() {
    return this.toy.toUpperCase(); // Always uppercase
  },
};

console.log(toyBox3.checkToy); // Output: "BALL"

// Getter ensures toy name is always shown in uppercase no matter how it's stored.

// Toy box counter using getters and setters
const toyCounter = {
  count: 0,

  // Getter to get the current count
  get checkCount() {
    return this.count;
  },

  // Setter to add toys (increase count)
  set addToys(number) {
    this.count += number;
  },

  // Setter to remove toys (decrease count)
  set removeToys(number) {
    this.count -= number;
  },
};

toyCounter.addToys = 5; // Add 5 toys
console.log(toyCounter.checkCount); // Output: 5

toyCounter.removeToys = 2; // Remove 2 toys
console.log(toyCounter.checkCount); // Output: 3

// Advanced way to add getters and setters using Object.defineProperty()
const toyBox4 = { count: 0 };

Object.defineProperty(toyBox4, "reset", {
  get: function () {
    this.count = 0;
  },
});

Object.defineProperty(toyBox4, "add", {
  set: function (value) {
    this.count += value;
  },
});

Object.defineProperty(toyBox4, "subtract", {
  set: function (value) {
    this.count -= value;
  },
});

// Usage:
toyBox4.reset; // Reset count to 0
toyBox4.add = 10; // Add 10 toys
toyBox4.subtract = 3; // Remove 3 toys

console.log(toyBox4.count); // Output: 7
