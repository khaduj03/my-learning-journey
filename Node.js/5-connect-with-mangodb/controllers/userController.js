let controller = require("./controller.js");
const User = require("./../models/user.js");
const { validationResult } = require("express-validator");

// ✅ Note: We should try to write reusable code and avoid repeating ourselves!
class UserController extends controller {
  // Get all users and render the homepage
  async getAllUsers(req, res, next) {
    try {
      // Flash messages for errors and success
      const flashErrors = req.flash("errors") || [];
      const flashMessage = req.flash("message") || "";

      // Get all users from MongoDB
      const users = await User.find({});

      // Render index.ejs with users and messages
      res.render("index", {
        users,
        errors: flashErrors,
        message: flashMessage,
      });
    } catch (err) {
      // Pass the error to the error-handling middleware
      next(err);
    }
  }

  // Get and show details of one user
  async seeOneUser(req, res, next) {
    try {
      // `findOne` returns a single document; `find` returns an array
      const user = await User.findOne({ _id: req.params.id });

      if (!user) {
        this.error("User not found", 404);
      }

      // Render user.ejs to display user details
      res.render("user", { user });
    } catch (err) {
      next(err);
    }
  }

  // Create a new user
  async createUser(req, res, next) {
    try {
      const errors = validationResult(req);

      // If validation fails, store errors in flash and redirect back
      if (!errors.isEmpty()) {
        req.flash("errors", errors.array());
        return res.redirect("/users");
      }

      const { first_name, email, password } = req.body;

      const newUser = new User({ first_name, email, password });
      await newUser.save();

      req.flash("message", "✅ User added successfully");
      res.redirect("/users");
    } catch (err) {
      next(err);
    }
  }

  // Update an existing user
  async updateUser(req, res, next) {
    try {
      await User.updateMany({ _id: req.params.id }, { $set: req.body });

      req.flash("message", "✏️ User updated successfully");
      res.redirect("/users");
    } catch (err) {
      next(err);
    }
  }

  // Delete a user
  async deleteUser(req, res, next) {
    try {
      await User.deleteOne({ _id: req.params.id });

      req.flash("message", "🗑️ User deleted successfully");
      res.redirect("/users");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
