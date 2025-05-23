// ---------------- Property Descriptor -----------------------------------

// Create an object
let person = { name: "mohammad" };
console.log(person);

// Get the prototype of person (which is Object.prototype)
let objectBase = Object.getPrototypeOf(person);

// Get the property descriptor of "toString" method on Object prototype
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

// Define property 'name' on person as non-writable and non-enumerable
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.keys(person)); // 'name' will NOT appear because enumerable is false

person.name = "ali"; // won't change because writable is false
console.log(person);

// ---------------- Prototype vs Instance Members --------------------------

// Constructor function Circle
function Circle(radius) {
  this.radius = radius;

  // Instance method: created per object instance
  this.move = function () {
    this.draw();
    console.log("move");
  };
}

// Prototype method: shared between all instances
Circle.prototype.draw = function () {
  console.log("draw");
};

Circle.prototype.toString = function () {
  return "circle with radius: " + this.radius;
};

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1.toString()); // "circle with radius: 1"
console.log(c2.toString()); // "circle with radius: 2"

// ---------------- Prototype and Instance Members ---------------------------

console.log(Object.keys(c1)); // only instance members: ["radius", "move"]

// For...in loops over all enumerable properties, including prototype
for (let key in c1) {
  console.log(key); // logs "radius", "move", "draw", "toString"
}

// ---------------- Prototypal Inheritance Example ---------------------------

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle2(radius, color) {
  Shape.call(this, color); // call parent constructor
  this.radius = radius;
}

// Inherit Shape's prototype
Circle2.prototype = Object.create(Shape.prototype);

// Add own method
Circle2.prototype.draw = function () {
  console.log("draw");
};

// Override duplicate method
Circle2.prototype.duplicate = function () {
  console.log("circle duplicate");
};

const s = new Shape("blue");
const c = new Circle2(5, "red");

// ---------------- Reset Constructor Property -------------------------------

function Shape2() {}
Shape2.prototype.draw = function () {
  console.log("shape draw");
};

function Circle3(radius) {
  this.radius = radius;
}

Circle3.prototype = Object.create(Shape2.prototype);

// Fix constructor reference
Circle3.prototype.constructor = Circle3;

const c3 = new Circle3(1);

// ---------------- Inheritance Utility Function -----------------------------

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// Usage:
function Shape3(color) {
  this.color = color;
}
Shape3.prototype.duplicate = function () {
  console.log("duplicate is run");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape3);

Square.prototype.draw = function () {
  console.log("draw square");
};

const shapeInstance = new Shape3("green");
const squareInstance = new Square(10);

// ---------------- Method Overriding and Calling Parent Method ----------------

function Circle4(radius) {
  this.radius = radius;
}

function Shape4() {}

function extend2(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

Shape4.prototype.duplicate = function () {
  console.log("this is from shape");
};

extend2(Circle4, Shape4);

Circle4.prototype.duplicate = function () {
  Shape4.prototype.duplicate.call(this); // call parent method
  console.log("this duplicate is from circle");
};

const c4 = new Circle4(1);
c4.duplicate();

// ---------------- Polymorphism Example --------------------------------------

function Shape5() {}
Shape5.prototype.duplicate = function () {
  console.log("from shape");
};

function Circle5() {}
Circle5.prototype.duplicate = function () {
  console.log("from circle");
};

function Square5() {}
Square5.prototype.duplicate = function () {
  console.log("from square");
};

function extend3(child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

extend3(Circle5, Shape5);
extend3(Square5, Shape5);

const shapes = [new Circle5(), new Square5()];

for (let shape of shapes) {
  shape.duplicate(); // Calls the correct method based on actual object type
}
