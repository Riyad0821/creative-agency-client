import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({});
    return (
        <div>
            <div className="title-container d-flex pt-4">
            <h4 className="add-service col-md-3">Add Services</h4>
            <h4 className="col-md-6"></h4>
            <h5 className="u-name col-md-3 justify-content-left pr-5">Name</h5>
            </div>
            <form action="" className="form pl-5 pt-5 add-service-container" >
                <div className="include-btn">
                    
            <div className="in-container mr-5 "> 
                <div className="">
                    <h6 className="des-label">Service Title</h6>
                    <input name="serviceType" ref={register({ required: true })} placeholder="Enter title" className="in-block" />
                    {errors.name && <span className="error">Event title is required</span>}
                    {/* <label className="des-label" htmlFor="">Description</label> */}
                    <h6 className="des-label">Description</h6>
                    <input name="description" className="desc-box" ref={register({ required: true })} placeholder="Enter description" />
                    {errors.name && <span className="error">Description is required</span>}
                </div>
                <div className="ml-5">
                    <h6 className="des-label">Icon</h6>
                    <input type="file" name="date" className="file-block" ref={register({ required: true })} placeholder="Choose a Image" />
                    {errors.name && <span className="error">Image is required</span>}
                </div>
            </div>
            <input type="submit" className="submit-btn mr-5"/>
            {/* <button className="submit-btn">Submit</button> */}
                </div>
        </form>
        </div>
    );
};

export default AddService;