import React from 'react'

export default function Login() {
    return (
        <div className="container text-white">
    <h1>LOGIN</h1>
    <form>
    <div className="form-group">
      <label >Email address</label>
      <input type="email" className="form-control"  />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control"  />
    </div>
    <button type="submit" className="btn btn-secondary btn-lg">Login</button>
  </form>
    </div>
    )
}
