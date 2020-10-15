import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';
const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <div>
            <div className="title-container d-flex pt-4">
            <h4 className="add-admin col-md-3">Make Admin</h4>
            <h3 className="col-md-6"></h3>
            <h5 className="u-name col-md-3 justify-content-left pr-5">Name</h5>
            </div>
            <form action="" className="form pl-5 pt-5 add-admin-container" >
                <div className="include-btn">
                    
            <div className="make-admin-container mr-5"> 
                <div className="">
                    <h6 className="des-label">Service Title</h6>
                    <input name="serviceType" ref={register({ required: true })} placeholder="Enter title" className="in-block" />
                    {errors.name && <span className="error">Event title is required</span>}
                    
                </div>
                <div className="pt-5">
                <input type="submit" className="sub-btn"/>
                </div>
            </div>
            
                </div>
        </form>
        </div>
    );
};

export default MakeAdmin;