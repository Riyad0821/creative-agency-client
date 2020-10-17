import React from 'react';
import './AdminServiceListInfo.css';
const AdminServiceListInfo = ({item}) => {
    return (
        <div>
            <div className="d-flex flex list-info-title text-secondary p-3">
                    <div className="col-md-2">{item.name}</div>
                    <div className="col-md-3">{item.email}</div>
                    <div className="col-md-2">{item.title}</div>
                    <div className="col-md-3">{item.projectDetails}</div>
                    <div className="col-md-2">
                        <select name="status">
                            <option>Pending</option>
                            <option>Done</option>
                            <option>On going</option>
                        </select>
                    </div>
             </div>
        </div>
    );
};

export default AdminServiceListInfo;