import React from "react";
import { NavLink } from "react-router-dom";
import about from '../assests/images/about.jpeg'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ducimus ad pariatur ipsa incidunt sit vero autem facere
              vitae dignissimos sapiente, deserunt nulla doloremque aut
              consequatur possimus. Cumque quos totam exercitationem assumenda
              adipisci beatae illo perferendis reprehenderit architecto
              laboriosam hic amet asperiores, natus labore ipsa sunt sint
              doloribus perspiciatis earum laborum delectus ullam? Odit, quod
              omnis illo eaque reiciendis odio soluta ratione molestias
              doloremque quam eius in porro? Corporis sint placeat rem, minus
              vitae laborum dolorem. Optio odit maiores quo eveniet, perferendis
              pariatur eum alias assumenda modi voluptate nam ut eligendi
              exercitationem quos corrupti dignissimos dolorum quasi libero
              error sequi!
            </p>
            <NavLink to="/contact" className="btn btn-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center ">
            <img src={about} alt="About" className="w-100 p-5"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
