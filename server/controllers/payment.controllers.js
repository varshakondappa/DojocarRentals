const Payment = require("../models/payment.models");
module.exports.addPayment = (request, response) => {
  const { accountName, cardNumber, cvv } = request.body;
  Payment.create({
    accountName,
    cardNumber,
    cvv,
  })
    .then((payment) => response.json(payment))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllPayments = (req, res) => {
  Payment.find({})
    .then((allCarPayment) => res.json(allCarPayment))
    .catch((err) => res.status(400).json(err));
};
