// -------- Inheritance ---------------------------------------------------
// Terms:
// Base class, Super class, Parent class - the class being inherited from
// Derived class, Sub class, Child class - the class that inherits

// Prototype inheritance example using constructor function

function Circle(radius) {
  this.radius = radius; // property radius
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
console.log(circle);
// Output: Circle { radius: 10, draw: [Function (anonymous)] }

// -----------------------------------------------------
// Explanation:
// - Circle is a constructor function (similar to a class).
// - Objects created with 'new Circle()' inherit properties defined inside Circle.
// - Each Circle instance has its own 'draw' method (less efficient; better to put on prototype).
