// This route file handles user-related operations.
// We use the "validator" package to check if inputs (like email) have correct formats.

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// For practicing RESTful API, we use a sample array of users.
// Since we'll update this array, we use `let` instead of `const`.
let users = require("../users");

// Route 1: GET /
// Returns the full list of users
router.get("/", function (req, res) {
  // Common HTTP status codes:
  // - 200: OK
  // - 404: Not Found
  // - 304: Not Modified
  res.status(200).json({
    data: users,
    success: true,
  });
});

// Route 2: GET /:id
// Returns a specific user by ID
router.get("/:id", function (req, res) {
  const user = users.find((i) => i.id === parseInt(req.params.id));
  res.status(200).json({
    data: user,
    success: true,
  });
});

// Route 3: POST /
// Creates a new user (use Postman to test this route)
// We use express-validator to validate email and password
router.post(
  "/",
  [
    check("email", "Email format is incorrect").isEmail(),
    check("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    users.push(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: req.body,
      success: true,
    });
  }
);

// Route 4: PUT /:id
// Updates a user by ID
router.put("/:id", function (req, res) {
  users = users.map((user) =>
    user.id === parseInt(req.params.id) ? req.body : user
  );

  res.json({
    message: "User updated successfully",
    success: true,
  });
});

// Route 5: DELETE /:id
// Deletes a user by ID
router.delete("/:id", function (req, res) {
  const idToDelete = parseInt(req.params.id);

  users = users.filter((user) => user.id !== idToDelete);

  res.json({
    message: "User deleted successfully",
    success: true,
  });
});

module.exports = router;
