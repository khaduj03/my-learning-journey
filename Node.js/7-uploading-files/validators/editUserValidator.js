const path = require("path");

// Custom middleware to validate uploaded file
function validateImageFile(req, res, next) {
  if (!req.file) {
    // No file uploaded — you can decide if this is allowed or not
    return next();
  }

  const allowedExt = [".jpg", ".jpeg", ".png"];
  const ext = path.extname(req.file.originalname).toLowerCase();

  if (!allowedExt.includes(ext)) {
    // Delete the uploaded file if invalid extension
    const fs = require("fs");
    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Failed to delete invalid file:", err);
    });

    req.flash("error", "Incorrect file format! Allowed: jpg, jpeg, png");
    return res.redirect("/dashboard");
  }

  next();
}

module.exports = { validateImageFile };
