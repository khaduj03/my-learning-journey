let controller = require("./controller.js");
const User = require("./../models/user.js");
const { validationResult } = require("express-validator");

class UserController extends controller {
  // Get all users as JSON (for Next.js frontend)
  async getAllUsers(req, res, next) {
    try {
      const users = await User.find({});
      res.json({ users }); 
    } catch (err) {
      next(err);
    }
  }

  // Get one user by ID
  async seeOneUser(req, res, next) {
    try {
      const user = await User.findOne({ _id: req.params.id });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({ user });
    } catch (err) {
      next(err);
    }
  }

  // Create a new user
  async createUser(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { first_name, email, password } = req.body;

      const newUser = new User({ first_name, email, password });
      await newUser.save();

      res
        .status(201)
        .json({ message: "User added successfully", user: newUser });
    } catch (err) {
      next(err);
    }
  }

  // Update an existing user
  async updateUser(req, res, next) {
    try {
      const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      if (!updated) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({ message: "User updated successfully", user: updated });
    } catch (err) {
      next(err);
    }
  }

  // Delete a user
  async deleteUser(req, res, next) {
    try {
      const deleted = await User.findByIdAndDelete(req.params.id);

      if (!deleted) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({ message: "User deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
