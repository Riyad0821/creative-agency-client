import React, { useContext, useEffect, useState } from 'react';
import './AdminServiceList.css';
import AdminServiceListInfo from '../AdminServiceListInfo/AdminServiceListInfo';
import { UserContext } from '../../../App';
const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://guarded-sea-90630.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    return (
        <div>
            <div className="title-container d-flex pt-4">
            <h4 className="add-service col-md-3">Service List</h4>
            <h4 className="col-md-6"></h4>
            <h5 className="u-name col-md-3 justify-content-left pr-5">{loggedInUser.name}</h5>
            </div>
            <div className="service-list-container pt-3 pb-5 pl-3 pr-5">
                <div className="bg-white p-3 second-layer-container">
                    <div className="d-flex flex list-title text-secondary p-3">
                        <div className="col-md-2">Name</div>
                        <div className="col-md-3">Email Id</div>
                        <div className="col-md-2">Service</div>
                        <div className="col-md-3">Project Details</div>
                        <div className="col-md-2">Status</div>
                    </div>
                    <div>
                    {
                        list.length === 0 &&
                        <div class="d-flex justify-content-center mt-5">
                            <div class="spinner-border" role="status"></div>
                            <strong >Loading...</strong>
                        </div>

                    }
                </div>
                    <div>
                        {
                            list.map(item => <AdminServiceListInfo item ={item}></AdminServiceListInfo>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;