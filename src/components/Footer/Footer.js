import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <section class="bg-dark py-5">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                            <div class="col p-5">
                                <div>
                                    <h2 className="text-primary mb-4">R HOSPITAL</h2>
                                    <p class="text-white">
                                        Millions of people of all ages and from around the world are improving their lives with us
                                    </p>
                                </div>
                            </div>

                            <div class="col p-5">
                                <p class="fw-bold text-white">Department</p>
                                <p class="text-white">Sergery</p>
                                <p class="text-white">X-Ray</p>
                                <p class="text-white">Medicine</p>
                                <p class="text-white">Operation Theatre(OT)</p>
                                <p class="text-white">Dental Surgery</p>
                            </div>

                            <div class="col p-5">
                                <p class="fw-bold text-white">Services</p>
                                <p class="text-white">Search doctor</p>
                                <p class="text-white">Online Phamercy</p>
                                <p class="text-white">Consultation</p>
                                <p class="text-white">Emergency care</p>
                            </div>

                            <div class="col p-5">
                                <p class="fw-bold text-white">Teams</p>
                                <p class="text-white">MBBS</p>
                                <p class="text-white">FCPS</p>
                                <p class="text-white">PHD</p>
                                <p class="text-white">Digital Marketing</p>
                            </div>
                                

                        </div>
                    </div>
                </section>
                <p className="text-center text-white bg-primary py-3">©R HOSPITAL PTY LTD 2020. All rights reserved</p>
            </footer>                                   
           
        </div>
    );
};

export default Footer;