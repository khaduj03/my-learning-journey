//  JavaScript Lesson: Set Object
//  new Set(), add(), delete(), has(), forEach(), values()

// A Set is a collection of unique values (no duplicates allowed)

// ------- Create a new Set with some initial values
const letters = new Set(["a", "b", "c"]);
// Explanation: letters now contains "a", "b", and "c"

// -------- Add new elements to the Set using add()
letters.add("d"); // adds "d" to the set
letters.add("a"); // "a" already exists, so it won't be added again

// ----------- Check if a value exists using has()
console.log(letters.has("a")); // true (because "a" is in the set)
console.log(letters.has("z")); // false (no "z" in the set)

// ---------- Remove an element with delete()
letters.delete("b"); // removes "b" from the set

// --------- Loop through Set elements with forEach()
let text = "";
letters.forEach(function (value) {
  text += value + " "; // concatenates each letter and space
});
console.log(text); // outputs something like: "a c d "

// -------- Get an iterator with values()
const iterator = letters.values();
console.log(iterator.next().value); // "a"
console.log(iterator.next().value); // "c"
console.log(iterator.next().value); // "d"

//---------- Sets automatically prevent duplicates, so they are useful to store unique items.

// Example: Using Set to remove duplicates from an array
const numbers = [1, 2, 3, 2, 1, 4, 5];
const uniqueNumbers = new Set(numbers); // Set with unique numbers
console.log([...uniqueNumbers]); // converts Set back to array: [1, 2, 3, 4, 5]
