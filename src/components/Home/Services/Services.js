import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    },[])

    const displayServices = services.filter(service => service.id <= 6);

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
                    {
                        displayServices.map(service => <Service key={service.id} data={service}></Service>)
                    }
                </div>
            </div>
            <p className="text-center mt-5">
                <Link to="/our-services"><button className="btn-btn-outline-primary my-5">See more</button></Link>
            </p>
        </div>
    );
};

export default Services;