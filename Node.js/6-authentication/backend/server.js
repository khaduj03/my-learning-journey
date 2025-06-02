//Day 16 :2025 /May/31


const path = require("path");
const baseDir = path.resolve(__dirname);
// require("app-module-path").addPath(baseDir);

// For connecting with MongoDB, we use the mongoose package.
// And for adding data to MongoDB, we need a schema to create a model, so we create a "models" folder.
const express = require("express");
const app = express();
const flash = require("connect-flash");
require("dotenv").config();
global.config = require("./config.js");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// Note: When requiring every package or file, we usually need to write the full path.
// Instead of that, we can use the package "app-module-path" to shorten imports.
const cors = require("cors");
// We get the User from the backend or MongoDB, so the first letter should be capitalized (because it's a class).
// const User = require("models/user.js");
app.use(
  cors({
    origin: "http://localhost:5000", // your Next.js frontend address
    credentials: true, // if you're using cookies or sessions
  })
);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const cookieParser = require("cookie-parser");
const session = require("express-session");


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

app.use("/", require("./routes/index.js"));

app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
});
