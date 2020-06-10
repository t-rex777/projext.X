import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


export default function SignUp() {
  return (
    <div className="container signup">
    <h1>SIGN UP</h1>
    <form>
    <div className="form-group">
      <label>Name</label>
      <input type="text" className="form-control" />
    </div>
    <div className="form-group">
      <label >Email address</label>
      <input type="email" className="form-control"  />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control"  />
    </div>
    <div className="form-group">
      <label>Mobile Number</label>
      <input type="number" className="form-control"  />
    </div>
    <Link to="/">
              <button 
              className="btn btn-primary btn-lg"
              variant="outlined">Sign up</button>
            </Link>
    
  </form>
    </div>
  );
}
