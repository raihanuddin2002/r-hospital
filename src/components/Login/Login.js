import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation,useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();

    // History & location
    const location = useLocation();
    console.log(location)
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";
    // const redirect_url = "/serviceDetails";
    console.log(redirect_url)

    // Google Login
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((result) => {
            history.push(redirect_url);
            console.log("Login Sucessfully");
            // ...
        }).catch((error) => {
            // ...
        });
    }
    
    //manual login
    const handleManualLogin = (e) => {
        e.preventDefault();
    }
    return (
        <div className="bg-dark py-5">
            <div className="container text-start p-5 bg-white my-5">
                <div className="row row-cols-lg-2">
                    <div className="col my-auto">
                        <h1 className="mb-5">Log In</h1>
                        <form onSubmit={handleManualLogin} className="border-0">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                <input type="email" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                <input type="password" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputPassword1"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary px-5 py-3 text-uppercase fs-5">Log in</button>
                            <div className="my-3 text-center">
                              <Link to="/signup"><span>Create a new account?</span></Link>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <h3 className="text-center d-none d-md-block">Get Started</h3>
                        <div className="d-none d-md-block">
                            <img className="img-fluid" src="https://i.ibb.co/p0xF8fc/online-registration-sign-up-concept-flat-vector-illustration-young-male-cartoon-character-sitting-hu.jpg" alt="" />
                        </div>
                        <div className="text-center d-flex">
                            <button  onClick={handleGoogleSignIn} className="btn btn-danger w-100 me-2">Google</button>
                            <button className="btn btn-dark w-100 me-2">Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;