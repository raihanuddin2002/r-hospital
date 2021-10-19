import React from 'react';
import { Link } from 'react-router-dom';

const OurService = (props) => {
    const {id,title, description,doctor_name, degree, image_url} = props.data;
    return (
        <div className="col">
            <div className="card mb-3 bg-skyblue">
                <div className="row g-0">
                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                        <img src={image_url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title fs-1">{title}</h5>
                        <p className="card-text">{description}</p>
                        <h4 className="card-text">{doctor_name} ({degree})</h4>
                        <Link to={`serviceDetails/${id}`}><button className="bg-dark mt-3 py-2 px-4 w-100 border-0 text-white">Read more</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;