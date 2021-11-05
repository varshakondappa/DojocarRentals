import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
const Register = () => {
  // Define state vars

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
    };
    axios
      .post("http://localhost:8001/api/users/register", postData)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <>
      <Link style={{ marginLeft: "280px", color: "black" }} to="/">
        Back to home
      </Link>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h1>REGISTER</h1>
          {/* {errors.map && <h3 style={{ color: "red" }}>{errors.name.message}</h3>} */}
          <div style={{ marginTop: "16px" }}>
            <div>
              <label className="form-label"> FIRST NAME:</label>
              <br></br>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            {errors && errors.firstName && (
              <p className="error-text">{errors.firstName.message}</p>
            )}
            <div>
              <label className="form-label">LAST NAME:</label>
              <br></br>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            {errors && errors.lastName && (
              <p className="error-text">{errors.lastName.message}</p>
            )}
            <div>
              <label className="form-label"> EMAIL:</label>
              <br></br>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            {errors && errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
            <div>
              <label className="form-label"> PASSWORD:</label>
              <br></br>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors && errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
            <div>
              <label className="form-label"> CONFIRM PASSWORD:</label>
              <br></br>
              <input
                type="text"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <br></br>
            <button className=" btn btn-primary" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
