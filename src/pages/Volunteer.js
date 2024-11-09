import React, { useState } from 'react';
import './Volunteer.css';
import { useNavigate } from 'react-router-dom';
import gallery from '../images/dog_gallery.avif';
import Button from '../components/Button';
 
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
      <img src={gallery} alt='volunteer' className='dog_image'/>
     </div>
     <div className='gallery_text'>
      <h2>Gallery Pets</h2>
          <p>Thank you for your interest in adopting an animal! All visits are now by appointment only and slots will only be released 7 days beforehand. Book an appointment here.

              If you are looking for a missing pet, please visit our lost & found page.</p>
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
            <h3 style={{margin:0,fontsize:'1.2rem'}}>Click here if you want to help in cleaning the pet home</h3>
        </div>
        {isDropdownOpen2 && (
          <div className='volunteer_dropdown_content'>
            {isDropdownOpen2 && (
          <div className='volunteer_dropdown_content'>
             <div className='volunteer_gallery'>
     <div className='volunteer_dog_image_gallery'>
      <img src={gallery} alt='volunteer' className='dog_image'/>
     </div>
     <div className='gallery_text'>
      <h2>Gallery Pets</h2>
          <p>Thank you for your interest in adopting an animal! All visits are now by appointment only and slots will only be released 7 days beforehand. Book an appointment here.

              If you are looking for a missing pet, please visit our lost & found page.</p>
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