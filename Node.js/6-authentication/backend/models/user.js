// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema(
//   {
//     first_name: { type: String, required: true },
//     last_name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     avatar: { type: String, default: "/default-avatar.jpg" }, 
//     bio: { type: String, default: "" },
//     posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }], 
//     followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//     following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//   },
//   { timestamps: true }
// )

// module.exports = mongoose.model("User", userSchema, "User");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
});
module.exports = mongoose.model("User", userSchema, " User");
