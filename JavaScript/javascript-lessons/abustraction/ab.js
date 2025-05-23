function Circle(radius) {
  this.radius = radius;

  // Private property (not accessible outside)
  let defaultLocation = { x: 0, y: 0 };

  // Private method (not accessible outside)
  function computeOptimumLocation() {
    console.log("I am from computeOptimumLocation");
  }

  // Public method - can access private members inside the closure
  this.draw = function () {
    computeOptimumLocation();
    console.log("draw");
  };
}

const circle = new Circle(10);

circle.draw(); // Works fine: calls the private function and logs 'draw'

// Trying to access private members from outside will fail
console.log(circle.defaultLocation); // undefined
console.log(circle.computeOptimumLocation); // undefined
