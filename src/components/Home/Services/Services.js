import React from 'react';

const Services = () => {
    return (
        <div>
          {/* blank */}
          <div className="blank d-none d-lg-block" style={{height:"70px"}}></div>
                <div className="blank d-block d-lg-none" style={{height:"70px"}}></div>
                {/* blank */}
            <div className="container">
                <h1 className="text-center mb-4 display-5 fw-bold">Our Services</h1>
                <div className="arrow m-auto"></div>
                <p className="mt-4 text-center text-muted">
                    We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
                </p>
                {/* blank */}
                <div className="blank d-none d-lg-block" style={{height:"70px"}}></div>
                <div className="blank d-block d-lg-none" style={{height:"70px"}}></div>
                {/* blank */}
                
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 d-flex align-items-stretch">
                    <div className="col">
                        <article className="p-5 bg-light shadow-lg rounded-4">
                            <p className="mb-4">
                                <img src="https://i.ibb.co/ng9Tc6q/Groupserach.png" alt="" className="img-fluid" />
                            </p>
                            <h3 className="fw-bold mb-4">
                                Search doctor
                            </h3>
                            <p className="text-muted">
                                Choose your doctor from thousands of specialist, general, and trusted hospitals. Get qualified doctors.
                            </p>
                            <button className="btn-btn-outline-primary py-2 px-4">Read more</button>
                        </article>
                    </div>
                    <div className="col">
                        <article className="p-5 bg-light shadow-lg rounded-4">
                            <p className="mb-4">
                                <img src="https://i.ibb.co/9NQ8369/Framebottol.png" alt="" className="img-fluid" />
                            </p>
                            <h3 className="fw-bold mb-4">
                                Online pharmacy
                            </h3>
                            <p className="text-muted">
                                Buy your medicines with our mobile application with a simple delivery system. In this We are best.
                            </p>
                            <button className="btn-btn-outline-primary py-2 px-4">Read more</button>
                        </article>
                    </div>
                    <div className="col">
                        <article className="p-5 bg-light shadow-lg rounded-4">
                            <p className="mb-4">
                                <img src="https://i.ibb.co/Rc5Rs8Q/Frameboard.png" alt="" className="img-fluid" />
                            </p>
                            <h3 className="fw-bold mb-4">
                                Consultation
                            </h3>
                            <p className="text-muted">
                                Free consultation with our trusted doctors and get the best recomendations. Best quality.
                            </p>
                            <button className="btn-btn-outline-primary py-2 px-4">Read more</button>
                        </article>
                    </div>
                    <div className="col">
                        <article className="p-5 bg-light shadow-lg rounded-4">
                            <p className="mb-4">
                                <img src="https://i.ibb.co/7vY12Mf/Framedetals.png" alt="" className="img-fluid"/>
                            </p>
                            <h3 className="fw-bold mb-4">
                                Details info
                            </h3>
                            <p className="text-muted">
                                Choose your doctor from thousands of specialist, general, and trusted hospitals
                            </p>
                            <button className="btn-btn-outline-primary py-2 px-4">Read more</button>
                        </article>
                    </div>
                    <div className="col">
                        <article className="p-5 bg-light shadow-lg rounded-4">
                            <p className="mb-4">
                                <img src="https://i.ibb.co/qRV1SgV/Frameemergency.png" alt="" className="img-fluid" />
                            </p>
                            <h3 className="fw-bold mb-4">
                                Emergency care
                            </h3>
                            <p className="text-muted">
                                You can get 24/7 urgent care for yourself or your children and your lovely family. Stay happy, stay safe :)
                            </p>
                            <button className="btn-btn-outline-primary py-2 px-4">Read more</button>
                        </article>
                    </div>
                    <div className="col">
                        <article className="p-5 bg-light shadow-lg rounded-4">
                            <p className="mb-4">
                                <img src="https://i.ibb.co/gVqRyrh/Frametrocking.png" alt="" className="img-fluid" />
                            </p>
                            <h3 className="fw-bold mb-4">
                                Tracking
                            </h3>
                            <p className="text-muted">
                                Track and save your medical history and health data
                            </p>
                            <button className="btn-btn-outline-primary py-2 px-4">Read more</button>
                        </article>
                    </div>
                </div>
            </div>
            <p className="text-center mt-5">
                <button className="btn-btn-outline-primary my-5">Learn more</button>
            </p>
        </div>
    );
};

export default Services;