import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { UserContext } from '../../../App';
import './Order.css';
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const [info, setInfo] = useState({});
        const [file, setFile] = useState(null);
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
            formData.append('name', info.name);
            formData.append('email', info.email);
            formData.append('title', info.title);
            formData.append('projectDetails', info.projectDetails);
            formData.append('price', info.price);
    
            fetch('http://localhost:5000/addOrder', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert('Order Submitted successfully!');
                    
                })
                .catch(error => {
                    console.error(error)
                })
                e.preventDefault();
                e.target.reset();
        }

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
                                className="form-control input-text"
                                type="text"
                                name="name"
                                placeholder="Your name / Company's name"
                            />

                            <input
                                onBlur={handleBlur}
                                className="form-control my-3 input-text"
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                            />
                            <input
                                onBlur={handleBlur}
                                className="form-control my-3 input-text"
                                type="text"
                                name="title"
                                placeholder="Graphic Design"
                            />

                            <textarea
                                onBlur={handleBlur}
                                className="form-control details-text"
                                name="projectDetails"
                                cols="30"
                                rows="5"
                                placeholder="Project Details"
                            ></textarea>
                            <div className="d-flex">
                                <input
                                    onBlur={handleBlur}
                                    className="form-control my-3 price-text"
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                />
                                <input
                                onChange={handleFileChange}
                                className="form-control my-3 ml-3 price-text "
                                type="file"
                                />
                            </div>
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
export default Order;