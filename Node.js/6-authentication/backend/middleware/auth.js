// Middleware to check if user is authenticated
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Please log in to access this resource");
  res.redirect("/auth/login");
};

// Middleware to check if user is admin
exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  req.flash("error", "Admin access required");
  res.redirect("/dashboard");
};
