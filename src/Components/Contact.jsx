import React from "react";
import contact from "../assests/images/contact.jpeg";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className=" text-center py-4 my-4 text-info">
              Contact Us for your Enquiries
            </h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src={contact}
              alt="About"
              className="w-100 p-3"
              alt="Contact Us"
              height="500px"
            />
          </div>
          <div className="col-md-6 mt-3">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control p-3"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"required
                />

                <label htmlFor="exampleForm" className="form-label">
                  Full Name
                </label>
                <input
                  type="tetx"
                  className="form-control p-3"
                  id="exampleForm"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
                <button type="submit" className="btn btn-outline-info py-3 w-100 mt-4">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
