import React from 'react';
import { Link } from 'react-router-dom';

const OurService = (props) => {
    const {id,title, description,doctor_name, degree, image_url} = props.data;
    return (
        <div className="col d-flex justify-content-center align-items-stretch">
            <div className="row border w-100">
                <div className="col-md-12 p-5 ourservice-article">
                    <img style={{width:"10%"}} className="img-fluid mb-3" src={image_url} alt="" />
                    <h3 className="text-uppercase">{title}</h3>
                    <p>{description}</p>
                    <h5 className="mb-0">{doctor_name}</h5>
                    <small>({degree})</small>
                    <Link to={`serviceDetails/${id}`}><p  className="m-0 mt-4"><button className="btn btn-primary rounded-0">Read more</button></p></Link>
                </div>

            </div>
        </div>
    );
};

export default OurService;