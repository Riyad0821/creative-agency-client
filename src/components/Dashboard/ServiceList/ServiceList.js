import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import ServiceListInfo from '../ServiceListInfo/ServiceListInfo';
import './ServiceList.css';
const ServiceList = () => {
    const [loggedInUser] = useContext(UserContext);
    
    return (
        <div>
            <div className="title-container d-flex pt-4">
            <h4 className="add-service col-md-3">Service List</h4>
            <h4 className="col-md-6"></h4>
            <h5 className="u-name col-md-3 justify-content-left pr-5">{loggedInUser.name}</h5>
            </div>
            <div className="service-list-container pt-5 pl-3 pr-5">
                <ServiceListInfo></ServiceListInfo>
            </div>   
        </div>
    );
};

export default ServiceList;