import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Rating from "./Rating";
// import { FaStar } from "react-icons/fa";

const ReviewForm = (e) => {
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState({});
  const [rating, setRating] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const newReview = {
      userName,
      review,
    };
    axios
      .post("http://localhost:8001/api/review", newReview)
      .then((res) => {
        console.log(res);
        navigate("/reviews");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="container">
      <div className="d">
        <Link style={{ marginLeft: "280px", color: "black" }} to="/main">
          Back to Main
        </Link>
      </div>
      <div className="row-1">
        <div className="col">
          <form onSubmit={submitHandler}>
            <h1>ADD REVIEW</h1>
            <Rating></Rating>
            <div>
              <label className="form-label">USER NAME:</label>
              <br></br>
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              {errors && errors.userName && (
                <p className="error-text">{errors.userName.message}</p>
              )}
            </div>
            <div>
              <label className="form-label">REVIEW:</label>
              <br></br>
              <input
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              {errors && errors.review && (
                <p className="error-text">{errors.review.message}</p>
              )}
            </div>
            <br />
            <div>
              <button className="btn btn-primary" type="submit">
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ReviewForm;
