import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Reveiw.css';
const Review = () => {
    return (
        <div>
            <div className="title-container d-flex pt-4">
            <h4 className="add-service col-md-3">Order</h4>
            <h4 className="col-md-6"></h4>
            <h5 className="u-name col-md-3 justify-content-left pr-5">Name</h5>
            </div>
            <Container className="order-form">
                <Row className="pl-3 py-5">
                    <Col xs={11} md={6}>
                        <form>
                            <input
                                className="form-control input-text"
                                type="email"
                                name="email"
                                placeholder="Your name"
                            />

                            <input
                                className="form-control my-3 input-text"
                                type="text"
                                name="name"
                                placeholder="Company's name, Designation"
                            />
                            <textarea
                                className="form-control details-text"
                                name="message"
                                cols="30"
                                rows="5"
                                placeholder="Description"
                            ></textarea>
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