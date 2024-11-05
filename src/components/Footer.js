import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/adopt" className="footer-link">Adopt</a></li>
            <li><a href="/volunteer" className="footer-link">Volunteer</a></li>
            <li><a href="/donate" className="footer-link">Donate</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <p className="footer-contact-text">Email: contact@animalrescue.org</p>
          <p className="footer-contact-text">Phone: (123) 456-7890</p>
          <p className="footer-contact-text">Location: 123 Animal Rescue St.</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-social-icons">
            <a href="https://facebook.com" className="footer-link">Facebook</a>
            <a href="https://twitter.com" className="footer-link">Twitter</a>
            <a href="https://instagram.com" className="footer-link">Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Animal Rescue. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
