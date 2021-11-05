const Review = require("../models/review.models");
// const createProduct = (req, res) => {
//   Product.create(req.body)
//     .then((newProduct) => res.json(newProduct))
//     .catch((err) => console.log(err));
// };

module.exports.addNewReview = (request, response) => {
  const { userName, review } = request.body;
  Review.create({
    userName,
    review,
  })
    .then((review) => response.json(review))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllReviews = (req, res) => {
  Review.find({})
    .then((allReviews) => res.json(allReviews))
    .catch((err) => res.status(400).json(err));
};
module.exports.updateReviewById = (req, res) => {
  Review.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updateReview) => res.json(updateReview))
    .catch((err) => res.status(400).json(err));
};
module.exports.deleteReviewById = (req, res) => {
  Review.deleteOne({ _id: req.params.id })
    .then((deleteReview) => res.json(deleteReview))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", err: err })
    );
};
