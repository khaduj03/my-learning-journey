const express = require("express");
const router = express.Router();

// Route all requests that start with "/users" to the user.js file
router.use("/users", require("./user.js"));

/*
  If none of the above routes match, this route will catch all remaining requests.
  The `.all()` method handles all types of HTTP methods (GET, POST, PUT, DELETE, etc.)
  This is used to return a 404 error if the page does not exist.
*/
router.all(/.*/, (req, res, next) => {
  try {
    const err = new Error("Page not found");
    err.status = 404;
    throw err;
    // Or you could just send: res.status(404).send("<h1>404! Page not found</h1>");
  } catch (err) {
    next(err); // Pass the error to the next middleware (error handler)
  }
});

/*
  Error-handling middleware for all routes.
  It catches any error passed with `next(err)` and shows an error page.
*/
router.use(async (err, req, res, next) => {
  const code = err.status || 500;
  const message = err.message || "";
  const stack = err.stack || ""; // This is useful for debugging

  if (config.debug) {
    // In development, show full error details for the developer
    return res.render("errors/developer", { message, stack });
  } else {
    // In production, show a friendly error page without details
    res.render(`errors/${code}`);
  }
});

module.exports = router;
