const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();
const authValidator=require("../validators/authValidator")

router.get("/login", authController.loginForm);
router.post("/login",authValidator.login(), authController.login);
router.get("/register", authController.registerForm);
router.post("/register",authValidator.register(), authController.register);
router.post("/logout", authController.logout);

module.exports = router;
