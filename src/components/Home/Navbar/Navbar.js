import React from 'react';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ml-5 mr-5 p-5">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <img src={logo} width="150" height="47" alt=""/>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-5 active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Our Team</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                <button type="button" class="btn btn-dark login-button">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;