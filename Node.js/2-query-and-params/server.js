// Day Two - 2025/May/15

const express = require("express");
const app = express();

global.config = require("./config");

// Serving static files from the "public" folder
app.use(express.static(__dirname + "/public"));

// Notes:
// 1 - Query parameters look like this: /?id=10
//     They are sent from the client to the server and are accessible as JSON through req.query.
// 2 - Route parameters (params) are parts of the URL defined with a colon (:) like /:username.
//     These are used to capture values directly from the URL path.

// There are many ways to get user information through the URL.
// Today we practice with two methods: query and params.

// Example using route parameters:
// Note: When using params, we must prefix them with a colon (:) to avoid confusing them with a static route.
app.get("/:username", function (req, res) {
  res.send("Hello again");
  console.log(req.params); // Logs the value of `username` from the URL
});

// Start the server
app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
});
