import React from 'react';
import WorkCarousel from '../Carousel/WorkCarousel';
import ClientCompany from '../ClientCompany/ClientCompany';
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
        </div>
    );
};

export default Home;