import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './AddService.css';
const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, errors } = useForm();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const history = useHistory();
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://guarded-sea-90630.herokuapp.com/addSingleService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Service Added successfully!');
                //history.push("/dashboard");
            })
            .catch(error => {
                console.error(error);
                alert('Fill all fields properly.');
            })
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div>
            <div className="title-container d-flex pt-4">
                <h4 className="add-service col-md-3">Add Services</h4>
                <h4 className="col-md-6"></h4>
                <h5 className="u-name col-md-3 justify-content-left pr-5">{loggedInUser.name}</h5>
            </div>
            <form onSubmit={handleSubmit} action="" className="form pl-5 pt-5 add-service-container" >
                <div className="include-btn">

                    <div className="in-container mr-5 ">
                        <div className="">
                            <h6 className="des-label">Service Title</h6>
                            <input onBlur={handleBlur} name="title" required placeholder="Enter title" className="in-block" />
                            {errors.name && <span className="error">Event title is required</span>}

                            <h6 className="des-label">Description</h6>
                            <input onBlur={handleBlur} name="description" className="desc-box" required placeholder="Enter description" />
                            {errors.name && <span className="error">Description is required</span>}
                        </div>
                        <div className="ml-5">
                            <h6 className="des-label">Icon</h6>
                            <input type="file" onChange={handleFileChange} className="file-block" required placeholder="Choose a Image" />
                            {errors.name && <span className="error">Image is required</span>}
                        </div>
                    </div>
                    <input type="submit" className="submit-btn mr-5" />
                </div>
            </form>
        </div>
    );
};

export default AddService;