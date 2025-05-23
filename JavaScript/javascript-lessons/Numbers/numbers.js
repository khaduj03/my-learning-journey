
// All numbers in JavaScript are of one type: Number.
// Numbers can have decimals or be whole numbers.
let x = 3.14;    // number with decimals
let y = 3;       // whole number

// Big or small numbers can use scientific notation:
let bigNum = 123e5;   // 12300000
let smallNum = 123e-5; // 0.00123

// JavaScript tries to convert strings to numbers in math operations:
let a = "100";
let b = "10";
let c = a / b;   // works fine: 10

// But the + operator with strings concatenates:
let d = a + b;   // "10010"

// NaN means "Not a Number":
let e = 100 / "Apple";  // NaN

// Check for NaN:
console.log(isNaN(e));             // true
console.log(Number.isNaN(e));      // true

// Math object methods:
console.log(Math.round(4.6));      // 5
console.log(Math.floor(4.6));      // 4
console.log(Math.ceil(4.1));       // 5
console.log(Math.random());        // random number 0 to 1
console.log(Math.max(10, 5, 20)); // 20
console.log(Math.min(10, 5, 20)); // 5

// Number object methods:
let intNum = Number.parseInt("100");
let floatNum = Number.parseFloat("3.14");
console.log(intNum);               // 100
console.log(floatNum);             // 3.14
console.log(Number.isFinite(100)); // true
console.log(Number.isNaN(NaN));    // true

// Number bases:
let binNum = 0b1010;   // binary 10 decimal
let hexNum = 0xFF;     // hex 255 decimal
let octNum = 0o17;     // octal 15 decimal
console.log(binNum, hexNum, octNum);  // 10 255 15

// Infinity and -Infinity:
console.log(2 / 0);    // Infinity
console.log(-2 / 0);   // -Infinity

// Convert number to strings in different bases:
let num = 32;
console.log(num.toString(2));   // binary "100000"
console.log(num.toString(8));   // octal "40"
console.log(num.toString(10));  // decimal "32"
console.log(num.toString(16));  // hex "20"

// Number formatting:
let n = 9.656;
console.log(n.toExponential(2)); // "9.66e+0"
console.log(n.toFixed(2));       // "9.66"
console.log(n.toPrecision(4));   // "9.656"

// Convert strings to numbers:
console.log(Number("100"));       // 100
console.log(parseInt("10.5"));    // 10
console.log(parseFloat("10.5"));  // 10.5

// Number properties:
console.log(Number.MAX_VALUE);           // largest number
console.log(Number.MIN_VALUE);           // smallest positive number
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity
console.log(Number.NaN);                 // NaN
