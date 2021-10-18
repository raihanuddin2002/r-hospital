import React from 'react';

const HeroSection = () => {
    return (
            <div className="container text-start">
                {/* blank */}
                <div className="blank d-none d-lg-block" style={{height:"70px"}}></div>
                <div className="blank d-block d-lg-none" style={{height:"70px"}}></div>
                {/* blank */}

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="fw-bold display-5">
                            Virtual healthcare for you
                        </h1>
                        <p className="text-muted fs-5 mb-4 mt-5">
                            R Hospital provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                        </p>
                        <button className="btn-btn">Consult today</button>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            <img src="https://i.ibb.co/wyTY5xn/illustrationhero.png" className="img-fluid" alt="" />
                        </p>
                    </div>
                </div>
            </div>
       
    );
};

export default HeroSection;