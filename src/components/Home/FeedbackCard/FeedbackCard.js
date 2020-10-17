import React from 'react';
import './FeedbackCard.css'
const FeedbackCard = ({ feedback }) => {
    return (
        <div className="col-md-4  mb-3 pl-3">
            <div className="p-3 feedback-container">
                <div className="d-flex m-1">
                    <div className="">
                        <img src={feedback.icon} className="" height="74" width="74" alt="" />
                    </div>
                    <div className="pl-3">
                        <h4>{feedback.name}</h4>
                        <h5>{feedback.designation}</h5>
                    </div>
                </div>
                <div className="">
                    <p className="info-item" height="74" width="74">{feedback.description}</p>

                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
