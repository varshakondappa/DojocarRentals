import React from "react";
import { navigate } from "@reach/router";
// import image from "./images/mercedes.webp";
// import image1 from "./images/toyota.webp";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1539788816080-8bdd722d8c22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1530936541512-05ec5b6c6e71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1543796076-c8a565501995?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1608994751987-e647252b1fd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  ];
  <div style={{ backgroundColor: "blue" }}></div>;
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {images.map((each, index) => (
            <img
              key={index}
              style={{ width: "100%" }}
              src={each}
              alt="Car Images"
            />
          ))}
        </Zoom>
      </div>
    );
  };
  const handleSignUp = () => {
    navigate("/register");
  };
  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h1 style={{ marginLeft: "130px" }}>DOJO CARS</h1>
      <button
        style={{ marginLeft: "500px", color: "black" }}
        onClick={handleSignUp}
        className="btn btn-primary"
      >
        SIGN UP
      </button>
      <button
        style={{ marginRight: "90px", marginLeft: "-50px", color: "black" }}
        onClick={handleSignIn}
        className="btn btn-primary"
      >
        SIGN IN
      </button>
      <div className="images">{Slideshow()}</div>
    </div>
  );
};
export default Home;
