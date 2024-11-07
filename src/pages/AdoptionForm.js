// src/AdoptionForm.js
import React, { useRef } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './AdoptionForm.css'

const AdoptionForm = () => {
    const location = useLocation();
    const form = useRef();
    const navigate = useNavigate();

    const { animalType, animalImage, breedName, loggedInUsername } = location.state || {};

    // Function to send email
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_6oq2r7d',       // Your Email.js service ID
            'template_kiuqpa8',      // Your Email.js template ID
            form.current,
            'kxFa7pueMw7nGNotI'      // Your Email.js user ID
        )
        .then((result) => {
            console.log('Email sent:', result.text);
            alert('Thank you applying to adopt! We will contact you soon.');
            navigate('/');
        })
        .catch((error) => {
            console.error('Error:', error.text);
            alert('Something went wrong with the adoption. Please try again.');
        });
    };

    return (
        <div className="adoption_form_container">
            <h2 style={{textAlign:'center'}}>Adoption Form</h2>
            <h3 style={{textAlign:'center'}}>Thank you applying to adopt a {animalType}</h3>
            <div className="AnimalImage">
                {animalImage ? (
                    <img src={animalImage} alt={breedName} className="animal_image" />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <div className="adoption_details">
                <p><strong>Breed:</strong> {breedName || 'Unknown'}</p>
                <p><strong>Adopter's Username:</strong> {loggedInUsername || 'Guest'}</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="form">
                <input type="hidden" name="animal_type" value={animalType} />
                <input type="hidden" name="animal_image" value={animalImage} />
                <input type="hidden" name="breed_name" value={breedName} />
                <input type="hidden" name="username" value={loggedInUsername} />

                <label>
                    Your Name:
                    <input type="text" name="user_name" placeholder="Enter your name" required />
                </label>
                <label>
                    Your Address:
                    <input type="text" name="user_address" placeholder="Enter your address" required />
                </label>
                <label>
                    Contact Number:
                    <input type="tel" name="user_contact" placeholder="Enter your contact number" required />
                </label>
                <button type="submit">Submit Adoption</button>
            </form>
        </div>
    );
};

export default AdoptionForm;
