import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "./Rating";
import { Link } from "@reach/router";

const AllReviews = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/review")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id, index) => {
    console.log("handle adopt", id);
    axios
      .delete(`http://localhost:8001/api/review/${id}`)
      .then((response) => {
        console.log(response);
        const reviewCopy = [...reviews];
        const filterArr = reviewCopy.filter((element, idx) => {
          return idx !== index;
        });
        setReviews(filterArr);
      })
      .catch((err) => console.log(err));
  };

  //   const handleAddReview = () => {
  //     navigate("/addReview");
  //   };

  return (
    <>
      <div className="container">
        <div class="dojo">
          <h1 style={{ marginLeft: "450px" }}>REVIEWS</h1>
          <Link style={{ color: "black" }} to="/main">
            Back to main
          </Link>
          <br></br>

          {/* <button
            className=" btn btn-primary"
            style={{
              marginRight: "10px",
              marginLeft: "280px",
              marginTop: "10px",
            }}
            onClick={() => handleAddCar()}
          >
            Add Car
          </button>
          <button
            className=" btn btn-primary"
            style={{
              marginTop: "10px",
            }}
            onClick={() => handleAddReview()}
          >
            Add Review
          </button> */}
        </div>

        <div className="row">
          <div className="col-10">
            {reviews
              .sort((a, b) => a.userName.localeCompare(b.userName))
              .map((element, index) => (
                <p key={index}>
                  <Rating />
                  {element.userName} :<br></br>
                  {element.review}
                  <button
                    style={{ float: "right" }}
                    onClick={() => handleDelete(element._id, index)}
                    type="button"
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>{" "}
                  <button
                    className="btn btn-primary"
                    style={{ background: "blue", float: "right" }}
                  >
                    {" "}
                    <Link
                      style={{ color: "white" }}
                      to={`/editReview/${element._id}`}
                    >
                      EDIT
                    </Link>
                  </button>
                  <hr></hr>
                </p>
              ))}
            {/* <td>
                    {" "}
                    <button
                      className="btn btn-primary"
                      style={{ background: "blue" }}
                    >
                      {" "}
                      <Link
                        style={{ color: "white" }}
                        to={`/edit/${element._id}`}
                      >
                        EDIT
                      </Link>
                    </button>
                  </td> */}
            {/* <td>
                    <button
                      className="btn btn-primary"
                      style={{ background: "green" }}
                    >
                      <Link
                        style={{ color: "white" }}
                        to={`/details/${element._id}`}
                      >
                        DETAILS{" "}
                      </Link>
                    </button>
                    {/* <button
                          //   onClick={() => handleAdopt(element._id, index)}
                          type="button"
                          className="btn btn-primary"
                        >
                          LIKE
                        </button> */}
            {/* <button
                          onClick={() => handleEdit(element._id, index)}
                          type="button"
                          className="btn btn-danger"
                        >
                          EDIT
                        </button> */}
            {/* <button
                //       onClick={() => handleDelete(element._id, index)}
                //       type="button"
                //       className="btn btn-danger"
                //     >
                //       DELETE
                //     </button>
                //   </td> */}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllReviews;
