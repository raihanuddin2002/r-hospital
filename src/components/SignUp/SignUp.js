import {getAuth, updateProfile  } from '@firebase/auth';
import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    // History & location
    const location = useLocation();
    //const redirect_url = location.state?.from || "/home";
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const [signUpMessage, setSignUpMessage] = useState(''); // success signup message
    
    const {signInWithGoogle,signUpManually} = useAuth();
    const auth =getAuth();

    // Google Sign Up
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
               setSignUpMessage("Sign Up Successful :)")

            }).catch((error) => {
                setError(error.message);
                // ...
            })
        setSignUpMessage("");
    }

    // get name
    const getName = (e) => {
        setName(e.target.value);
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

    /*===========================
     *  Manual registration 
     *==========================*/
    const handleRegistration = (e) => {
        e.preventDefault();

        console.log(name,email,password);

        // Password & confirm password match
        if(password !== confirmPassword){
            return setError("Password not matched!!");
        }else{
            setError('');
        }

        // Manual create account
            signUpManually(name,email,password)
                .then((result) => {
                    updateProfile(auth.currentUser, {
                    displayName: name})
                    .then(() => {
                        setSignUpMessage("Your New Account Created Succufully :)");
                        e.target.reset();
                    })
                    .catch((error) => {
                        setError(error.message);
                    });
                   
                })
                .catch((error) => {
                    setError(error.message);
                })

           
    }
   
    return (
        <div className="bg-dark py-5">
            <div className="container text-start p-5 bg-white my-5">
                <div className="row row-cols-lg-2">
                    <div className="col my-auto">
                        {signUpMessage && <h6 className="text-success text-end fs-5" role="alert">{signUpMessage}</h6>}
                        <h1 className="mb-5">Sign Up</h1>
                        <form onSubmit={handleRegistration} className="border-0">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Name</label>
                                <input onBlur={getName} type="text" className="form-control border-0 border-bottom border-2 border-dark" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                <input onBlur={getEmail} type="email" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                <input onBlur={getPass} type="password" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputPassword1" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Confirm Password</label>
                                <input onBlur={getConfirmPass} type="password" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputPassword1" required/>
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