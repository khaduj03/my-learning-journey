//Day 16 :2025 /May/31
//I had a break for 10 days due to personal reasons(Eid and works), but now I'm back to coding!
//Day 17 :2025 /Jun/13
//Day 18 :2025 /Jun/14
const path = require("path");
const express = require("express");
const app = express();
const flash = require("connect-flash");
require("dotenv").config();
const config = require("./config.js");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");
const dev = process.env.NODE_ENV !== "production";
const appDir = path.resolve(__dirname, "../frontend"); // adjust if needed

// Set up EJS as the view engine
app.use(methodOverride("method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set up EJS layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);


// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const cookieParser = require("cookie-parser");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(methodOverride("_method"));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 3600 * 24 * 30, // 30 days
      httpOnly: true,
      sameSite: "lax",
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
    }),
  })
);

app.use(flash());

// Initialize Passport
const passport = require("./passport/passport-local.js");
app.use(passport.initialize());
app.use(passport.session());

// Make flash messages and user available to all templates
app.use((req, res, next) => {
  res.locals.currentUser = req.user || null;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.info = req.flash("info");
  next();
});

// Express routes
app.use("/", require("./routes/index.js"));
app.use("/auth", require("./routes/auth.js"));
app.use("/admin", require("./routes/admin.js"));



app.all("*", (req, res) => {
  return res.render("404")
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`${dev ? "development" : "production"} mode`);
});