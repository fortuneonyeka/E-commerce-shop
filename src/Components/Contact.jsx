import React from "react";
import contact from "../assests/images/contact.jpeg";

const Contact = () => {
  return (
    <div>
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-12">
            <h1 classNameName=" text-center py-4 my-4 text-info">
              Contact Us for your Enquiries
            </h1>
            <hr />
          </div>
        </div>
        <div classNameName="row">
          <div classNameName="col-md-5 d-flex justify-content-center">
            <img
              src={contact}
              alt="About"
              classNameName="w-100 p-3"
              alt="Contact Us"
              height="500px"
            />
          </div>
          <div classNameName="col-md-6 mt-3">
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
                <button type="submit" classNameName="btn btn-outline-info py-3 w-100 mt-4">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
