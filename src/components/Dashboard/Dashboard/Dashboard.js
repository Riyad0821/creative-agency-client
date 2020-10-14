import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import UserDashboard from '../UserDashboard/UserDashboard';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <div>
            <UserDashboard></UserDashboard>
        </div>
    );
};

export default Dashboard;