import React, { useEffect, useState } from 'react';
import './FeedbackInfo.css';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';

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
const FeedbackInfo = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    
    // const handleAddServices = () => {
    //     fetch('http://localhost:5000/addFeedbacks', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(feedbackData)
    //     })
    // }
    // handleAddServices();

    useEffect(() => {
        fetch('http://localhost:5000/feedbacks')
        .then(res => res.json())
        .then(data => setFeedbacks(data))
        }, [])
    return (
        <section className="mt-5">
            <div className="feedback-title text-center mt-5">
                <h1 className="f-title">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
            </div>
            <div className="d-flex justify-content-center">
                <div>
                {
                        feedbacks.length===0 &&
                        <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                      </div>
                        
                    }
                </div>
                <div className="w-75 row mt-5 pt-5">
                    {
                        feedbacks.map(feedback => <FeedbackCard feedback={feedback}> </FeedbackCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeedbackInfo;