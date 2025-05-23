// -------- Hoisting --------------------------------------------------

// Function Declaration
function walk() {
  console.log("walk");
}

// Function declarations are hoisted fully, so you can call them before their definition
walk(); // Output: "walk"

// -------------------------------------------------------
// Function Expression

let run = function () {
  console.log("run");
};

run(); // Output: "run"

// You can assign the function to another variable and call it
let move = run;
move(); // Output: "run"

// -------------------------------------------------------
// Explanation:
// - Function declarations are hoisted: their definition is loaded before code runs.
//   So you can call walk() even before the function is defined in the code.
// - Function expressions are NOT hoisted the same way.
//   The variable 'run' is hoisted but initialized as undefined until assignment.
//   So you cannot call run() before the expression is assigned.
