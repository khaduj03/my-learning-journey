// -------------------------------------------------------
// JavaScript Lesson: try, catch, finally, and throw
// -------------------------------------------------------

// 1. try
// The try statement defines a block of code to test (run) that might cause an error.

// 2. catch
// The catch statement defines a block of code to handle errors if any occur in the try block.

// 3. finally
// The finally statement defines a block of code that will always run after try and catch, no matter what.

// 4. throw
// The throw statement lets you create a custom error.

// Basic syntax:

try {
  // Code to try
} catch (error) {
  // Code to handle error
} finally {
  // Code to run always, after try/catch
}

// -------------------------------------------------------
// Example 1: Basic try-catch

try {
  // Let's say this code throws an error
  throw "This is a custom error";
} catch (err) {
  console.log("Caught error: " + err);
}
// Output: Caught error: This is a custom error

// -------------------------------------------------------
// Example 2: Using throw with conditions

function checkInput(x) {
  try {
    if (x === "") throw "empty"; // Throw error if input is empty
    if (isNaN(x)) throw "not a number"; // Throw error if input is not a number
    x = Number(x);
    if (x < 5) throw "too low"; // Throw error if number < 5
    if (x > 10) throw "too high"; // Throw error if number > 10
    console.log("Input is valid:", x);
  } catch (err) {
    console.log("Input error: " + err);
  } finally {
    console.log("Input check finished."); // Runs always
  }
}

checkInput(""); // Output: Input error: empty
checkInput("abc"); // Output: Input error: not a number
checkInput(3); // Output: Input error: too low
checkInput(20); // Output: Input error: too high
checkInput(7); // Output: Input is valid: 7
//          Input check finished.
