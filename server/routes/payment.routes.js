const PaymentController = require("../controllers/payment.controllers");
module.exports = (app) => {
  app.post("/api/carPayment", PaymentController.addPayment);
  app.get("/api/carPayment", PaymentController.getAllPayments);
};
