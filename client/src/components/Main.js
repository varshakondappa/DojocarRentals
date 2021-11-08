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
        <p style={{ fontSize: "22px", fontFamily: "sans-serif" }}>
          <span style={{ marginLeft: "230px" }}></span>Dojo Car is an American
          car-sharing company and a subsidiary of Axis Budget Group. Dojo Car
          rental agencies primarily serve people who require a temporary
          vehicle, for example, those who do not own their own car, travelers
          who are out of town, or owners of damaged or destroyed vehicles who
          are awaiting repair or insurance compensation. DojoCar provides
          automobile reservations to its members. Dojocar was founded in 2000 by
          Atilla. On March 14, 2013, Axis Budget Group acquired Dojo Car for
          approximately US$500 million. Dojocar charges a one-time application
          fee, an annual fee, and a reservation charge. Fuel, parking,
          insurance, and maintenance are included in the price. It is very
          usefull for the people who have no cars and wanted to drive by
          themselves.
        </p>
      </div>
    </>
  );
};
export default Main;
