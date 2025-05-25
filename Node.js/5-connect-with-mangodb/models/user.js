//Note :the model that we use here is the mvc model and we have different model that just help us to manage our code better and cleaner

//for creating a model for mongodb we need reduired first
const mongoose = require("mongoose");
// and we create a varibal by name of schema that export from mongoose
const Schema = mongoose.Schema;
//now after this we create the user shema

const userSchema = new Schema({
  //inside of this we write the user information that which and what kinda info should user have
  //in mongo bydefault we have id so we do not need to create it
  first_name: { type: String, required: true}, //why we used object to defind the type should have and is required or not and other info!
  email: { type: String, required: true },
  password: { type: String, required: true },
});
//for exproting this schema wefirst make it model with mangoose and then this model take three arguments the name of shema
module.exports = mongoose.model("User", userSchema, " User");
