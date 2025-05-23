//  JavaScript Lesson: Map Object
//  new Map(), set(), get(), delete(), has(), forEach(), entries()

// A Map is a collection of key-value pairs where keys can be any type (not just strings)

// ------- Create a new Map
const fruits = new Map();
// Explanation: fruits is now an empty Map

// ---------- Add key-value pairs using set()
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
// Explanation: now fruits contains three entries with fruit names as keys and quantities as values

// ---------- Get a value by key using get()
console.log(fruits.get("apples")); // 500
console.log(fruits.get("bananas")); // 300

// -------- Check if a key exists using has()
console.log(fruits.has("oranges")); // true
console.log(fruits.has("grapes")); // false

// -------- Remove an element with delete()
fruits.delete("bananas"); // removes the "bananas" entry

// ------- Loop through Map entries with forEach()
fruits.forEach(function (value, key) {
  console.log(key + " = " + value);
});
// Output:
// apples = 500
// oranges = 200

// ------ Get an iterator of [key, value] pairs with entries()
const iterator = fruits.entries();
console.log(iterator.next().value); // ["apples", 500]
console.log(iterator.next().value); // ["oranges", 200]

// Maps keep the insertion order of keys and allow keys of any type

// Example: Using different key types
const mixedMap = new Map();
mixedMap.set("name", "Alice"); // string key
mixedMap.set(1, "one"); // number key
mixedMap.set(true, "boolean key"); // boolean key
console.log(mixedMap.get(1)); // "one"
console.log(mixedMap.get(true)); // "boolean key"
