const express=require("express")
const router=express.Router()

// This path assumes that routes/index.js is one level above the upload folder
const uploadUserProfile = require("../upload/uploadUserProfile");
const { validateImageFile } = require("../validators/editUserValidator.js");
const {isAuthenticated}=require("../middleware/auth.js")
const dashboardController=require("../controllers/dashboard.js")

router.get("/", isAuthenticated, dashboardController.dashboardPage);
router.post(
  "/editUser",
  uploadUserProfile.single("img"),
  validateImageFile,
  dashboardController.dashboard
);
module.exports=router
