import React, { useState } from 'react';
import './WorkCarousel.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import firstC from '../../../images/carousel-1.png';
import secondC from '../../../images/carousel-2.png';
import thirdC from '../../../images/carousel-3.png';
import fourthC from '../../../images/carousel-4.png';
import fifthC from '../../../images/carousel-5.png';

const items = [
    {
        src: firstC,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: secondC,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: thirdC,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const WorkCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <div
                    className="d-flex justify-content-center"
                    style={{ backgroundColor: "#111430" }}
                >
                    <img
                        className="m-auto py-md-3 px-3 px-md-0"
                        src={item.src}
                        alt={item.altText}
                        height="450"
                        width="550"
                    />
                </div>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });
    return (
        <div className="carousel-container my-5">
            <h1 className="text-center text-white font-weight-bold pb-5">
                Here are some of <span style={{ color: "#7AB259" }}>our works</span>
            </h1>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className=""
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
};

export default WorkCarousel;
