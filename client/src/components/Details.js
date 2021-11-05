import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
const Details = (props) => {
  const [car, setCar] = useState({});
  const [like, setLike] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8001/api/car/" + props.id)
      .then((res) => setCar({ ...res.data }))
      .catch((err) => console.log(err));
  });
  const handleEnable = (e) => {
    setLike(1);
    e.target.disabled = true;
  };
  const handlePayment = () => {
    navigate("/rent");
  };
  return (
    <>
      <Link style={{ marginLeft: "220px", color: "black" }} to="/displayCars">
        Back to Display Cars
      </Link>
      <h1>CAR DETAILS</h1>

      <div className="col1">
        <div className="in-details">
          <h4 style={{ padding: "10px" }}>DETAILS OF CAR: {car.carName}</h4>
          <div className="details">
            <h5>
              CAR IMAGE :{" "}
              {car.carImg && (
                <img className="table-img1" src={car.carImg} alt="" />
              )}
            </h5>
            <br />
            <h5>SPECIFICATIONS : {car.specifications}</h5>
            <br />
            <h5>PRICE : {car.price}</h5>
            <br />
            <h5>TIME : {car.time}</h5>
            <br />
          </div>
          <br />
        </div>
        <button
          className="btn btn-primary"
          onClick={handleEnable}
          type="button"
        >
          {" "}
          Like
        </button>
        <span> </span>
        <button
          className="btn btn-success"
          onClick={handlePayment}
          type="button"
        >
          {" "}
          PAYMENT
        </button>
      </div>
    </>
  );
};
export default Details;
