import React from 'react';
import ReusableForm from '../components/Form';
import './ContactUs.css';

const ContactUs = () => {
  const contactFields = [
    { name: 'name', label: 'Name', type: 'text',className:'name', required: true },
    { name: 'email', label: 'Email', type: 'email', className:'email',required: true },
    { name: 'subject', label: 'Subject', type: 'text',className:'subject', required: true },
    { name: 'message', label: 'Message', type: 'textarea',className:'message', required: true }
  ];


  const handleContactSubmit = (formData) => {
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us through this form.</p>
      <ReusableForm fields={contactFields} onSubmit={handleContactSubmit} />
    </div>
  );
};

export default ContactUs;
