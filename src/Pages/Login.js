import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="register container w-50 position-absolute start-50 top-50 translate-middle">
        <form >

            <div className="form-group">
                <div className="form-label">Email</div>
                <input type="email" name="email" className="form-control" />
            </div>

            <div className="form-group">
                <div className="form-label">Password</div>
                <input type="password" name="password" className="form-control" />
            </div>

           

            <div className="col-12">
               <button className="btn btn-md btn-success my-3 w-100" type='button'>Login</button>
            </div>

            <div className="d-flex justify-content-center gap-2">
                <p>New user?</p>
                <Link to="/home">Register</Link>
            </div>
           
        </form>
    </div>
  )
}

export default Login