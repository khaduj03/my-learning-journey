const express=require("express")

const router=express.Router()

router.get("/", (req, res) => {
  res.render("welcome", { req });
});

router.use("/auth",require("./auth.js"))
router.use("/dashboard", require("./dashboard.js"));

module.exports=router