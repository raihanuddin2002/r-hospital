import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className="text-start">
            <HeroSection></HeroSection>
            <Services></Services>

            {/* Dowmload mobile app section */}
             {/* blank */}
             <div className="blank d-none d-lg-block" style={{height:"70px"}}></div>
                <div className="blank d-block d-lg-none" style={{height:"70px"}}></div>
            {/* blank */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h2 className="fw-bold h1 mb-4">
                            Download our mobile apps
                        </h2>
                        <div style={{height: "3px", width: "150px", background: 'black'}}></div>
                        <p className="text-muted fs-5 mb-5 mt-5">
                            Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
                        </p>
                        <button className="btn-btn-outline-primary mb-4">Download</button>
                    </div>
                    <div className="col-lg-6">
                        <p>
                            <img src="https://i.ibb.co/pWm3HBB/trafalgar-illustration-sec03-14th.png" className="img-fluid" alt=""/>
                        </p>
                    </div>
                </div>
            </div>
            {/* blank */}
            <div className="blank d-none d-lg-block" style={{height:"70px"}}></div>
                <div className="blank d-block d-lg-none" style={{height:"70px"}}></div>
            {/* blank */}

            

            {/* Tastimonials */}
            <div className="container rounded-4 py-5 fifth-container">
                <h2 className="fw-bold h1 mb-4 pt-5 text-center text-white">
                    What our customer are saying
                </h2>
                <div className="m-auto" style={{height: '3px', width: '70px', background: 'white'}}></div>

                {/* blank */}
                <div className="blank d-none d-lg-block" style={{height:"80px"}}></div>
                <div className="blank d-block d-lg-none" style={{height:"50px"}}></div>
                {/* blank */}
                <div className="row pb-5 d-flex flex-column flex-column-reverse flex-lg-row ">
                    <div className="col-lg-6 mb-3">
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                            <img src="https://i.ibb.co/th30rz9/Group-5edward.png" className="img-fluid mb-2" alt=""/>
                            <div className="ms-4">
                                <h4 className="text-white fw-bold">Edward Newgate</h4>
                                <p className="fs-5 text-white">
                                    Founder Circle
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5  mb-3">
                        <p className="fs-5 text-white px-2">“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                    </div>
                </div>
            </div>
             {/* blank */}
             <div className="blank d-none d-lg-block" style={{height:"70px"}}></div>
                <div className="blank d-block d-lg-none" style={{height:"70px"}}></div>
            {/* blank */}


            {/* Blogs */}

             {/* blank */}
             <div className="blank d-none d-lg-block" style={{height:"70px"}}></div>
                <div className="blank d-block d-lg-none" style={{height:"70px"}}></div>
            {/* blank */}
            <div className="container">
                <h1 className="text-center mb-4">Check out our latest article</h1>
                <div className="arrow m-auto"></div>
                <div className="row">
                    <div className="row pd row-cols-1 row-cols-lg-3 g-5 d-flex justify-content-center align-items-center">
                        <div className="col">
                            <div className="card border-0 shadow-lg rounded-4">
                                <img src="https://i.ibb.co/42ZY3N5/Mask-Groupinjection.png" className="card-img-top" alt="..."/>
                                <div className="card-body px-5 py-5">
                                    <h5 className="card-title fw-bold mb-3">Disease detection, check up in the laboratory</h5>
                                    <p className="card-text text-muted">In this case, the role of the health laboratory is very important to do a disease detection...
                                        <br/><br/>
                                        <a href="#" className="fs-5 fw-bold text-decoration-none">Read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 shadow-lg rounded-4">
                                <img src="https://i.ibb.co/hDZScYT/Mask-Groupresearch.png" className="card-img-top" alt="..."/>
                                <div className="card-body px-5 py-5">
                                    <h5 className="card-title fw-bold mb-3">Herbal medicines that are safe for consumption</h5>
                                    <p className="card-text text-muted">Herbal medicine is very widely used at this time because of its very good for your health...
                                        <br/><br/>
                                        <a href="#" className="fs-5 fw-bold text-decoration-none">Read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 shadow-lg rounded-4">
                                <img src="https://i.ibb.co/YNwZzvj/Mask-Groupbeauty.png" className="card-img-top" alt="..."/>
                                <div className="card-body px-5 py-5">
                                    <h5 className="card-title fw-bold mb-3">Natural care for healthy facial skin, stay safe</h5>
                                    <p className="card-text text-muted">A healthy lifestyle should start from now and also for your skin health. There are some...
                                        <br/><br/>
                                        <a href="#" className="fs-5 fw-bold text-decoration-none">Read more</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <p className="text-center mt-5">
                    <button className="btn-btn-outline-primary">View all</button>
                </p>
                 {/* blank */}
             <div className="blank d-none d-lg-block" style={{height:"70px"}}></div>
                <div className="blank d-block d-lg-none" style={{height:"70px"}}></div>
            {/* blank */}
            </div>

        </div>
    );
};

export default Home;