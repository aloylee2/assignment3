import React, { useState } from 'react';
import './Volunteer.css';
import { useNavigate } from 'react-router-dom';
import cleaning from '../images/volunteer_cleaning.avif';
import Button from '../components/Button';
import grooming from '../images/volunteer_grooming.jpg';
 
const Volunteer = ({isLoggedIn}) => {

  const navigate = useNavigate();

  const handleButton1Click=()=>{
    console.log('User logged in status:', isLoggedIn);
    if (!isLoggedIn) {
      alert('Not logged in. Unable to Volunteer.');
      navigate('/login')
  } else {
      alert('Thanks for volunteering. We will contact you soon through email.');
      navigate('/')
  }
  }

    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
      };
      const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
      };

  return (
    <>
    <h1 style={{textAlign:'center'}}>Volunteer</h1>
    <div className='volunteer_container_dropdown'>
        <div className='volunteer_header_dropdown' onClick={toggleDropdown1}>
            <h3 style={{margin:0,fontsize:'1.2rem'}}>Click here if you want to help in cleaning the pet home</h3>
        </div>
        {isDropdownOpen1 && (
          <div className='volunteer_dropdown_content'>
             <div className='volunteer_gallery'>
     <div className='volunteer_dog_image_gallery'>
      <img src={cleaning} alt='volunteer' className='dog_image'/>
     </div>
     <div className='gallery_text'>
      <h3 className='cleaning'>Cleaning</h3>
          <p>Information on cleaning.........</p>
              <Button
              label='Register'
              onClick={handleButton1Click}
              className='volunteer_button'
            />
     </div>
      </div>
          </div>
        )}
    </div>

    <div className='volunteer_container_dropdown'>
        <div className='volunteer_header_dropdown' onClick={toggleDropdown2}>
            <h3 style={{margin:0,fontsize:'1.2rem'}}>Click here if you want to help in grooming the pet</h3>
        </div>
        {isDropdownOpen2 && (
          <div className='volunteer_dropdown_content'>
            {isDropdownOpen2 && (
          <div className='volunteer_dropdown_content'>
             <div className='volunteer_gallery'>
     <div className='volunteer_dog_image_gallery'>
      <img src={grooming} alt='volunteer' className='dog_image'/>
     </div>
     <div className='gallery_text'>
      <h3 className='grooming'>Grooming animal</h3>
          <p>Information on Grooming.........</p>
              <Button
              label='Register'
              onClick={handleButton1Click}
              className='volunteer_button'
            />
     </div>
      </div>
          </div>
        )}
          </div>
        )}
    </div>
    
    
    </>
  )
}

export default Volunteer;