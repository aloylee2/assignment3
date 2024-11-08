
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import ReusableForm from '../components/Form';
import dogGallery from '../images/dog_gallery.avif';
import './Donation.css';

const Donation = ({ isLoggedIn}) => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (formData) => {
    console.log('User logged in status:', isLoggedIn);
    if (!isLoggedIn) {
      alert('Not logged in. Unable to donate.');
      //navigate('/login')
  }
  else{
    console.log('Form submitted:',formData);
    alert('Thanks for donating!');
    }
  };


  const fields = [
    { name: 'name', label: 'Name', type: 'text', className:'name', required: true },
    { name: 'email', label: 'Email', type: 'email', className:'email', required: true },
    {
      name: 'donationAmount',
      label: 'Donation Amount',
      type: 'select',
      className:'amount',
      options: ['$5', '$10', '$15', '$20', '$100'],
      required: true
    },
    {
      name: 'paymentMethod',
      label: 'Payment Method',
      type: 'select',
      className:'method',
      options: ['Credit Card', 'PayNow'],
      required: true
    }
  ];

  if (selectedPayment === 'Credit Card') {
    fields.push({
      name: 'creditCard',
      label: 'Credit Card Details',
      className: 'credit',
      type: 'text',
      required: true
    });
  }

  

  const handleFieldChange = (fieldName, value) => {
    if (fieldName === 'paymentMethod') {
      setSelectedPayment(value);
      setShowModal(value === 'PayNow'); 
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
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
                alt='QR Code for PayNow'
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
