//---------------- String Object Notes --------------------
// JavaScript strings are used to store and manipulate text.
// A string is zero or more characters enclosed in quotes.

// String primitive
// const message = "neon";

// String object
// const another = new String("neon");

// Example string with spaces
// const message = "        neon. coding is cool           ";
// console.log(message);
// console.log(message.length);          // Length of the string
// console.log(message[3]);              // Access character at index 3
// console.log(message.split(""));       // Split string into array of characters
// console.log(message.includes("n"));  // Check if contains 'n'
// console.log(message.startsWith("n")); // Check if starts with 'n'
// console.log(message.endsWith("n"));  // Check if ends with 'n'
// console.log(message.indexOf("is"));  // Find index of substring "is"
// console.log(message.replace("is", "are")); // Replace first occurrence
// console.log(message.toLocaleUpperCase());  // Convert to uppercase
// console.log(message.toLocaleLowerCase());  // Convert to lowercase
// console.log(message.trim());           // Remove spaces from both ends
// console.log(message.trimStart());      // Remove spaces from start
// console.log(message.trimEnd());        // Remove spaces from end

// Splitting by space example
// const message = "neon learn is good";
// console.log(message.split(" "));

//---------------- Template Literals --------------------
// Use backticks `` to create multi-line strings and interpolate variables.

// Multi-line string example
// const message = `My name is Khadija Wakili
// and this book is cool "jjygduy"`;
// console.log(message);

// Interpolation example
// let name = "Javed";
// let msg = `Hi ${name}, how are you?`;
// console.log(msg);

//---------------- Escape Characters --------------------
// Backslash \ is used to escape special characters in strings.

// Example:
// let text = "We are the so-called \"Vikings\" from the north.";

// Common escape sequences:
// \b - Backspace
// \f - Form Feed
// \n - New Line
// \r - Carriage Return
// \t - Horizontal Tab
// \v - Vertical Tab

//---------------- Accessing Characters --------------------
// let str = "JavaScript";
// console.log(str[0]);  // 'J'
// console.log(str[4]);  // 'S'

//---------------- Case Conversion --------------------
// let str = "hello world";
// console.log(str.toUpperCase());  // 'HELLO WORLD'
// console.log(str.toLowerCase());  // 'hello world'

//---------------- Trimming Spaces --------------------
// let str = "   JavaScript   ";
// console.log(str.trim());       // 'JavaScript'
// console.log(str.trimStart());  // Removes spaces from start
// console.log(str.trimEnd());    // Removes spaces from end

//---------------- Extracting Substrings --------------------
// slice(start, end) extracts substring (end not included)
// let str = "JavaScript";
// let sliced = str.slice(0, 4);  // 'Java'
// console.log(sliced);

// substring(start, end) similar to slice but only positive indices
// let part = str.substring(4, 10);  // 'Script'
// console.log(part);

// substr(start, length) extracts substring by length
// let part2 = str.substr(7, 3); // 'ipt'
// console.log(part2);

//---------------- Replacing Substrings --------------------
// Replace first occurrence (case sensitive)
// let str = "Hello world";
// let newStr = str.replace("world", "JavaScript");
// console.log(newStr);

// Replace case-insensitive using regex
// let newStr2 = str.replace(/WORLD/i, "JavaScript");

// Replace all occurrences using global flag
// let newStr3 = "Please visit Microsoft and Microsoft!".replace(/Microsoft/g, "W3Schools");

//---------------- String Concatenation --------------------
// concat() joins strings
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);  // 'Hello World'

// Also possible with + operator

//---------------- Padding Strings --------------------
// padStart and padEnd add padding to a string to reach a target length
// let text = "5";
// console.log(text.padStart(4, "x"));  // 'xxx5'
// console.log(text.padEnd(4, "x"));    // '5xxx'

//---------------- Character Access Methods --------------------
// charAt(index) returns character at index
// let text = "HELLO WORLD";
// console.log(text.charAt(0));  // 'H'

// charCodeAt(index) returns Unicode of character at index
// console.log(text.charCodeAt(0));  // 72

// Property access [] also allowed
// console.log(text[0]);  // 'H'

