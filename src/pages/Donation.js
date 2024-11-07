import React, { useState } from 'react';
import ReusableForm from '../components/Form';
import dogGallery from '../images/dog_gallery.avif'; 
import './Donation.css';

const Donation = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showModal, setShowModal] = useState(false);

  const fields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    {
      name: 'donationAmount',
      label: 'Donation Amount',
      type: 'select',
      options: ['$5', '$10', '$15', '$20', '$100'],
      required: true
    },
    {
      name: 'paymentMethod',
      label: 'Payment Method',
      type: 'select',
      options: ['Credit Card', 'PayNow'],
      required: true
    },
    ...(selectedPayment === 'Credit Card' ? [{
      name: 'creditCard',
      label: 'Credit Card Details',
      type: 'text',
      required: true
    }] : [])
  ];

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    alert("Thanks for donating!");
  };

  const handleFieldChange = (fieldName, value) => {
    if (fieldName === 'paymentMethod') {
      setSelectedPayment(value);
      setShowModal(value === 'PayNow');  // Automatically open modal for PayNow
    }
  };

  return (
    <div>
      <h2>Make a Donation</h2>
    
      <ReusableForm
        fields={fields}
        onSubmit={handleFormSubmit}
        onFieldChange={handleFieldChange}
      />
      {showModal && (
        <div className='modalOverlay'>
          <div className='modalContent'>
            <h3>Scan to Pay</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src={dogGallery} 
                alt="QR Code for PayNow" 
                style={{ width: '250px', height: '200px', marginBottom: '10px' }} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
