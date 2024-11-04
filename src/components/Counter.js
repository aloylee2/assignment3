import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './Counter.css'; // Optional: Create a CSS file for styling

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    // Check if the element is in view
    if (scrollY + windowHeight >= window.document.body.offsetHeight) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll); // Remove listener after visibility is set
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="counter-container">
      <div className="counter-item">
        <div className="counter-value">
          {isVisible && <CountUp start={0} end={120} duration={2} />}
        </div>
        <div className="counter-label">Animal Rescue</div>
      </div>
      <div className="counter-item">
        <div className="counter-value">
          {isVisible && <CountUp start={0} end={75} duration={2} />}
        </div>
        <div className="counter-label">Found Home for Animal</div>
      </div>
      <div className="counter-item">
        <div className="counter-value">
          {isVisible && <CountUp start={0} end={5000} duration={2} />}
        </div>
        <div className="counter-label">Donation Amount ($)</div>
      </div>
    </div>
  );
};

export default Counter;
