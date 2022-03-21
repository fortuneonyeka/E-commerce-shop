import React from "react";

const Login = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#loginModal">
  <span className="fa fa-sign-in me-1"></span>Login
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="loginModalLabel">Login</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <button className="btn btn-primary w-100 mb-4 p-2"><span className="fa fa-google m-2"></span>Sign In with Google</button>
        <button className="btn btn-primary w-100 mb-4 p-2"><span className="fa fa-facebook-f m-2"></span>Sign In with Facebook</button>
        <button className="btn btn-primary w-100 mb-2 p-2"><span className="fa fa-linkedin m-2"></span>Sign In with LinkedIn</button>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control p-3" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-outline-primary w-100 mt-3 p-3">Submit</button>
</form>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Login;
