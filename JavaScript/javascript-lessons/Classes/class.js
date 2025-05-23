// --- Basic class with constructor and methods ---

class Circle {
  constructor(radius) {
    this.radius = radius;
    // Instance method defined inside constructor (less common)
    this.move = function () {
      console.log("move from class");
    };
  }

  // Prototype method
  draw() {
    console.log("draw from class");
  }
}

const c = new Circle(2);
c.move(); // move from class
c.draw(); // draw from class

console.log(typeof Circle); // function (because classes are special functions)

// --------------------------------------------------

// --- Static method example ---

class CircleStatic {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }

  // Static method (called on class, not instance)
  static parse(str) {
    const obj = JSON.parse(str);
    return new CircleStatic(obj.radius);
  }
}

const circle = CircleStatic.parse('{"radius":1}');
console.log(circle.radius); // 1

// --------------------------------------------------

// --- 'this' behavior in classes ---

class CircleThis {
  draw() {
    console.log(this);
  }
}

const cThis = new CircleThis();

cThis.draw(); // CircleThis object

const draw = cThis.draw;
// draw(); // undefined or error because 'this' is lost in function call

const boundDraw = draw.bind(cThis);
boundDraw(); // CircleThis object

// --------------------------------------------------

// --- Private members with Symbol ---

const _radius = Symbol();
const _draw = Symbol();

class CircleSymbol {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    console.log("draw");
  }
}

const cSym = new CircleSymbol(3);
// cSym[_draw]() // works but not accessible normally

// --------------------------------------------------

// --- Private members with WeakMap ---

const _radiusMap = new WeakMap();
const _moveMap = new WeakMap();

class CircleWeakMap {
  constructor(radius) {
    _radiusMap.set(this, radius);
    _moveMap.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    _moveMap.get(this)();
    console.log("draw");
  }
}

const cWM = new CircleWeakMap(1);
cWM.draw(); // move CircleWeakMap object + draw

// --------------------------------------------------

// --- Getters and Setters for private properties ---

const _radiusGetSet = new WeakMap();

class CircleGetSet {
  constructor(radius) {
    _radiusGetSet.set(this, radius);
  }

  get radius() {
    return _radiusGetSet.get(this);
  }

  set radius(value) {
    _radiusGetSet.set(this, value);
  }
}

const cGS = new CircleGetSet(1);
console.log(cGS.radius); // 1
cGS.radius = 5;
console.log(cGS.radius); // 5

// --------------------------------------------------

// --- Class inheritance ---

class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

class CircleExtends extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }
}

const cExt = new CircleExtends("red", 4);
cExt.move(); // move
cExt.draw(); // draw

// --------------------------------------------------

// --- Method overriding and super call ---

class ShapeOverride {
  move() {
    console.log("move shape");
  }
}

class CircleOverride extends ShapeOverride {
  move() {
    super.move();
    console.log("move circle");
  }
}

const cOver = new CircleOverride();
cOver.move();
// Output:
// move shape
// move circle

// --------------------------------------------------

// --- Simple classes with constructor and methods ---

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const car1 = new Car("Tesla", 2020);
console.log(car1.age()); // e.g. 5 if current year is 2025

// --------------------------------------------------

// --- Animal example with method ---

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} goes ${this.sound}`);
  }
}

const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");

dog.makeSound(); // Dog goes Woof
cat.makeSound(); // Cat goes Meow

// --------------------------------------------------

// --- Person example with methods ---

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greet() {
    console.log(`Hello, ${this.fullName()}!`);
  }
}

const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

person1.greet(); // Hello, John Doe!
person2.greet(); // Hello, Jane Smith!

// --------------------------------------------------

// --- Vehicle and subclass Car example ---

class Vehicle {
  constructor(type, wheels) {
    this.type = type;
    this.wheels = wheels;
  }

  describe() {
    console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
  }
}

class CarVehicle extends Vehicle {
  constructor(name, year) {
    super("car", 4);
    this.name = name;
    this.year = year;
  }

  carDetails() {
    console.log(`${this.name} is a car made in ${this.year}.`);
  }
}

const myCar = new CarVehicle("Tesla", 2021);
myCar.describe(); // This is a car with 4 wheels.
myCar.carDetails(); // Tesla is a car made in 2021.

// --------------------------------------------------

// --- Private class fields example (ES2022) ---

class BankAccount {
  #balance = 0; // private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(
      `${this.owner} deposited ${amount}. Balance is now ${this.#balance}`
    );
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(
        `${this.owner} withdrew ${amount}. Balance is now ${this.#balance}`
      );
    } else {
      console.log("Insufficient funds.");
    }
  }

  #privateMethod() {
    console.log("This is a private method.");
  }
}

const account = new BankAccount("Alice");
account.deposit(100); // Alice deposited 100. Balance is now 100
account.withdraw(50); // Alice withdrew 50. Balance is now 50
account.withdraw(100); // Insufficient funds.

// --------------------------------------------------

// --- Static methods example ---

class MathHelper {
  static add(x, y) {
    return x + y;
  }

  static multiply(x, y) {
    return x * y;
  }
}

console.log(MathHelper.add(5, 3)); // 8
console.log(MathHelper.multiply(4, 7)); // 28

// --------------------------------------------------

// --- Factory pattern example ---

class ShapeFactoryShape {
  constructor(type) {
    this.type = type;
  }

  describe() {
    console.log(`This is a ${this.type}.`);
  }
}

class ShapeFactory {
  static createShape(type) {
    switch (type) {
      case "circle":
        return new ShapeFactoryShape("circle");
      case "square":
        return new ShapeFactoryShape("square");
      case "triangle":
        return new ShapeFactoryShape("triangle");
      default:
        return new ShapeFactoryShape("unknown shape");
    }
  }
}

const circleFactory = ShapeFactory.createShape("circle");
const squareFactory = ShapeFactory.createShape("square");

circleFactory.describe(); // This is a circle.
squareFactory.describe(); // This is a square.

// --------------------------------------------------

// --- Polymorphism example ---

class AnimalSpeak {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class DogSpeak extends AnimalSpeak {
  speak() {
    console.log("The dog barks.");
  }
}

class CatSpeak extends AnimalSpeak {
  speak() {
    console.log("The cat meows.");
  }
}

const animals = [new DogSpeak(), new CatSpeak()];
animals.forEach((animal) => animal.speak());

// Output:
// The dog barks.
// The cat meows.

// --------------------------------------------------

// --- Your final simple Car class example ---

class CarSimple {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }
}
