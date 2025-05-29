// Day 8: 2025/May/23 Day 9: 2025/May/24 Day 10: 2025/May/25
// Day 11:2025/May/26 and Day 12:2025/May/27 I was too sick :(
// Day 13 :2025/May/28 
// Day 14 :2025/May/29

const path = require("path");
const baseDir = path.resolve(__dirname);
require("app-module-path").addPath(baseDir);

// For connecting with MongoDB, we use the mongoose package.
// And for adding data to MongoDB, we need a schema to create a model, so we create a "models" folder.
const express = require("express");
const app = express();
const flash = require("connect-flash");
require("dotenv").config();
global.config = require("config");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// Note: When requiring every package or file, we usually need to write the full path.
// Instead of that, we can use the package "app-module-path" to shorten imports.

// We get the User from the backend or MongoDB, so the first letter should be capitalized (because it's a class).
const User = require("models/user.js");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const cookieParser = require("cookie-parser");
const session = require("express-session");
const { check } = require("express-validator");


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

// For cleaning the code, we follow a structure. For controllers, we create a separate file and move all logic there.
// And because we use classes, we need to bind methods like this:
// app.get("/", userController.getAllUsers.bind(userController));
//
// To make this automatic, we can use a package named "auto-bind".
// We use "auto-bind" in the parent controller class, so we don’t have to bind each method manually.
app.use("/", require("./routes/index.js"));


app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
});
