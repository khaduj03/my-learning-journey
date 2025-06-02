const express=require("express")
const router=express.Router()
const authController=require("../controllers/authController")
const authValidator=require("../validators/authValidator")

router.get("/login",authController.loginForm)
router.get("/register", authController.registerForm);
router.post("/login", authController.login);
router.post("/register", authController.register);
