import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import ReactImageMagnify from "react-image-magnify";

const DisplayCars = (props) => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/api/car")
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id, index) => {
    console.log("handle adopt", id);
    axios
      .delete(`http://localhost:8001/api/car/${id}`)
      .then((response) => {
        console.log(response);
        const carsCopy = [...cars];
        const filterArr = carsCopy.filter((element, idx) => {
          return idx !== index;
        });
        setCars(filterArr);
      })
      .catch((err) => console.log(err));
  };

  const handleAddCar = () => {
    navigate("/addCar");
  };
  const handleAddReview = () => {
    navigate("/addReview");
  };
  const handleMain = () => {
    navigate("/main");
  };
  // const handleImage=(id)=>{
  //   style={{width:"100px",height:"100px"}}
  // }

  return (
    <>
      <div className="container">
        <div class="dojo">
          <h1>DOJO CARS</h1>
          <button
            className=" btn btn-primary"
            style={{
              marginRight: "10px",
              marginLeft: "280px",
              marginTop: "10px",
            }}
            onClick={() => handleAddCar()}
          >
            Add Car
          </button>
          <button
            className=" btn btn-primary"
            style={{
              marginTop: "10px",
            }}
            onClick={() => handleAddReview()}
          >
            Add Review
          </button>
          <button
            onClick={() => handleMain()}
            style={{ marginLeft: "10px", marginTop: "10px" }}
            className="btn btn-primary"
          >
            Main
          </button>
        </div>
        <div className="a"></div>
        <div className="row">
          <div className="col-10">
            <table className="table">
              <thead style={{ marginLeft: "-50px" }}>
                <tr>
                  {" "}
                  <th>Car Images</th>
                  <th>CarName</th>
                  <th>Specifications</th>
                  <th>Price</th>
                  <th>Time</th>
                  <th>Edit</th>
                  <th>Actions Available</th>
                </tr>
              </thead>
              <tbody>
                {cars
                  .sort((a, b) => a.carName.localeCompare(b.carName))
                  .map((element, index) => (
                    <tr key={index}>
                      {/* <td>{element.carImg}</td> */}
                      {/* <Link> */}
                      <td>
                        <div
                          style={{
                            width: "250px",
                            height: "190px",
                          }}
                        >
                          <ReactImageMagnify
                            {...{
                              smallImage: {
                                alt: "Car Images",
                                isFluidWidth: true,
                                src: element.carImg,
                              },
                              largeImage: {
                                src: element.carImg,
                                width: 600,
                                height: 600,
                              },
                            }}
                          />{" "}
                        </div>
                        {/* <p>
                          {element.carImg && (
                            <img
                              className="table-img"
                              src={element.carImg}
                              alt=""
                            />
                          )}
                        </p> */}
                      </td>

                      <td>{element.carName}</td>
                      <td>{element.specifications}</td>
                      <td>{element.price}</td>
                      <td>{element.time}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary"
                          style={{ background: "blue" }}
                        >
                          {" "}
                          <Link
                            style={{ color: "white" }}
                            to={`/edit/${element._id}`}
                          >
                            EDIT
                          </Link>
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          style={{ marginLeft: "-70px" }}
                        >
                          <Link
                            style={{ color: "white" }}
                            to={`/details/${element._id}`}
                          >
                            DETAILS{" "}
                          </Link>
                        </button>
                        {/* <button
                          //   onClick={() => handleAdopt(element._id, index)}
                          type="button"
                          className="btn btn-primary"
                        >
                          LIKE
                        </button> */}
                        {/* <button
                          onClick={() => handleEdit(element._id, index)}
                          type="button"
                          className="btn btn-danger"
                        >
                          EDIT
                        </button> */}
                        <button
                          style={{ marginLeft: "150px", marginTop: "-70px" }}
                          onClick={() => handleDelete(element._id, index)}
                          type="button"
                          className="btn btn-danger"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCars;
