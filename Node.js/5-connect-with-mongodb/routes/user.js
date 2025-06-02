const express=require("express")
const router=express.Router()
// Controllers
const userController = require("controllers/userController.js");

// Validators
const UserValidator = require("validators/userValidator.js");


router.get("/", userController.getAllUsers);

router.post("/add-user", UserValidator.handle(), userController.createUser);

router.get("/:id", userController.seeOneUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);


module.exports=router;
