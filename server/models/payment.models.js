const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema(
  {
    accountName: {
      type: String,
      required: [true, "Account Name is required"],
      minLength: [5, "Account name must be atleast 5 characters"],
    },
    cardNumber: {
      type: String,
      required: [true, "Card Number is required"],
      minLength: [5, "Car Name must be atleast 5 characters"],
    },
    cvv: {
      type: String,
      required: [true, "CVV required"],
      minLength: [3, "CVV must be atleast 3 characters"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Payment", PaymentSchema);
