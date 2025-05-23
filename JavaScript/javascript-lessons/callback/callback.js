// Example of asynchronous code using setTimeout (callbacks)
// Logs three messages after different delays

function ball1() {
  setTimeout(() => {
    console.log("the one ball"); // Logs after 2 seconds
  }, 2000);
}

function ball2() {
  setTimeout(() => {
    console.log("the second ball"); // Logs after 1 second
  }, 1000);
}

function ball() {
  setTimeout(() => {
    console.log("the third ball"); // Logs after 3 seconds
  }, 3000);
}

ball1();
ball2();
ball();

// --------------------------------------------
// Error handling in callbacks example

function ball1WithError() {
  setTimeout(() => {
    try {
      if (true) {
        console.log("the ball one"); // Works fine
      } else {
        throw new Error("the one ball wrong"); // Throws error if condition false
      }
    } catch (e) {
      console.log(e); // Catches and logs any errors
    }
  }, 2000);
}

function ball2WithError() {
  setTimeout(() => {
    try {
      if (false) {
        console.log("the ball two");
      } else {
        throw new Error("the two ball wrong"); // This error will be thrown
      }
    } catch (e) {
      console.log(e); // Logs the error message
    }
  }, 2000);
}

ball1WithError();
ball2WithError();

// --------------------------------------------
// Using Promises to handle asynchronous actions

function b1() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("the ball 1 reached"); // Promise fulfilled
    } else {
      reject("the ball one failed"); // Promise rejected
    }
  });
}

function b2() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("the ball 2 reached");
    } else {
      reject("the ball 2 failed");
    }
  });
}

function b3() {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("the ball 3 reached");
    } else {
      reject("the ball 3 failed"); // This rejection will happen
    }
  });
}

// Chaining promises with then() and catch()
b1()
  .then((msg) => {
    console.log(msg); // Logs success from b1
    return b2();
  })
  .then((msg) => {
    console.log(msg); // Logs success from b2
    return b3();
  })
  .then((msg) => {
    console.log(msg); // Would log success from b3 if resolved
  })
  .catch((err) => {
    console.log(err); // Catches and logs any error from the chain
  });

// --------------------------------------------
// Async / Await syntax for asynchronous code

async function b1Async() {
  if (true) {
    return "the 1 ball"; // Returns resolved value
  } else {
    throw new Error("the 1 ball failed"); // Throws error if false
  }
}

function b2Async() {
  if (true) {
    return "the 2 ball";
  } else {
    throw new Error("the 2 ball failed");
  }
}

function b3Async() {
  if (false) {
    return "the 3 ball";
  } else {
    throw new Error("the 3 ball failed"); // This will throw error
  }
}

async function extend() {
  try {
    console.log(await b1Async()); // Waits for b1Async to resolve
    console.log(await b2Async()); // Waits for b2Async to resolve
    console.log(await b3Async()); // Throws error, caught by catch block
  } catch (e) {
    console.log(e); // Logs the error thrown
  }
}

extend();
