import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div className="bg-dark py-5">
            <div className="container text-start p-5 bg-white my-5">
                <div className="row row-cols-lg-2">
                    <div className="col my-auto">
                        <h1 className="mb-5">Sign Up</h1>
                        <form className="border-0">
                            <div className="mb-3 row row-cols-md-2">
                               <div>
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">First Name</label>
                                    <input type="text" className="form-control border-0 border-bottom border-2 border-dark" />
                               </div>

                               <div>
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Last Name</label>
                                    <input type="text" className="form-control border-0 border-bottom border-2 border-dark" />
                               </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                <input type="email" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                <input type="password" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Confirm Password</label>
                                <input type="password" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputPassword1"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary px-5 py-3 text-uppercase">Sign Up</button>
                            <div className="mt-3 text-center">
                              <Link to="/login"><span>Already has an account?</span></Link>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                    <h3 className="text-center">Get Started</h3>
                        <div>
                            <img className="img-fluid" src="https://i.ibb.co/p0xF8fc/online-registration-sign-up-concept-flat-vector-illustration-young-male-cartoon-character-sitting-hu.jpg" alt="" />
                        </div>
                       
                        <div className="text-center d-flex">
                            <button onClick={signInWithGoogle} className="btn btn-danger w-100 me-2">Google</button>
                            <button className="btn btn-dark w-100 me-2">Github</button>
                            <button className="btn btn-primary w-100">Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;