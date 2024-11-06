import React, { useState } from 'react';
import ReusableForm from '../components/Form'; // Adjust the path as necessary
import dogGallery from '../images/dog_gallery.avif'; // Adjust the path as necessary

const Donation = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const fields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    {
      name: 'donationAmount',
      label: 'Donation Amount',
      type: 'select',
      options: ['5', '10', '15', '20', '100'],
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
    }
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h2>Make a Donation</h2>
      <ReusableForm
        fields={fields}
        onSubmit={handleFormSubmit}
        onFieldChange={handleFieldChange}
      />

      {/* Button to open modal */}
      {selectedPayment === 'PayNow' && (
        <div>
          <button onClick={toggleModal}>Show QR Code</button>
        </div>
      )}

      {/* Modal for QR Code */}
      {showModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h3>Scan to Pay</h3>
            <img 
              src={dogGallery} 
              alt="QR Code for PayNow" 
              style={{ width: '150px', height: '150px' }} 
            />
            <button onClick={toggleModal} style={closeButtonStyle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for modal
const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000, // Ensure the modal appears on top
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
};

const closeButtonStyle = {
  marginTop: '10px',
  padding: '5px 10px',
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Donation;
