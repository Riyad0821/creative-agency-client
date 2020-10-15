import React from 'react';
import './AdminServiceListInfo.css';
const AdminServiceListInfo = () => {
    return (
        <div>
            <div className="d-flex flex list-info-title text-secondary p-3">
                    <div className="col-md-2">Name</div>
                    <div className="col-md-3">Email Id</div>
                    <div className="col-md-2">Service</div>
                    <div className="col-md-3">Project Details</div>
                    <div className="col-md-2">Status</div>
             </div>
        </div>
    );
};

export default AdminServiceListInfo;