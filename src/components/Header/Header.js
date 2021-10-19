import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    // const allContext= useContext(AuthContext);
    // const {user,logOut} = allContext;
    const {user, logOut} = useAuth();
    return (
        <div className="sticky-top bg-white">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <span className="navbar-brand text-primary">R HOSPITAL</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fw-bold text-uppercase text-dark">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                         <Link className="nav-link text-dark" to="/our-services">Our Services</Link>
                        </li>
                        <li className="nav-item">
                         <Link className="nav-link text-dark" to="/blog">Blog</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fw-bold">
                        {!user && <li className="nav-item text-uppercase">
                            <Link className="nav-link text-dark px-4" to="/login">Log in</Link>
                        </li>}
                        {user && <li className="nav-item text-uppercase" onClick={logOut}>
                            <Link className="nav-link text-dark px-4" to="/login">Log out</Link>
                        </li>}
                       {!user && <li className="nav-item">
                            <Link className="nav-link" to="/signup"><button className="btn-btn fw-bold text-uppercase rounded-2">Sign up</button></Link>
                        </li>}
                       {user.email && <li className="nav-item">
                            <Link className="nav-link" to="/"><button className="btn-btn fw-bold text-uppercase rounded-2">{user.displayName}</button></Link>
                        </li>}
                    </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;