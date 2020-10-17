import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './MakeAdmin.css';
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, errors } = useForm();
    const [info, setInfo] = useState({});
    const history = useHistory();
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('email', info.email);

        fetch('https://guarded-sea-90630.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Admin Added successfully!');
            })
            .catch(error => {
                console.error(error);
            })
            e.preventDefault();
            e.target.reset();
    }
    return (
        <div>
            <div className="title-container d-flex pt-4">
            <h4 className="add-admin col-md-3">Make Admin</h4>
            <h3 className="col-md-6"></h3>
            <h5 className="u-name col-md-3 justify-content-left pr-5">{loggedInUser.name}</h5>
            </div>
            <form onSubmit={handleSubmit} action="" className="form pl-5 pt-5 add-admin-container" >
                <div className="include-btn">
                    
            <div className="make-admin-container mr-5"> 
                <div className="">
                    <h6 className="des-label">Service Title</h6>
                    <input onBlur={handleBlur} name="email" ref={register({ required: true })} placeholder="jon@gmail.com" className="in-block" />
                    {errors.name && <span className="error">Email is required</span>}
                    
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