import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const CarForm = (e) => {
  const [carImg, setCarImg] = useState("");
  const [carName, setCarName] = useState("");
  const [specifications, setSpecifications] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});

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
      .post("http://localhost:8001/api/car", newCar)
      .then((res) => {
        console.log(res);
        navigate("/displayCars");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="container">
      <div className="d">
        <Link style={{ marginLeft: "280px", color: "black" }} to="/displayCars">
          Back to Display Cars
        </Link>
      </div>
      <div className="row-1">
        <div className="col">
          <form onSubmit={submitHandler}>
            <h1>ADD NEW CAR</h1>
            <div>
              <label className="form-label">CAR URL:</label>
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
              <label className="form-label">CAR NAME:</label>
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
              <label className="form-label">SPECIFICATIONS:</label>
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
              <label className="form-label">PRICE:</label>
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
              <label className="form-label">TIME:</label>
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
              <button className="btn btn-primary" type="submit">
                Add Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CarForm;
