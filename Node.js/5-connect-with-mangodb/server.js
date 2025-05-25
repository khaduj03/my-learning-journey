//Day 8: 2025/May/23 Day 9:2025/may/24 Day 10:2025/may/25
const path = require("path");
const baseDir = path.resolve(__dirname);
require("app-module-path").addPath(baseDir);

//for connecting with mangodb we use from mangoose pakage
//and for adding data to mangodb we need a schema to create to model so we create a model folder
const express = require("express");
const app = express();
const flash = require("connect-flash");
require("dotenv").config();
global.config = require("config");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//Note: for requiing every pakge we need to type the place every file so instead that we can use from a pakage 
//app-module-path

//we get User from backend or MongDB so should that first letter be capital
const User=require("models/user.js")


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const cookieParser = require("cookie-parser");
const session = require("express-session");
const { check } = require("express-validator");
//controllers
const userController=require("controllers/userController.js")
//validators
const UserValidator = require("validators/userValidator.js");


app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" }, 
  })
);

app.use(flash());
app.use(methodOverride("method"));
app.set("view engine", "ejs");

//for cleaning the code we use from a stractuer and for controller we create a file and move all controller there 
//and because we used from class so we make it bind!  like this:app.get("/", userController.getAllUsers.bind(userController));
//and for make this atumatic bind we have a pakage named auto-bind we use from that in main or parent class
//and for using auto-bind we use that in parent controller and we delete all autobind
app.get("/", userController.getAllUsers);


app.post("/add-user", UserValidator.handle(), userController.createUser);

app.get("/:id", userController.seeOneUser);

app.put("/:id",userController.updateUser);

app.delete("/:id",userController.deleteUser);

app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
});
