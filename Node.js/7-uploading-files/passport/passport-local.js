const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          req.flash("error", "User is not exist. Please register first.");
          return done(null, false);
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          req.flash("error", "Invalid password");
          return done(null, false);
        }

        req.flash("success", "Welcome back!");
        return done(null, user);
      } catch (err) {
        req.flash("error", "Something went wrong");
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select("-password");
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
