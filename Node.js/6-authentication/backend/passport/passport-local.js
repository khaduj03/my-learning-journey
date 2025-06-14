const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user"); // Adjust the path as necessary

// Local Strategy
passport.use(
  // Local strategy for user login
  new LocalStrategy(
    {
      //the name of user fields in the request body
      usernameField: "email",
      // the name of password fields in the request body
      passwordField: "password",
      // whether to pass the request object to the callback
      passReqToCallback: true,
    },
    //we use this function to authenticate the user 
    async (req,email, password, done) => {
      //email and password are passed as the second and third arguments
      //done is a callback function that we call when we are done with the authentication
      //done takes three arguments: error, user, and info
      try {
        //find return us arrays but findOne returns a single document
        // so we use findOne to find a single user by email
        // Find user by email
        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
          //we return null as the first argument to indicate no error
          //we return false as the second argument to indicate no user found
          //we return an object with a message as the third argument to indicate the error message
          return done(null, false, req.flash("error", "Invalid email or password"));

        }

        // Check if user is active
        if (!user.isActive) {
          return done(null, false, req.flash("error", "Your account is not active. Please contact support."));
        }

        // Check password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
          return done(null, false,req.flash("error", "Invalid email or password"));
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize user for session 
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select("-password");
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
