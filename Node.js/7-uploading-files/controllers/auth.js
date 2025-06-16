const User = require("../models/user");
const {validationResult}=require("express-validator")
const passport=require("../passport/passport-local")

exports.loginForm = (req, res) => {
  res.render("auth/login.ejs");
};


exports.registerForm = (req, res) => {
  res.render("auth/register");
};

exports.login = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    req.flash("error", errorMessages);
    return res.redirect("/auth/login");
  }

  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
    failureFlash: true,
  })(req, res, next);
};


exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      req.flash("error", errorMessages);
      return res.redirect("/auth/register");
    }

    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      req.flash("error", "User already exists with this email");
      return res.redirect("/auth/register");
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    req.flash("success", "You registered successfully! Now log in.");
    res.redirect("/auth/login");
  } catch (error) {
    console.log(error);
    req.flash("error", "Something went wrong. Please try again.");
    res.redirect("/auth/register");
  }
};

exports.logout = async (req, res) => {
  req.logout((err) => {
    if (err) {
      req.flash("error", "Logout error");
      return res.redirect("/");
    }

    req.flash("success", "You have been logged out successfully");
    res.redirect("/");
  });
};