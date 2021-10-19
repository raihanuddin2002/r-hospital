import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');

    const {signInWithGoogle} = useAuth();

    // Google Sign Up
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((result) => {
            console.log("Login Sucessfully");
            // ...
        }).catch((error) => {
            // ...
        });
    }

    // get email
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    // get pass
    const getPass = (e) => {
        setPassword(e.target.value);
    }
    // get confirm
    const getConfirmPass = (e) => {
       const confirmPass =  e.target.value;
       setConfirmPassword(confirmPass);
    }

    // Manual registration
    const handleRegistration = (e) => {
        e.preventDefault();

        const auth =getAuth();
        console.log(email,password);
        if(password !== confirmPassword){
            return setError("Password not matched!!");
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            
        })
        .catch((error) => {
        });
    }
    return (
        <div className="bg-dark py-5">
            <div className="container text-start p-5 bg-white my-5">
                <div className="row row-cols-lg-2">
                    <div className="col my-auto">
                        <h1 className="mb-5">Sign Up</h1>
                        <form onSubmit={handleRegistration} className="border-0">
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
                                <input onBlur={getEmail} type="email" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                <input onBlur={getPass} type="password" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Confirm Password</label>
                                <input onBlur={getConfirmPass} type="password" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputPassword1"/>
                            </div>
                            <h6 className="mb-3 text-danger">{error}</h6>
                            <button type="submit" className="btn btn-primary px-5 py-3 text-uppercase">Sign Up</button>
                            <div className="my-3 text-center">
                              <Link to="/login"><span>Already has an account?</span></Link>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                    <h3 className="text-center d-none d-md-block">Get Started</h3>
                        <div className="d-none d-md-block">
                            <img className="img-fluid" src="https://i.ibb.co/p0xF8fc/online-registration-sign-up-concept-flat-vector-illustration-young-male-cartoon-character-sitting-hu.jpg" alt="" />
                        </div>
                       
                        <div className="text-center d-flex">
                            <button onClick={handleGoogleSignIn} className="btn btn-danger w-100 me-2">Google</button>
                            <button className="btn btn-dark w-100 me-2">Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;