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
                <h2 className="text-white py-4 mt-3 mt-lg-5 display-3 bg-dark text-center">OUR SERVICES</h2>
                 <div className="row row-cols-1 row-cols-lg-2 g-4 mt-3 my-5">
                    {
                        services.map(service => <OurService key={service.id} data={service}></OurService>)
                    }
                 </div>
             </div>
        </div>
    );
};

export default Ourservices;