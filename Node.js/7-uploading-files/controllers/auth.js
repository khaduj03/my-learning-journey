const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.loginForm = (req, res) => {
  res.render("auth/login.ejs");
};


exports.registerForm = (req, res) => {
  res.render("auth/register");
};


exports.login= async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      req.flash("error", "User not found");
      return res.redirect("/auth/login");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      req.flash("error", "Invalid password");
      return res.redirect("/auth/login");
    }

    // Log the user in using Passport
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "You logged in successfully");
      return res.redirect("/dashboard");
    });
  } catch (error) {
    console.log(error);
    req.flash("error", "Something went wrong");
    res.redirect("/auth/login");
  }
}


exports.register = async (req, res) => {
  try {
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