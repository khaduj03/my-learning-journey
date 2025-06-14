const controller = require("./controller");
const passport = require("passport");
const User = require("../models/user.js");
const { isAuthenticated } = require("../middleware/auth");
class AuthController extends controller {
  async loginForm(req, res) {
    if (req.isAuthenticated()) return res.redirect("/dashboard");
    res.render("auth/login");
  }

  async registerForm(req, res) {
    if (req.isAuthenticated()) return res.redirect("/dashboard");
    res.render("auth/register");
  }

  async login(req, res) {
    const { username, email, password } = req.body;

    try {
      // Check for existing user
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
      });

      if (existingUser) {
        req.flash("error", "Username or email already exists");
        return res.redirect("/auth/register");
      }

      // Create user with hashed password (your schema handles hashing)
      const newUser = new User({ username, email, password });
      await newUser.save();
      req.flash("success", "Registration successful. You can now log in.");
      res.redirect("/auth/login");
    } catch (err) {
      console.error("Registration error:", err);
      req.flash("error", "Registration failed due to server error.");
      res.redirect("/auth/register");
    }
  }

  async register(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        req.flash("error", "Login error");
        return res.redirect("/auth/login");
      }

      if (!user) {
        req.flash("error", info.message || "Invalid credentials");
        return res.redirect("/auth/login");
      }

      req.logIn(user, (err) => {
        if (err) {
          req.flash("error", "Login failed");
          return res.redirect("/auth/login");
        }

        req.flash("success", `Welcome back, ${user.username}!`);
        return res.redirect("/dashboard");
      });
    })(req, res, next);
  }

  async logout(req, res) {
    req.logout((err) => {
      if (err) {
        req.flash("error", "Logout error");
        return res.redirect("/");
      }
      req.flash("success", "You have been logged out successfully");
      res.redirect("/");
    });
  }

  async profile(req, res) {
    res.render("auth/profile");
  }

  async updateProfile(req, res) {
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
}
module.exports = new AuthController();
