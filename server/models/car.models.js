const mongoose = require("mongoose");
require("./user.models");
const Schema = mongoose.Schema;
const CarSchema = new mongoose.Schema(
  {
    carImg: {
      type: String,
      required: [true, "Car Url is required"],
      minLength: [5, "Car url must be atleast 5 characters"],
    },
    carName: {
      type: String,
      required: [true, "Car Name is required"],
      minLength: [5, "Car Name must be atleast 5 characters"],
    },
    specifications: {
      type: String,
      required: [true, "Car specifications required"],
      minLength: [5, "Specifications must be atleast 5 characters"],
    },
    price: {
      type: String,
      required: [true, "Car price required"],
    },
    time: {
      type: String,
      required: [true, "Time required"],
    },
    // rentedBy: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: mongoose.model("User", UserSchema),
    //   },
    // ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Car", CarSchema);
