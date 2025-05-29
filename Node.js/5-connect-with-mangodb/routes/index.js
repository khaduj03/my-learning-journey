const express=require("express");
const router=express.Router()
router.use("/", require("./user.js"));
// if the routes that we defined wasn't any of them 
// and we use from (all) method that this does not care that is get or post or wathevee it is 

module.exports=router