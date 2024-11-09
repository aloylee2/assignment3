import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import './Counter.css';
import animalrescue from '../images/animal-welfare.png';
import animalhome from '../images/pet-house.png';
import money from '../images/donate.png';

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current); 
        }
      },
      { threshold: 0.1 } 
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
        <div className='image_animalrescue'>
        <img src={animalrescue} alt=' animalrescue' className='animalrescue'/>
        </div>
        <div className='counter-value'>
          {isVisible && <CountUp start={0} end={120} duration={2} />}
        </div>
        <div className='counter-label'>Animal Rescue</div>
      </div>
      <div className='counter-item'>
      <div className='image_animalhome'>
        <img src={animalhome} alt=' animalhome' className='animalhome'/>
        </div>
        <div className='counter-value'>
          {isVisible && <CountUp start={0} end={75} duration={2} />}
        </div>
        <div className='counter-label'>Found Home for Animal</div>
      </div>
      
      <div className='counter-item'>
      <div className='image_money'>
        <img src={money} alt=' money' className='money'/>
        </div>
        <div className='counter-value'>
          {isVisible && <CountUp start={0} end={5000} duration={2} />}
        </div>
        <div className='counter-label'>Donation Amount ($)</div>
      </div>
    </div>
  );
};

export default Counter;
