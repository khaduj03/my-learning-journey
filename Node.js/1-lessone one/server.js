// Day One - 2025/May/14
// Lesson One

// To use Express, we need to require it like this:
const express = require("express");

// Note: Every package we install should be required like this before we can use it.
// Since we need some configurations throughout our project, we can make them global:
global.config = require("./config.js");

// We create a constant named `app`. Why "app"? Because our entire project will use this instance.
const app = express();

// Static Files:
// `app.use` here is a middleware.
// `__dirname` is a Node.js global that returns the current directory path.
app.use(express.static(__dirname + "/public"));

// Creating a route with `get`:
// `get` takes two arguments: the route path and a callback function.
// The callback function takes two parameters: request (req) and response (res).
app.get("/", function (req, res) {
  res.send("Hello Khaduj");
});

// Note: Some constants like the port number are used throughout the project.
// It's a good practice to store them in a separate config file (e.g., config.js).
// To use this config, we require it at the top (already done above).

// Running the server:
// `app.listen` takes the port and a callback function.
// In the callback, we can add a message to indicate the server is running.
app.listen(config.port, () => {
  console.log(`Our server is running on port ${config.port}`);
});
