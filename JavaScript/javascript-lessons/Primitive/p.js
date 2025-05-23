///////////////////////////////////////////////////
// Primitive values are copied by value

let z = 12;
let b = z; // b gets a copy of the value 12
z = 39; // changing z does NOT affect b
console.log(b); // Output: 12

/////////////////////////////////////////////////////
// Objects are assigned and copied by reference

let x = { value: 10 };
let y = x; // y references the same object as x
x.value = 30; // changing the object via x also affects y
console.log(x); // Output: { value: 30 }
console.log(y); // Output: { value: 30 }

/////////////////////////////////////////////////////

// Primitive passed to function — copy of value is passed

let number = 10;

function increase(number) {
  return number++; // post-increment returns original number, then increments local copy
}

increase(number);
console.log(number); // Output: 10 — original variable unchanged

/////////////////////////////////////////////////////

// Object passed to function — reference is passed

let num = { value: 10 };

function increase(obj) {
  obj.value++; // modifies the property of the original object
}

increase(num);
console.log(num); // Output: { value: 11 } — object modified
