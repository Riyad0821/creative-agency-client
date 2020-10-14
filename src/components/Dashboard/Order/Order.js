import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Order.css';
const Order = () => {
    return (
        <div>
            <div className="row d-flex mt-5 pl-5">
            <h1 className="text-left">Order</h1>
            <h1 className="text-right user-name">Name</h1>
            </div>
            <Container className="order-form">
                <Row className="pl-3 py-5">
                    <Col xs={11} md={6}>
                        <form>
                            <input
                                className="form-control input-text"
                                type="email"
                                name="email"
                                placeholder="Your name / Company's name"
                            />

                            <input
                                className="form-control my-3 input-text"
                                type="text"
                                name="name"
                                placeholder="Your Email Address"
                            />
                            <input
                                className="form-control my-3 input-text"
                                type="text"
                                name="name"
                                placeholder="Graphic Design"
                            />

                            <textarea
                                className="form-control details-text"
                                name="message"
                                cols="30"
                                rows="5"
                                placeholder="Project Details"
                            ></textarea>
                            <input
                                className="form-control my-3 input-text"
                                type="text"
                                name="name"
                                placeholder="Price"
                            />
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