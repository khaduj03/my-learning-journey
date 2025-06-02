const express=require("express")
const router=express.Router()

router.use("/users", require("./user.js"));

router.get("/auth", (req, res) => {
  res.send("<h1>hello auth</h1>");
});



module.exports=router