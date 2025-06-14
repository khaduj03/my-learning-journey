const express = require("express");
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const userController=require("../controllers/userController.js");

// Home route
router.get("/", (req, res) => {
  res.render("home");
});
// Dashboard route
router.get("/dashboard", isAuthenticated, (req, res) => {
  res.render("dashboard");
});


module.exports = router;
