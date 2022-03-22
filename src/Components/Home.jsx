import React from "react";
import Iphone1 from "../assests/images/home/apple-iphone-12-pro-2.jpeg"
import Iphone2 from "../assests/images/home/Gj4BpxWHmrcvZmjaW9nmwf.jpeg"
import Iphone3 from "../assests/images/home/jbareham_171101_2099_A_0088_02.jpeg"
import Iphone4 from "../assests/images/home/photo-1603791239531-1dda55e194a6.jpeg"
const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Iphone1} className="d-block w-100" alt="IPHON1" height="1000" />
          </div>
          <div className="carousel-item">
            <img src={Iphone2}className="d-block w-100" alt="IPHON2"  height="1000"/>
          </div>
          <div className="carousel-item">
            <img src={Iphone3} className="d-block w-100" alt="IPHONE3"  height="1000"/>
          </div>
          <div className="carousel-item">
            <img src={Iphone4} className="d-block w-100" alt="IPHONE4" height="1000"/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
