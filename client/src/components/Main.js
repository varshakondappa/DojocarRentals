import { Link, navigate } from "@reach/router";
import axios from "axios";
const Main = () => {
  const handleLogout = () => {
    axios
      .post(
        "http://localhost:8001/api/users/logout",
        {},
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data.message);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data.errors);
      });
  };

  return (
    <>
      <div class="navbar1">
        <Link
          style={{
            marginRight: "50px",
            fontSize: "19px",
            marginLeft: "60px",
            color: "black",
          }}
          to="/main"
        >
          {" "}
          HOME{" "}
        </Link>{" "}
        <span> | </span>
        <Link
          style={{
            marginRight: "50px",
            marginLeft: "50px",
            fontSize: "19px",
            color: "black",
          }}
          to="/displayCars"
        >
          CARS
        </Link>{" "}
        <span> | </span>
        <Link
          style={{
            marginRight: "50px",
            marginLeft: "50px",
            fontSize: "19px",
            color: "black",
          }}
          to="/reviews"
        >
          REVIEWS
        </Link>{" "}
        <span> | </span>
        <Link
          style={{
            marginRight: "50px",
            marginLeft: "50px",
            fontSize: "19px",
            color: "black",
          }}
          to="/about"
        >
          ABOUT
        </Link>{" "}
        <button
          className="btn btn-danger"
          onClick={handleLogout}
          style={{
            marginRight: "50px",
            marginLeft: "50px",
            marginTop: "3px",
            fontSize: "15px",
            color: "black",
          }}
        >
          LOGOUT
        </button>
      </div>
      <div class="main">
        <p></p>
      </div>
    </>
  );
};
export default Main;
