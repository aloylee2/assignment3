import React from 'react';
import ReusableForm from '../components/Form';
import { useNavigate } from 'react-router-dom';

 const ReleasePet = ({ isLoggedIn }) => {

    const contactFields = [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'breed', label: 'Breed type', type: 'text', required: true },
        { name: 'information', label: 'Information about the pet', type: 'textarea', required: true },
        { name: 'image', label: 'Image of pet', type: 'file', required: true }
      ];
      const navigate = useNavigate();

      const handleContactSubmit = (formData) => {
        console.log("User logged in status:", isLoggedIn); 
        if(!isLoggedIn){
            alert("Not logged in. Unable to send the form.");
            navigate('/login')
        }
        else{
            console.log('Contact Form Submitted:', formData);
        // Here you can add logic to send form data to an API or email service
        alert("Thank you for reaching out! We'll get back to you soon.");
        }   
      };
    
  return (
    <div><h2>Release a pet into the society</h2>

<ReusableForm fields={contactFields} onSubmit={handleContactSubmit} />
    </div>
    
  )
}


export default ReleasePet;