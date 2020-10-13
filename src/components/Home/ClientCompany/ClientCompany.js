import React from 'react';
import './ClientCompany.css';
import slackLogo from '../../../images/logos/slack.png';
import airbnbLogo from '../../../images/logos/airbnb.png';
import googleLogo from '../../../images/logos/google.png';
import uberLogo from '../../../images/logos/uber.png';
import netflixLogo from '../../../images/logos/netflix.png';
const ClientCompany = () => {
    return (
        <div className="row d-flex justify-content-center client-company-container m-5 p-3">
            <img src={slackLogo} width="140" height="36" alt="" className="client-logo"/>
            <img src={googleLogo} width="129" height="44" alt="" className="client-logo"/>
            <img src={uberLogo} width="99" height="56" alt="" className="client-logo"/>
            <img src={netflixLogo} width="120" height="67" alt="" className="client-logo"/>
            <img src={airbnbLogo} width="161" height="51" alt="" className="client-logo"/>
            
        </div>
    );
};

export default ClientCompany;