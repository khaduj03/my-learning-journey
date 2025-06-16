// Day 19 : 2025/Jun/15
// multer: middleware for handling multipart/form-data, primarily for file uploads.
// Also using mkdirp for directory creation (not shown here but mentioned)

// Day 20 : 2025/Jun/16

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const config = require("./config.js");
const passport = require("./passport/passport-local.js");

const app = express();

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files middleware
app.use(express.static(path.join(__dirname, "public")));

// Cookie parser middleware (with secret)
app.use(cookieParser(process.env.COOKIE_SECRET));

// Body parsers for form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session middleware setup
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 3600 * 24 * 30, // 30 days
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

// Flash messages middleware
app.use(flash());

// Passport initialization and session handling
app.use(passport.initialize());
app.use(passport.session());

// Set local variables accessible in templates
app.use((req, res, next) => {
  res.locals.currentUser = req.user || null;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.info = req.flash("info");
  next();
});

// Layouts middleware for EJS
app.use(expressLayouts);
app.set("layout", "layouts/main");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB :)"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Method override middleware (for PUT/DELETE in forms)
app.use(methodOverride("_method"));

// Routes
app.use("/", require("./routes/index.js"));

// Start the server
app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
});
