import React from 'react';
import './HeaderMain.css';
import headerImg from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <div>
            <main className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 className="header-title">Let's Grow Your <br/> Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta officiis sit inventore incidunt. Deleniti, quia.</p>
                    <button type="button" class="btn btn-dark hire-button">Hire Us</button>
                </div>
                <div className="col-md-6">
                    <img src={headerImg} width="624" height="422" alt="" className="img-fluid"/>
                </div>

            </main>
        </div>
    );
};

export default HeaderMain;