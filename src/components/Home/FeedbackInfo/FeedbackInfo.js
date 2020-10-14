import React from 'react';
import './FeedbackInfo.css';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
const FeedbackInfo = () => {
    const feedbackData = [
        {
            name:'Nash Patrik',
            designation:'CEO, Manpol',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus debitis quia sapiente labore architecto!',
            icon: customer1
        },
        {
            name:'Miriam Barron',
            designation:'CEO, Manpol',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique amet nisi cupiditate autem nemo minima',
            icon: customer2
        },
        {
            name:'Bria Malone',
            designation:'CEO, Manpol',
            description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde nisi repellat, amet eligendi molestias',
            icon: customer3
        }
    ]
    return (
        <section className="mt-5">
            <div className="feedback-title text-center mt-5">
                <h1 className="f-title">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        feedbackData.map(feedback => <FeedbackCard feedback={feedback}> </FeedbackCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeedbackInfo;