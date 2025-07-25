const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    img: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

    userSchema.pre("save", async function (next) {
      if (!this.isModified("password")) return next();
    
      try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      } catch (error) {
        next(error);
      }
    });
    

    userSchema.methods.comparePassword = async function (candidatePassword) {
      return bcrypt.compare(candidatePassword, this.password);
    };
    
    module.exports = mongoose.models.User || mongoose.model("User", userSchema);
    