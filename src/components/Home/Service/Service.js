import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id,title, description, image_url} = props.data;
    return (
        <div className="col">
            <article className="service-col p-5 bg-light shadow-lg rounded-4">
                <p className="mb-4">
                    <img src={image_url} alt="" className="img-fluid" />
                </p>
                <h3 className="fw-bold mb-4">
                   {title}
                </h3>
                <p className="text-muted">
                    {description}
                </p>
                <Link to={`serviceDetails/${id}`}><button className="btn-btn-outline-primary py-2 px-4">Read more</button></Link>
            </article>
        </div>
        // 
    );
};

export default Service;