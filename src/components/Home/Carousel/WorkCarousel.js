import React from 'react';
import './WorkCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import firstC from '../../../images/carousel-1.png';
import secondC from '../../../images/carousel-2.png';
import thirdC from '../../../images/carousel-3.png';
import fourthC from '../../../images/carousel-4.png';
import fifthC from '../../../images/carousel-5.png';
const WorkCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel autoPlay className="p-5 carousel">
                <div className="carousel">
                    <img className="car-img" src={firstC}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div className="carousel">
                    <img className="car-img" src={secondC} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="carousel">
                    <img className="car-img" src={thirdC} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default WorkCarousel;
