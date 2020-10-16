import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { UserContext } from '../../../App';
import './Reveiw.css';
const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, errors } = useForm();
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(info);
        formData.append('name', loggedInUser.name);
        formData.append('email', loggedInUser.email);
        formData.append('designation', info.designation);
        formData.append('description', info.description);
        formData.append('icon', loggedInUser.photo);

        fetch('http://localhost:5000/addSingleReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Feedback Added successfully!');
                //history.push("/dashboard");
            })
            .catch(error => {
                console.error(error);
                //alert('Fill all fields properly.');
            })
            e.preventDefault();
            e.target.reset();
    }






    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const { register, handleSubmit, errors } = useForm();

    // const onSubmit = (data) => {
    //     console.log(data);
    //     const reviewDetails = {...data};
    //     fetch('http://localhost:5000/addSingleReview', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(reviewDetails)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             alert('Review Added successfully!');
    //             //history.push('/profile');
    //         }
    //     })
    // };
    return (
        <div>
            <div className="title-container d-flex pt-4">
            <h4 className="add-service col-md-3">Order</h4>
            <h4 className="col-md-6"></h4>
            <h5 className="u-name col-md-3 justify-content-left pr-5">{loggedInUser.name}</h5>
            </div>
            <Container className="order-form">
                <Row className="pl-3 py-5">
                    <Col xs={11} md={6}>
                        <form onSubmit={handleSubmit}>
                            <input
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                className="form-control input-text"
                                type="text"
                                name="name"
                                value={loggedInUser.name}
                                placeholder="Your name"
                            />
                            {/* {errors.name && <span className="text-danger">This field is required</span>} */}

                            <input
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                className="form-control my-3 input-text"
                                type="text"
                                name="designation"
                                placeholder="Designation, Company's name"
                            />
                            {errors.designation && <span className="text-danger">This field is required</span>}
                            <textarea
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                className="form-control details-text"
                                name="description"
                                cols="30"
                                rows="5"
                                placeholder="Description"
                            ></textarea>
                            {errors.description && <span className="text-danger">This field is required</span>}
                            <input
                                type="submit"
                                value="Send"
                                className="btn mt-3 order-btn text-white"
                                style={{ backgroundColor: 'rgba(17, 20, 48, 1)' }}
                            />
                            
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;