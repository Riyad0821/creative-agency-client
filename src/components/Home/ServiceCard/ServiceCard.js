import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceCard.css'
const ServiceCard = ({service}) => {
    const history = useHistory();
    const handleAddService = (serviceTitle) => {
        history.push("/dashboard");
    }
    return (
        <div className="col-md-4 service-container" onClick={() => handleAddService(service.title)}>
            <div className=" service-card text-center p-5">
            {
                service.icon.img ? <img src={`data:image/png;base64,${service.icon.img}`} className="info-img info-item" height="74" width="74"  alt=""/> :  <img src={service.icon} className="info-img info-item" height="74" width="74"  alt=""/>
            }
            <h5 className="info-item" height="74" width="74">{service.title}</h5>
            <p className="info-item" height="74" width="74">{service.description}</p>
            </div>
        </div>
    );
};
export default ServiceCard;


