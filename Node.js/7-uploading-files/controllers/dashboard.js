const { validationResult } = require("express-validator");
const User = require("../models/user.js");

exports.dashboardPage = (req, res) => {
  res.render("dashboard", {
    req: req,
  });
};

exports.dashboard = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      req.flash("error", errorMessages);
      return res.redirect("/dashboard");
    }

    let data = {
      username: req.body.username,
    };

    if (req.file) {
      data.img = req.file.filename;
    }

    await User.updateOne({ _id: req.user._id }, { $set: data });

    req.flash("success", "Profile updated successfully!");
    return res.redirect("/dashboard");
  } catch (error) {
    next(error);
  }
};
