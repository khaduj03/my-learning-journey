const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/auth");
const authController=require("../controllers/authController.js")

router.get("/login", authController.loginForm)
router.get("/register", authController.registerForm);
router.post("/register",authController.login );
router.post("/login", authController.register);
router.get("/logout", authController.logout);
router.get("/profile", isAuthenticated, authController.profile);
router.post("/profile", isAuthenticated,authController.updateProfile); 

module.exports = router;
