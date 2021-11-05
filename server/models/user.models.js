const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      minLength: [5, "First Name must be atleast 5 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      minLength: [5, "Last Name must be atleast 5 characters"],
    },
    email: {
      type: String,
      required: [true, "Email Address is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password must be atleast 8 characters"],
    },
  },
  { timestamps: true }
);
UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));
UserSchema.pre("validate", function (next) {
  console.log("inside pre validate");
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "passwords must match");
  }
  next();
});
UserSchema.pre("save", function (next) {
  console.log("inside save");
  bcrypt
    .hash(this.password, 10)
    .then((hashedPassword) => {
      this.password = hashedPassword;
      next();
    })
    .catch((err) => {
      console.log("Error while hashing the password");
    });
});
// UserSchema.path("email").validate(async (email) => {
//   const emailCount = await mongoose.models.User.countDocuments({ email });
//   return !emailCount;
// }, "Email already exists unique email required");
module.exports = mongoose.model("User", UserSchema);
