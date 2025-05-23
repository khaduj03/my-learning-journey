// Dynamic objects in JavaScript
// You can add or remove properties from objects after they are created

const circle = {
  radius: 1,
};

// Adding new properties dynamically
circle.color = "red"; // Add a color property
circle.height = 100; // Add a height property

console.log(circle);
// Output: { radius: 1, color: 'red', height: 100 }

// ----------------------------------------------------
// Another example with a home object

const home = {
  one: "room",
};

// Adding properties dynamically
home.two = "kitchen";
home.three = "bathroom";

console.log(home);
// Output: { one: 'room', two: 'kitchen', three: 'bathroom' }

// ----------------------------------------------------
// Deleting properties from an object

delete home.two; // Remove the 'two' property
delete home.one; // Remove the 'one' property

console.log(home);
// Output: { three: 'bathroom' }

// ----------------------------------------------------
// Explanation:
// In JavaScript, objects are mutable, so you can add, modify, or remove properties at any time.
// This is called dynamic nature of objects.
// Useful when you don't know all properties upfront or want to change object structure later.
