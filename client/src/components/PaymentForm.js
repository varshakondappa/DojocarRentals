import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const PaymentForm = (e) => {
  const [accountName, setAccountName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");

  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const payment = {
      accountName,
      cardNumber,
      cvv,
    };
    axios
      .post("http://localhost:8001/api/carPayment", payment)
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
        <Link style={{ marginLeft: "220px" }} to="/displayCars">
          Back to Display Cars
        </Link>
      </div>
      <div className="row-1">
        <div className="col">
          <h1 style={{ padding: "20px" }}>PAYMENT</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label className="form-label">Account Name:</label>
              <br></br>
              <input
                type="text"
                value={accountName}
                onChange={(e) => {
                  setAccountName(e.target.value);
                }}
              />
              {errors && errors.accountName && (
                <p className="error-text">{errors.accountName.message}</p>
              )}
            </div>
            <div>
              <label className="form-label">Card Number:</label>
              <br></br>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              {errors && errors.cardNumber && (
                <p className="error-text">{errors.cardNumber.message}</p>
              )}
            </div>
            <div>
              <label className="form-label">CVV:</label>
              <br></br>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              {errors && errors.cvv && (
                <p className="error-text">{errors.cvv.message}</p>
              )}
            </div>{" "}
            <br />
            <div>
              <button className="btn btn-primary" type="submit">
                Add Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PaymentForm;
