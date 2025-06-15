const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

router.get("/login", authController.loginForm);
router.post("/login", authController.login);

router.get("/register", authController.registerForm);
router.post("/register", authController.register);
  

module.exports = router;
