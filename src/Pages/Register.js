import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="register container w-50 position-absolute start-50 top-50 translate-middle">
        <form >
           <div className="row align-items-center">

            <div className="col-md-6 col-12">
                <div className="form-label">FirstName</div>
                <input type="text" name="first_name" className="form-control" />
            </div>

            <div className="col-md-6 col-12">
                <div className="form-label">LastName</div>
                <input type="text" name="last_name" className="form-control" />
            </div>

            <div className="col-md-6 col-12">
                <div className="form-label">Email</div>
                <input type="email" name="email" className="form-control" />
            </div>

            <div className="col-md-6 col-12">
                <div className="form-label">Password</div>
                <input type="password" name="password" className="form-control" />
            </div>

            <div className="col-md-6 col-12">
                <div className="form-label">Photo</div>
                <input type="file" name="photo" className="form-control" />
            </div>

            <div className="col-md-6 col-12">
                <div className="form-label">UserName</div>
                <input type="text" name="username" className="form-control" />
            </div>

            <div className="col-12">
               <button className="btn btn-md btn-success my-3 w-100" type='button'>Signup</button>
            </div>

            <div className="d-flex justify-content-center gap-2">
                <p>Already Have An Account?</p>
                <Link to="/login">Login</Link>
            </div>
           


           </div>
        </form>
    </div>
  )
}

export default Register