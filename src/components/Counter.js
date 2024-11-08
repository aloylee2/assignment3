import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import './Counter.css';

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Adjust as needed for when to start counting
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div ref={counterRef} className='counter-container'>
      <div className='counter-item'>
        <div className='counter-value'>
          {isVisible && <CountUp start={0} end={120} duration={2} />}
        </div>
        <div className='counter-label'>Animal Rescue</div>
      </div>
      <div className='counter-item'>
        <div className='counter-value'>
          {isVisible && <CountUp start={0} end={75} duration={2} />}
        </div>
        <div className='counter-label'>Found Home for Animal</div>
      </div>
      <div className='counter-item'>
        <div className='counter-value'>
          {isVisible && <CountUp start={0} end={5000} duration={2} />}
        </div>
        <div className='counter-label'>Donation Amount ($)</div>
      </div>
    </div>
  );
};

export default Counter;
