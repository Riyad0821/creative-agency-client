import React from 'react';
import Contact from '../Contact/Contact';
import './Footer.css'
const Footer = () => {
    return (
        <footer
      style={{
        marginTop: "200px",
        padding: "50px 0",
        backgroundColor: "#fbd062",
        height: '836px'
      }}
    >
      <Contact></Contact>
      <div>
      <p className="text-center pb-2 m-0">
      &copy; Copyright Mohammad Riyad {new Date().getFullYear()}
    </p>
      </div>
      
    </footer>
    );
};

export default Footer;