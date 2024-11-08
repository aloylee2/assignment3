import React, { useState } from 'react';
 
const Volunteer = ({isloggedIN}) => {

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
    <h1>Volunteer</h1>
    <div className='volunteer_container_dropdown'>
        <div className='volunteer_header_dropdown' onClick={toggleDropdown1}>
            <h3 style={{}}>Click here if you want to help in cleaning the pet home</h3>

        </div>

    </div>
    
    
    </>
  )
}

export default Volunteer;