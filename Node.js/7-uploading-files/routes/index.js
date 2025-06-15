const express=require("express")
const {isAuthenticated}=require("../middleware/auth.js")
const router=express.Router()
// This path assumes that routes/index.js is one level above the upload folder
const uploadUserProfile = require("../upload/uploadUserProfile");

router.get("/",(req,res)=>{
    res.render("welcome.ejs")
})
router.use("/auth",require("./auth.js"))

router.get("/dashboard", isAuthenticated, (req, res) => {
  res.render("dashboard", {
    name: req.user?.username || "Guest",
  });
});

router.post("/dashboard/editUser",uploadUserProfile.single("img"),(req,res,next)=>{
    if(!req.file){
        req.body.img=null
    }else{
        req.body.img=req.file.filename
    }
    next()
} ,(req, res) => {
  req.flash("success", "you clicked :)");
  res.redirect("/dashboard");
});
module.exports=router