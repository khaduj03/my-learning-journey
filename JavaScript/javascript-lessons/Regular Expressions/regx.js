// ------------------------------------------------------------
// JavaScript Lesson: String search, replace, and RegExp basics
// ------------------------------------------------------------

// 1. The search() method
// Searches a string for a specified value and returns the index of the match (or -1 if not found):

let text = "Visit W3Schools!";
let position = text.search("W3Schools");
console.log(position); // 6
// Explanation: "W3Schools" starts at index 6 in the string.

// 2. Using search() with Regular Expressions (RegExp)
// The i flag makes the search case-insensitive:

let text2 = "Visit W3Schools";
let pos2 = text2.search(/w3schools/i);
console.log(pos2); // 6
// Explanation: same as above but ignores case.

// 3. The replace() method
// Replaces a specified substring with another substring:

let original = "Visit Microsoft!";
let replaced = original.replace("Microsoft", "W3Schools");
console.log(replaced); // "Visit W3Schools!"
// Explanation: replaces "Microsoft" with "W3Schools"

// 4. Using replace() with RegExp and flags:
let replaced2 = original.replace(/microsoft/i, "W3Schools");
console.log(replaced2); // "Visit W3Schools!"
// Explanation: case-insensitive replacement

// 5. RegExp flags:
// i - case insensitive match
// g - global match (find all matches, not just the first)
// m - multiline matching

// 6. Common RegExp patterns:
// [abc]  - matches any character a, b, or c
// [0-9]  - matches any digit from 0 to 9
// (x|y)  - matches either x or y

// \d     - matches any digit (same as [0-9])
// \s     - matches any whitespace character (space, tab, newline)
// \b     - matches a word boundary (start or end of a word)
// \uxxxx - matches a Unicode character specified by hexadecimal xxxx

// 7. Quantifiers:
// n+ - matches one or more occurrences of n
// n* - matches zero or more occurrences of n
// n? - matches zero or one occurrence of n

// 8. RegExp methods:

// test()
// Returns true if pattern matches string, otherwise false:
const pattern = /e/;
console.log(pattern.test("The best things in life are free!")); // true
// Explanation: "e" found in string

// exec()
// Returns the matched text as an object if found, otherwise null:
console.log(/e/.exec("The best things in life are free!"));
// Output: [ 'e', index: 2, input: 'The best things in life are free!', groups: undefined ]
// Explanation: found "e" at index 2

// If no match found:
console.log(/z/.exec("The best things in life are free!")); // null
