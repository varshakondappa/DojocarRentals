import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const EditReview = (props) => {
  const { id } = props;
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/review/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.data));
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const newReview = {
      userName,
      review,
    };
    axios
      .put(`http://localhost:8001/api/review/${id}`, newReview)
      .then((res) => {
        console.log(res);
        console.log("success");
        setUserName(res.data.userName);
        setReview(res.data.review);
        navigate("/reviews");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  const handleCancel = () => {
    navigate("/reviews");
  };
  return (
    <div className="container">
      <div className="row-1">
        <Link style={{ marginLeft: "280px", color: "black" }} to="/reviews">
          Back to Reviews
        </Link>
        <div className="col">
          <form onSubmit={submitHandler}>
            <h1>Edit Review</h1>
            <div>
              <label className="form-label">User Name:</label>
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
              <label className="form-label">Review:</label>
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
              <button
                style={{ marginRight: "10px" }}
                className="btn btn-primary"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Edit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditReview;
