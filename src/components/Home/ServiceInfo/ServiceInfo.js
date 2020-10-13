import React from 'react';
import './ServiceInfo.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';

const serviceData = [
    {
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product',
        icon: service1
    },
    {
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out',
        icon: service2
    },
    {
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general',
        icon: service3
    }
]
const ServiceInfo = () => {
    return (
        <section className="mt-5">
            <div className="service-title text-center mt-5">
                <h1 className="title">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceCard service={service}> </ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;