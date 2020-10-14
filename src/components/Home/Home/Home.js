import React from 'react';
import Login from '../../Login/Login';
import WorkCarousel from '../Carousel/WorkCarousel';
import ClientCompany from '../ClientCompany/ClientCompany';
import FeedbackInfo from '../FeedbackInfo/FeedbackInfo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ClientCompany></ClientCompany>
            <ServiceInfo></ServiceInfo>
            <WorkCarousel></WorkCarousel>
            <FeedbackInfo></FeedbackInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;