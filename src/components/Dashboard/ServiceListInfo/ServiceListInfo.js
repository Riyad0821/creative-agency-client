import React from 'react';
import './ServiceListInfo.css';
import icon from '../../../images/icons/service1.png';
const ServiceListInfo = () => {
    return (
        <div className="col-md-4">
            <div height="300 " width="415" className="service-list-card p-3  bg-white">
                <div className="d-flex">
                <img src={icon} className="info-img info-item" height="74" width="74"  alt=""/>
                <p className="status-box py-2 px-3 mr-3 mt-2">Pending</p>
                </div>
                <h5 className="info-item" height="74" width="74">Web & Mobile design</h5>
                <p className="info-item" height="74" width="74">We craft stunning and amazing web UI, using a well drafted UX to fit your product</p>
            </div>
        </div>
    );
};

export default ServiceListInfo;