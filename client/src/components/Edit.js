import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Edit = (props) => {
  const { id } = props;
  const [carImg, setCarImg] = useState("");
  const [carName, setCarName] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/car/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.data));
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const newCar = {
      carImg,
      carName,
      specifications,
      price,
      time,
    };
    axios
      .put(`http://localhost:8001/api/car/${id}`, newCar)
      .then((res) => {
        console.log(res);
        console.log("success");
        setCarImg(res.data.carImg);
        setCarName(res.data.carName);
        setSpecifications(res.data.specifications);
        setPrice(res.data.price);
        setTime(res.data.time);
        navigate("/displayCars");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  const handleCancel = () => {
    navigate("/displayCars");
  };
  return (
    <div className="container">
      <div className="row-1">
        <Link style={{ marginLeft: "280px", color: "black" }} to="/displayCars">
          Back to Display Cars
        </Link>
        <div className="col">
          <form onSubmit={submitHandler}>
            <h1>Edit Car</h1>
            <div>
              <label className="form-label">Car URL:</label>
              <br></br>
              <input
                type="text"
                value={carImg}
                onChange={(e) => {
                  setCarImg(e.target.value);
                }}
              />
              {errors && errors.carImg && (
                <p className="error-text">{errors.carImg.message}</p>
              )}
            </div>
            <div>
              <label className="form-label">Car Name:</label>
              <br></br>
              <input
                type="text"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
              />
              {errors && errors.carName && (
                <p className="error-text">{errors.carName.message}</p>
              )}
            </div>
            <div>
              <label className="form-label">Specification:</label>
              <br></br>
              <input
                type="text"
                value={specifications}
                onChange={(e) => setSpecifications(e.target.value)}
              />
              {errors && errors.specifications && (
                <p className="error-text">{errors.specifications.message}</p>
              )}
            </div>{" "}
            <div>
              <label className="form-label">Price:</label>
              <br></br>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {errors && errors.price && (
                <p className="error-text">{errors.price.message}</p>
              )}
            </div>
            <div>
              <label className="form-label">Time:</label>
              <br></br>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              {errors && errors.time && (
                <p className="error-text">{errors.time.message}</p>
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
                Edit Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Edit;
