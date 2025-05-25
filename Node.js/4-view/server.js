// Day 5: 2025/May/20 and Day 6: 2025/May/21, Day 7: 2025/May/22, and Day 8: 2025/May/23

// Overview:
// This is a simple Express.js application to manage users with features to add, update, view, and delete users.
// We use EJS as the templating engine to render HTML views on the server side.

// Important Notes:

// 1. Rendering Views with EJS:
// We use EJS (Embedded JavaScript templates) to send dynamic HTML pages to the client.
// Views are stored in a folder (default is 'views') and contain HTML mixed with EJS tags to inject data dynamically.

// 2. Flash Messages (Toasters):
// To show temporary notifications (toasters) like success or error messages after actions (e.g., adding or deleting a user),
// we use the "connect-flash" package. Flash messages are stored in the session and cleared after being displayed once.

// 3. Required Packages for Flash Messages:
// - connect-flash: main package to manage flash messages
// - express-session: stores session data (needed by connect-flash)
// - cookie-parser: parses cookies, required for session handling

// 4. Method Override:
// HTML forms only support GET and POST methods directly.
// To support other HTTP methods like PUT and DELETE (needed for updating and deleting users),
// we use the "method-override" package which lets us override the HTTP method using a query parameter or hidden input.

// -----------------------------

const express = require("express");
const app = express();
const flash = require("connect-flash");
//  dotenv is used to manage environment variables in a secure and flexible way.
// It loads variables from a `.env` file into `process.env`, so we can keep secrets (like API keys, passwords, ports)
// out of the source code. This is especially useful for switching between development, testing, and production
// environments without changing the code.
// Example: PORT=3000 in the .env file becomes available as process.env.PORT in the code.
require("dotenv").config();
``

global.config = require("./config");


// Method Override lets us use PUT and DELETE via forms
const methodOverride = require("method-override");

let users = require("./users"); // This is our in-memory user data store (array of users)

const cookieParser = require("cookie-parser");
const session = require("express-session");

// express-validator helps us validate user input to prevent invalid data
const { validationResult, check } = require("express-validator");

// Middleware to serve static files like CSS, JS, images
app.use(express.static(__dirname + "/public"));

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: false }));

// Middleware to parse cookies (required for sessions)
app.use(cookieParser(process.env.COOKIE_SECRET));//we use from env

// Session middleware to track user sessions on the server
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Secret key to sign the session ID cookie and we use from .env
    resave: false, // Don't save session if unmodified
    saveUninitialized: true, // Save uninitialized sessions
    cookie: { secure: process.env.NODE_ENV === "production" }, // Use secure cookies in production
  })
);

// Middleware to handle flash messages (store messages in session to display once)
app.use(flash());

// Middleware to override HTTP methods in forms using query parameter "method"
// Example: <form method="POST" action="/user/1?method=DELETE"> will be treated as DELETE
app.use(methodOverride("method"));

// Set EJS as the templating engine so Express knows how to render .ejs files
app.set("view engine", "ejs");

// -----------------------------

// Route: GET /
// Render the homepage with the list of users and any flash messages (errors or success)
app.get("/", function (req, res) {
  // Retrieve flash messages (errors and success messages)
  const flashErrors = req.flash("errors") || [];
  const flashMessage = req.flash("message") || "";

  // Render the 'index' template, passing user data and messages to be shown in the UI
  res.render("index", { users, errors: flashErrors, message: flashMessage });
});

// Route: POST /add-user
// Add a new user with validation
app.post(
  "/add-user",
  [
    // Validate email field
    check("email", "The email format is incorrect").isEmail(),
    // Validate password length (minimum 5 characters)
    check("password", "The password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    // Collect validation errors (if any)
    const errors = validationResult(req);

    // If validation failed, save errors in flash and redirect back to home page
    if (!errors.isEmpty()) {
      req.flash("errors", errors.array());
      return res.redirect("/");
    }

    // If validation passed, extract data from form
    const { first_name, email, password } = req.body;

    // Create a new user object with a unique ID
    const newUser = {
      id: users.length + 1, // Simple ID generation by length (not ideal for production)
      first_name,
      email,
      password,
    };

    // Add new user to the in-memory users array
    users.push(newUser);

    // Set a success flash message
    req.flash("message", "✅ User added successfully");

    // Redirect back to home page to show updated list and message
    res.redirect("/");
  }
);

// Route: GET /:id
// Show details for a specific user by ID
app.get("/:id", (req, res) => {
  // Find the user with matching ID
  let user = users.find((user) => user.id == req.params.id);

  // Render the 'user' template, passing the found user data
  res.render("user", { user });
});

// Route: PUT /:id
// Update a user's information
app.put("/:id", (req, res) => {
  // Replace the user data in the array with the new data from the request body
  users = users.map((user) => {
    if (user.id == req.params.id) {
      return req.body;
    } else {
      return user;
    }
  });

  // Set a flash message indicating success
  req.flash("message", "✏️ User updated successfully");

  // Redirect back to home page
  res.redirect("/");
});

// Route: DELETE /:id
// Delete a user by ID
app.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  // Find the user index by ID
  const index = users.findIndex((user) => user.id === userId);

  // If user found, remove it from the array
  if (index !== -1) {
    users.splice(index, 1);
  }

  // Set a flash message indicating deletion success
  req.flash("message", "🗑️ User deleted successfully");

  // Redirect back to home page
  res.redirect("/");
});

// Start the server and listen on the configured port
app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
});
