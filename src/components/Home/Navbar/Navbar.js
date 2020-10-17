import React, { useContext } from 'react';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import {handleSignOut} from '../../Login/LoginManager';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        handleSignOut()
        .then((res) => {
            setLoggedInUser(res);
          });
      };
    return (
        <nav class="navbar navbar-expand-lg navbar-light ml-5 mr-5 p-5">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <img src={logo} width="150" height="47" alt=""/>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-5 active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="/">Our Portfolio</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="/">Our Team</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="/">Contact Us</a>
                    </li>
                </ul>
                {
                    loggedInUser.name ? <Link  to="/"><button type="button" class="btn btn-dark login-button" onClick={signOut}>Log Out</button></Link> : <Link  to="/dashboard"><button type="button" class="btn btn-dark login-button">Login</button></Link>
                }
            </div>
        </nav>
    );
};

export default Navbar;