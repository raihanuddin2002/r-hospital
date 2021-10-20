import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id} = useParams();

    const [services,setServices] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect( () => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    },[])

    useEffect( () =>{
        const singleService = services.find(service => service.id == id);
        setSingleService(singleService);
    },[services]);
    
    
    return (
        <div className="container my-5 py-5">
           <div className="cardd">
            <h5 className="card-header text-center display-4 bg-dark text-white">Service Info</h5>
            <div className="">
            <table className="table table-striped table-bordered border-top-0 fs-4">
                <tbody>
                    <tr>
                    <th scope="row">Service no</th>
                    <td>{singleService?.id}</td>
                    </tr>
                    <tr>
                    <th scope="row">Service Name</th>
                    <td>{singleService?.title}</td>
                    </tr>
                    <tr>
                    <th scope="row">Description</th>
                    <td>{singleService?.description}</td>
                    </tr>
                    <tr>
                    <th scope="row">Doctor name</th>
                    <td>{singleService?.doctor_name}</td>
                    </tr>
                    <tr>
                    <th scope="row">Degree</th>
                    <td>{singleService?.degree}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;