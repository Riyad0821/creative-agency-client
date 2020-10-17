import React, { useEffect, useState } from 'react';
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
    const [services, setServices] = useState([]);

    // const handleAddServices = () => {
    //     fetch('https://guarded-sea-90630.herokuapp.com/addServices', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(serviceData)
    //     })
    // }
    // handleAddServices();

    useEffect(() => {
        fetch('https://guarded-sea-90630.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
        }, [])
    return (
        <section className="mt-5">
            <div className="service-title text-center mt-5">
                <h1 className="title">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            </div>
            <div className="d-flex justify-content-center">
                <div>
                {
                        services.length===0 &&
                        <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                      </div>
                        
                    }
                </div>
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceCard service={service} key={service._id}> </ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;