import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { UserContext } from '../../../App';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';
import './Dashboard.css';
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/checkUser', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
            });
    }, [])

    const signOut = () =>{
        setLoggedInUser({});
        sessionStorage.clear();
    
      }
    return (
        <div>
            {
                (isAdmin ? <AdminDashboard></AdminDashboard> : <UserDashboard></UserDashboard>)
            }
        </div>
    );
};

export default Dashboard;