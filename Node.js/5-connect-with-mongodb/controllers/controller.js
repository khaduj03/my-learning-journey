const autoBind = require("auto-bind").default;

class Controller {
  constructor() {
    // Automatically bind all methods of this class to the instance
    // This ensures 'this' inside methods always refers to the instance
    autoBind(this);
  }

  // This method creates and throws an error with a message and a status code
  // Default status code is 500 (Internal Server Error)
  error(message, status = 500) {
    const err = new Error(message);
    err.status = status; // Use the passed status, not hardcoded 404
    throw err;
  }
}

module.exports = Controller;
