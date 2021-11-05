const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User Name is required"],
      minLength: [5, "User Name must be atleast 5 characters"],
    },
    review: {
      type: String,
      required: [true, "Review is required"],
      minLength: [5, "Review must be atleast 5 characters"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Review", ReviewSchema);
