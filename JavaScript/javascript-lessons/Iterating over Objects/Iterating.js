// ---------- Iterating over Objects ------------------------------------

// Example object
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// Using for...in loop to iterate over keys (properties) of the object
for (let key in circle) {
  console.log(key); // Logs keys: radius, draw
}

// --------------------------------------------------
// Another object example with method
const obj = {
  name: "ahmad",
  job() {
    console.log("I am working");
  },
};

// Get all keys of the object as an array
const keys = Object.keys(obj);
console.log(keys); // Output: ["name", "job"]

// Get all values of the object as an array
const values = Object.values(obj);
console.log(values); // Output: ["ahmad", function job() {...}]

// --------------------------------------------------
// Another example iterating over keys array
const circleKeys = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

let keysArray = Object.keys(circleKeys);
console.log(keysArray); // Output: ["radius", "draw"]

for (let key of keysArray) {
  console.log(key);
}

// --------------------------------------------------
// Iterating keys with for...of loop over Object.keys()
const anotherObj = {
  name: "name",
  age() {
    console.log("age");
  },
};

let keyList = Object.keys(anotherObj);
for (let key of keyList) {
  console.log(key);
}

// --------------------------------------------------
// Object.entries returns an array of [key, value] pairs
const objWithEntries = {
  name: "name",
  draw() {
    console.log("draw");
  },
};

let entries = Object.entries(objWithEntries);
console.log(entries);
// Output: [["name", "name"], ["draw", function draw() {...}]]

for (let entry of entries) {
  console.log(entry);
  // Logs each key-value pair as an array
}

// --------------------------------------------------
// Check if a property exists in an object using 'in' operator
const circleCheck = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

if ("radius" in circleCheck) {
  console.log("yes"); // Output: "yes"
}
