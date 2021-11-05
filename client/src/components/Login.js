import axios from "axios";
import React, { useState } from "react";
import { Link, navigate } from "@reach/router";

const Login = () => {
  // declare state vars
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors("");
    setSuccessMsg("");
    const postData = { email, password };
    axios
      .post("http://localhost:8001/api/users/login", postData, {
        withCredentials: true,
      })
      .then((response) => {
        setSuccessMsg(response.data.message);
        navigate("/main");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };
  const handleLogout = () => {
    axios
      .post(
        "http://localhost:8001/api/users/logout",
        {},
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data.message);
        setSuccessMsg(response.data.message);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        // setErrors(err.response.data.errors);
      });
  };
  return (
    <>
      <Link style={{ marginLeft: "280px", color: "black" }} to="/">
        Back to home
      </Link>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          {/* {err && <h3 style={{ color: "red" }}>{err}</h3>} */}
          {successMsg.length > 0 && (
            <h3 style={{ color: "green" }}>{successMsg}</h3>
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
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br></br>
          <button className="btn btn-primary" type="submit">
            SUBMIT
          </button>

          {/* <button className=" btn btn-danger" onClick={() => handleLogout()}>
            LOGOUT
          </button> */}

          <h6 style={{ marginTop: "30px", fontSize: "30", color: "red" }}>
            New to Dojo Cars ?
            <span>
              <Link style={{ color: "" }} to="/register">
                {" "}
                join here{" "}
              </Link>
            </span>
          </h6>
        </form>
      </div>
    </>
  );
};

export default Login;
