import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
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
                         <Link className="nav-link text-dark" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                         <Link className="nav-link text-dark" to="/notices">Notices</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/gellary">Gellary</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fw-bold">
                        <li className="nav-item text-uppercase">
                            <Link className="nav-link text-dark px-4" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup"><button className="btn-btn fw-bold text-uppercase rounded-2">Sign up</button></Link>
                        </li>
                    </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;