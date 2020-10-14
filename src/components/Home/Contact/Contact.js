import React from 'react';
import './Contact.css';
import { Col, Container, Row } from "reactstrap";

const Contact = () => {
    return ( <
        Container >
        <
        Row className = "justify-content-center py-5" >
        <
        Col xs = { 11 }
        md = { 6 } >
        <
        h2 className = "font-weight-bold"
        style = {
            { color: "#2D2D2D" } } >
        Let us handle your < br / > project, professionally. <
        /h2> <
        p className = "text-dark pt-3" >
        With well written codes, we build amazing apps
        for all platforms, mobile and web apps in general. <
        /p> <
        /Col>

        <
        Col xs = { 11 }
        md = { 6 } >
        <
        form >
        <
        input className = "form-control email-name-text"
        type = "email"
        name = "email"
        placeholder = "Your Email Address" /
        >

        <
        input className = "form-control my-3 email-name-text"
        type = "text"
        name = "name"
        cols = "30"
        rows = "5"
        placeholder = "Your name / Company's name" /
        >

        <
        textarea className = "form-control"
        name = "message"
        cols = "30"
        rows = "10"
        placeholder = "Your message" >
        < /textarea> <
        input type = "submit"
        value = "Send"
        className = "btn mt-3 message-btn text-white"
        style = {
            { backgroundColor: 'rgba(17, 20, 48, 1)' } }
        /> <
        /form> <
        /Col> <
        /Row> <
        /Container>
    );
};

export default Contact;