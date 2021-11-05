import "./App.css";
import { Router } from "@reach/router";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import CarForm from "./components/CarForm";
import DisplayCars from "./components/DisplayCar";
import PaymentForm from "./components/PaymentForm";
import Main from "./components/Main";
import Edit from "./components/Edit";
import Details from "./components/Details";
import ReviewForm from "./components/ReviewForm";
import AllReviews from "./components/AllReviews";
import EditReview from "./components/EditReview";

function App() {
  return (
    <div className="App">
      {/* <div className="background"> */}
      <Router className="background">
        <Register path="/register"></Register>
        <Login path="/login"></Login>
        <Home path="/"></Home>
        <CarForm path="/addCar"></CarForm>
        <DisplayCars path="/displayCars"></DisplayCars>
        <PaymentForm path="/rent"></PaymentForm>
        <Main path="/main"></Main>
        <Edit path="/edit/:id"></Edit>
        <Details path="/details/:id"></Details>
        <ReviewForm path="/addReview"></ReviewForm>
        <AllReviews path="/reviews"></AllReviews>
        <EditReview path="/editReview/:id"></EditReview>
      </Router>
      {/* </div> */}
    </div>
  );
}

export default App;
