import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import logo from '../../../images/logos/logo.png';
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import './UserDashboard.css';
import { faCartPlus, faCommentDots, faListAlt } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-bootstrap/esm/Switch';
import { UserContext } from '../../../App';
const UserDashboard = () => {
    return (
        <div className="dash">
            <Router>
                <SplitPane
                    split="vertical"
                    minSize={100}
                    defaultSize={300}
                //className="mb-5"
                >

                    <menu>
                        <div className="logo-container">
                            <Link to="/home">
                                <img
                                    src={logo}
                                    width="200"
                                    height="60"
                                    className="logo"
                                    alt="Creative Agency logo"
                                />
                            </Link>
                        </div>
                        <div className="mx-5 my-3 color-btn"><Link className="text-dark" to="/order"> <FontAwesomeIcon icon={faCartPlus} className="mx-2" />Order</Link></div>
                        <div className="mx-5 my-3"><Link className="text-dark" to="/servicelist"><FontAwesomeIcon icon={faListAlt} className="mx-2" />Service List</Link></div>
                        <div className="mx-5 my-3"><Link className="text-dark" to="/review"> <FontAwesomeIcon icon={faCommentDots} className="mx-2" />Review</Link></div>
                    </menu>
                    <div>
                        <Switch>
                            <Route path="/servicelist" component={ServiceList} />
                            <Route path="/review" component={Review} />
                            <Route path="/order" component={Order} />
                        </Switch>
                    </div>
                </SplitPane>
            </Router>
        </div>
    );
};

export default UserDashboard;