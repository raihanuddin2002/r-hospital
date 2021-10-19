import React, { useEffect } from 'react';
import { useState } from 'react';
import OurService from './OurService/OurService';

const Ourservices = () => {
    const [services, setservices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setservices(data))
    },[]);
    return (
        <div>
             <div className="container">
             <h2 className="card-header text-white courses-heading py-4 mt-lg-5 display-3 bg-dark my-3 text-center">OUR SERVICES</h2>
                 <div className="row row-cols-1 row-cols-lg-2">
                    {
                        services.map(service => <OurService key={service.id} data={service}></OurService>)
                    }
                 </div>
             </div>
        </div>
    );
};

export default Ourservices;