//---------------- Splitting Strings --------------------
// let str = "apple,banana,orange";
// let arr = str.split(",");
// console.log(arr);  // ['apple', 'banana', 'orange']

//---------------- Looping Through Strings --------------------
// let str = "JavaScript";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

//---------------- Reversing a String --------------------
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverseString("JavaScript"));  // 'tpircSavaJ'

//---------------- Palindrome Check --------------------
// function isPalindrome(str) {
//   let reversed = str.split('').reverse().join('');
//   return str === reversed;
// }
// console.log(isPalindrome("madam"));  // true
// console.log(isPalindrome("hello"));  // false

//---------------- Searching Strings --------------------
// indexOf() returns index of first occurrence or -1 if not found
// let str = "Please locate where locate occurs!";
// console.log(str.indexOf("locate"));  // 7

// lastIndexOf() returns index of last occurrence
// console.log(str.lastIndexOf("locate"));  // 21

// Both accept optional second parameter as start position

//---------------- search() method --------------------
// Searches string for a value and returns index or -1
// Unlike indexOf(), it accepts regex but not a start position

//---------------- match() method --------------------
// Returns array of matches with regex
// let text = "The rain in SPAIN stays mainly in the plain";
// let matches = text.match(/ain/gi);
// console.log(matches);  // ['ain', 'AIN', 'ain', 'ain']

//---------------- repeat() method --------------------
// Repeats a string specified number of times
// let str = "Hello!";
// console.log(str.repeat(3));  // 'Hello!Hello!Hello!'

//---------------- replaceAll() method (ES2021) --------------------
// Replaces all occurrences of a substring
// let str = "JavaScript is great, JavaScript is powerful";
// let newStr = str.replaceAll("JavaScript", "JS");
// console.log(newStr);  // 'JS is great, JS is powerful'

//---------------- localeCompare() method --------------------
// Compares two strings lexicographically
// Returns -1 if str1 < str2, 0 if equal, 1 if str1 > str2
// let str1 = "apple";
// let str2 = "banana";
// console.log(str1.localeCompare(str2));  // -1

//---------------- Examples --------------------

// Reverse each word in a sentence
// function reverseWords(sentence) {
//   return sentence
//     .split(' ')
//     .map(word => word.split('').reverse().join(''))
//     .join(' ');
// }
// console.log(reverseWords("Hello JavaScript"));  // 'olleH tpircSavaJ'

// Count word frequency
// function wordCount(sentence) {
//   let words = sentence.toLowerCase().split(' ');
//   let count = {};
//   words.forEach(word => {
//     count[word] = (count[word] || 0) + 1;
//   });
//   return count;
// }
// console.log(wordCount("JavaScript is great and JavaScript is fun"));
// // {javascript: 2, is: 2, great: 1, and: 1, fun: 1}

// Remove vowels from a string
// function removeVowels(str) {
//   return str.replace(/[aeiou]/gi, '');
// }
// console.log(removeVowels("JavaScript is fun"));  // 'JvScrpt s fn'

// Check if two strings are anagrams
// function isAnagram(str1, str2) {
//   let normalize = str => str.toLowerCase().split('').sort().join('');
//   return normalize(str1) === normalize(str2);
// }
// console.log(isAnagram("listen", "silent"));  // true
// console.log(isAnagram("hello", "world"));    // false

//---------------- includes() method --------------------
// Checks if string contains a substring, returns true/false
// let str = "JavaScript is awesome";
// console.log(str.includes("JavaScript"));  // true
// console.log(str.includes("Python"));      // false

//---------------- startsWith() method --------------------
// Returns true if string starts with given substring
// Case sensitive
// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello"));       // true
// console.log(text.startsWith("world", 6));    // true

//---------------- endsWith() method --------------------
// Returns true if string ends with given substring
// let text = "John Doe";
// console.log(text.endsWith("Doe"));            // true
// console.log(text.endsWith("world", 11));      // true

//---------------- Template Literals Summary --------------------
// Use backticks `` for strings allowing:
// - Multiline strings
// - String interpolation with ${expression}
// - Easier embedding of quotes and special characters

//---------------- Summary --------------------
// Strings are a fundamental datatype in JavaScript with many methods to manipulate text.
// Practice using them to master text handling in your programs.
