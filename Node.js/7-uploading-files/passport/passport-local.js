const passport=require("passport")
const LocalStrategy=require("passport-local")
const User=require("../models/user")
passport.use(
  new LocalStrategy({ passReqToCallback: true }, 
    function (
    req,
    username,
    password,
    done
  ) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err, false, req.flash("error", "somthing went wrong"));
      }
      if (!user) {
        return done(
          null,
          false,req.flash("error", "user is not exist plz register")
        );
      }
      if (!user.verifyPassword(password)) {
        return done(null, false, req.flash("error", "invalid password"));
      }
      return done(null, user, req.flash("success", "welcome back"));
    });
  })
);

passport.serializeUser(function (user, done) {
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

module.exports=passport