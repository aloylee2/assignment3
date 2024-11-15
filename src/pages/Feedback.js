import React, { useState, useEffect } from 'react';
import './Feedback.css';
import profile from '../images/Profile_Picture.png'; 

const FeedbackSlideshow = () => {
 
  const feedbacks = [
    {
      text: "The service is amazing!",
      name: "Alan Lee",
      profileImg: profile, 
      rating: 5,
    },
    {
      text: "The customer service was outstanding.",
      name: "John Tan",
      profileImg: profile,
      rating: 4,
    },
    {
      text: "Adoption was fast. Exceeded my expectations.",
      name: "Harry",
      profileImg: profile,
      rating: 5,
    },
    {
      text: "Amazing experience!",
      name: "Denny",
      profileImg: profile,
      rating: 3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

 
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  const { text, name, profileImg, rating } = feedbacks[currentIndex];

  return (
    <div className="feedback_container">
      <div className="feedbackSlide">
        <img src={profileImg} alt={`${name}'s profile`} className="profileIcon" />
        <p className="feedbackText">"{text}"</p>
        <p className="feedbackName">- {name}</p>
        <div className="starRating">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default FeedbackSlideshow;
