const ReviewController = require("../controllers/review.controllers");
module.exports = (app) => {
  app.post("/api/review", ReviewController.addNewReview);
  app.get("/api/review", ReviewController.getAllReviews);
  app.delete("/api/review/:id", ReviewController.deleteReviewById);
  app.put("/api/review/:id", ReviewController.updateReviewById);
};
