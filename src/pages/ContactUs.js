import React from 'react';
import ReusableForm from '../components/Form';
import './ContactUs.css';

const ContactUs = () => {
  // Define the form fields for the contact page
  const contactFields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'subject', label: 'Subject', type: 'text', required: true },
    { name: 'message', label: 'Message', type: 'textarea', required: true }
  ];

  // Define what happens when the form is submitted
  const handleContactSubmit = (formData) => {
    console.log('Contact Form Submitted:', formData);
    // Here you can add logic to send form data to an API or email service
    alert("Thank you for reaching out! We'll get back to you soon.");
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
