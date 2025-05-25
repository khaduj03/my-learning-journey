// Day Three - 2025/May/16
// Day Three - 2025/May/17 & Day Four 2025/May/20

const express = require("express");
const app = express();

global.config = require("./config");

// Serve static files from the "public" directory
app.use(express.static(__dirname + "/public"));

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: false }));

// Example route using route parameters (commented out for now)
// Note: This route uses GET method with a dynamic parameter
// app.get("/:username", function (req, res) {
//   res.send("Hello again");
//   console.log(req.params);
// });

// ----------------------------
// 2025/May/20 Notes:
// To make our code cleaner and more readable, we move our routes to a separate file (e.g., routes/user.js).
// Since we no longer define routes directly in this file, we use middleware to include them.

// What is middleware?
// - Middleware is a function that runs before the final request handler.
// - It can modify the request or response, or stop the request entirely.
// - Middleware order is important — it runs in the order it's written.
// - Middleware functions take three arguments: req, res, and next.
//   If `next()` is not called, the request will not proceed to the next handler.

app.use("/", require("./routes/user.js"));

// Start the server
app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
});
