import React, { useState, useEffect } from 'react';
import './Feedback.css';

const FeedbackSlideshow = () => {
  
  const feedbacks = [
    "The service is amazing! I've never experience anything like it.(Alan Lee)",
    "The customer service was outstanding. Will definitely recommend.(John Tan)",
    "Adoption was fast. Exceeded my expectations.(Harry)",
    "Amazing experience!(Denny)"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="feedback_container">
      <div className="feedbackSlide">
        <p>{feedbacks[currentIndex]}</p>
      </div>
    </div>
  );
};

export default FeedbackSlideshow;