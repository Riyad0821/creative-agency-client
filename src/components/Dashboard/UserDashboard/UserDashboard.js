import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import { Col, Container, Nav, Row } from 'reactstrap';
import logo from '../../../images/logos/logo.png';
import Home from '../../Home/Home/Home';
import Login from '../../Login/Login';
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import './UserDashboard.css';
import { faCartPlus, faCommentDots, faListAlt} from '@fortawesome/free-solid-svg-icons';
const UserDashboard = () => {
   
    return (
        <div >
            <Router>
                <SplitPane
                    split="vertical"
                    minSize={100}
                    defaultSize={300}
                // resizerStyle={styles}
                >

                    <menu>
                        <div className="logo-container">
                            <img
                                src={logo}
                                width="200"
                                height="60"
                                className="logo"
                                alt="Creative Agency logo"
                            />
                        </div>
                        <div className="mx-5 my-3"><Link className="text-dark" to="/order"> <FontAwesomeIcon icon={faCartPlus} className="mx-2" />Order</Link></div>
                        <div className="mx-5 my-3"><Link className="text-dark" to="/servicelist"><FontAwesomeIcon icon={faListAlt} className="mx-2" />Service List</Link></div>
                        <div className="mx-5 my-3"><Link className="text-dark" to="/review"> <FontAwesomeIcon icon={faCommentDots} className="mx-2" />Review</Link></div>
                    </menu>
                    <div>
                        <Route path="/order" component={Order} />
                        <Route path="/servicelist" component={ServiceList} />
                        <Route path="/review" component={Review} />
                    </div>
                </SplitPane>
            </Router>
            {/* <Container fluid>
                <Row>
                    <Col xs={3} id="sidebar-wrapper">
                        <Nav className="col-md-12 d-none d-md-block bg-light pl-5">
                            <div className="logo-container">
                                <img
                                    src={logo}
                                    width="200"
                                    height="60"
                                    className="logo"
                                    alt="React Bootstrap logo"
                                />
                            </div>
                            <Link to="/login"><button type="button" class="btn">Order</button></Link>
                        </Nav>
                    </Col>
                    <Col xs={9} id="page-content-wrapper">
                        this is a test
                    </Col>
                </Row>

            </Container> */}


        </div>
    );
};

export default UserDashboard;