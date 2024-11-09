import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container'>
      <div className='footer_container'>
        <div className='footer'>
          <h4 className='footer_heading'>Quick Links</h4>
          <ul className='footer_1'>
            <li><Link to='/about' className='footer_link'>About Us</Link></li>
            <li><Link to='/view_gallery' className='footer_link'>View pet</Link></li>
            <li><Link to='/Volunteer' className='footer_link'>Volunteer</Link></li>
            <li><Link to='/Donate' className='footer_link'>Donate</Link></li>
          </ul>
        </div>      
        <div className='footer'>
          <h4 className='footer_heading'>Contact Us</h4>
          <p className='footer_contact'>Email: info@example.com</p>
          <p className='footer_contact'>Phone: (123) 456-7890</p>
          <p className='footer_contact'>Location: 123 pet haven st.</p>
        </div>
        <div className='footer'>
          <h4 className='footer_heading'>Follow Us</h4>
          <div className='footer_social'>
            <Link to='https://facebook.com' className='footer_link'>Facebook</Link>
            <Link to='https://twitter.com' className='footer_link'>Twitter</Link>
            <Link to='https://instagram.com' className='footer_link'>Instagram</Link>
          </div>
        </div>
      </div>
      <div className='footer_copyright'>
        &copy; 2024 Pet heaven. All rights reserved.
      </div>
      </div>
  );
}

export default Footer;
