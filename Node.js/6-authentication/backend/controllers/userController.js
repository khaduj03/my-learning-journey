let controller = require("./controller.js");
const User = require("./../models/user.js");
const { validationResult } = require("express-validator");

class UserController extends controller {
  // Get all users 
  async getAllUsers(req, res){
    try {
      const users = await require("../models/user.js").find().select("-password");
      res.render("admin", { users });
    } catch (error) {
      req.flash("error", "Error fetching users");
      res.redirect("/dashboard");
    }
  }

  // Create a new user
  async createUser(req, res, next) {
    try {
      console.log("Creating user with body:", req.body);
    } catch (err) {
      next(err);
    }
  }

  // Update an existing user
  async updateUser(req, res){
    try {
      const { username, email } = req.body;
  
      const existingUser = await User.findOne({
        $or: [
          { username, _id: { $ne: req.user._id } },
          { email, _id: { $ne: req.user._id } },
        ],
      });
  
      if (existingUser) {
        req.flash("error", "Username or email already taken");
        return res.redirect("/auth/profile");
      }
  
      await User.findByIdAndUpdate(req.user._id, { username, email });
  
      req.flash("success", "Profile updated successfully");
      res.redirect("/auth/profile");
    } catch (error) {
      req.flash("error", "Error updating profile");
      res.redirect("/auth/profile");
    }
  }

  // Delete a user
  async deleteUser(req, res, next) {
    try {
      const deleted = await User.findByIdAndDelete(req.params.id);

      if (!deleted) {
        return req.flash("error", "User not found");
      }
      if (deleted._id.toString() === req.user._id.toString()) {
        return req.flash("error", "Cannot delete your own account");
      }
      req.flash("success", "User deleted successfully");
      res.redirect("/admin");
     
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
