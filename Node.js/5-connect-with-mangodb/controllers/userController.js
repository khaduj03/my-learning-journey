let controller = require("./controller.js");
const User = require("./../models/user.js");
const { validationResult } = require("express-validator");


class UserController extends controller {
  async getAllUsers(req, res) {
    const flashErrors = req.flash("errors") || [];
    const flashMessage = req.flash("message") || "";
    //this return us the all users from mangodb
    let users = await User.find({});

    res.render("index", { users, errors: flashErrors, message: flashMessage });
  }

  async seeOneUser(req,res){
    //findOne return us a document but find return us array that includ is a document
    let user = await User.findOne({ _id: req.params.id });
    res.render("user", { user });
  }

  async createUser(req,res){
       const errors = validationResult(req);
    
        if (!errors.isEmpty()) {
          req.flash("errors", errors.array());
          return res.redirect("/");
        }
    
        
        const { first_name, email, password } = req.body;
    
        const newUser =new User({
          first_name,
          email,
          password,
        }); 
        await newUser.save()
    
        req.flash("message", "✅ User added successfully");
    
        res.redirect("/");
  }

  async updateUser(req,res){
 await User.updateMany({_id:req.params.id},{$set:req.body})


  req.flash("message", "✏️ User updated successfully");
  res.redirect("/");
  }
  async deleteUser(req,res){
    await User.deleteOne({ _id: req.params.id });
    req.flash("message", "🗑️ User deleted successfully");

    res.redirect("/");

  }
}
module.exports =new UserController;
