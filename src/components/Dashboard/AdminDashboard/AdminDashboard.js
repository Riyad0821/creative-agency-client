import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import './AdminDashboard.css';
import logo from '../../../images/logos/logo.png';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { faListAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
const AdminDashboard = () => {
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
                        <div className="mx-5 my-3"><Link className="text-dark" to="/adminServiceList"> <FontAwesomeIcon icon={faListAlt} className="mx-2" />Service List</Link></div>
                        <div className="mx-5 my-3"><Link className="text-dark" to="/addService"><FontAwesomeIcon icon={faPlus} className="mx-2" />Add Service</Link></div>
                        <div className="mx-5 my-3"><Link className="text-dark" to="/makeAdmin"> <FontAwesomeIcon icon={faUserPlus} className="mx-2" />Make Admin</Link></div>
                    </menu>
                    <div>
                        <Route path="/adminServiceList" component={AdminServiceList} />
                        <Route path="/addService" component={AddService} />
                        <Route path="/makeAdmin" component={MakeAdmin} />
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

export default AdminDashboard;