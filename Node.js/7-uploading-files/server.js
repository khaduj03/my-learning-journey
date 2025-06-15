//Day 19 :2025/Jun/15
//multer: for uploading files we use multer, a middleware for handling multipart/form-data, which is primarily used for uploading files.
//and also we use from mkdirp
const express=require("express")
const path = require("path")
const app=express()
const mongoose=require("mongoose")
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const config = require("./config.js");
require("dotenv").config();
global.config = require("./config");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 3600 * 24 * 30, // 30 days
      httpOnly: true,
      sameSite: "lax",
    },
  })
);
app.use(flash());
const passport=require("./passport/passport-local.js")
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user || null;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.info = req.flash("info");
  next();
});

app.use(expressLayouts);
app.set("layout", "layouts/main");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB :)"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(methodOverride("_method"));
app.use("/" , require("./routes/index.js"))

app.listen(config.port , () => {
  console.log("server is rining in port" + config.port);
});