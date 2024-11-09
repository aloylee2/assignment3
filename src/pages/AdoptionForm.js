import React, { useRef } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './AdoptionForm.css'

const AdoptionForm = () => {
    const location = useLocation();
    const form = useRef();
    const navigate = useNavigate();

    const { animalType, animalImage, breedName, loggedInUsername } = location.state || {};


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_6oq2r7d',       
            'template_kiuqpa8',     
            form.current,
            'kxFa7pueMw7nGNotI'
        )
        .then((result) => {
            console.log('email sent:', result.text);
            alert('Thank you for applying to adopt! We will contact you soon.');
            navigate('/');
        })
        .catch((error) => {
            console.error('Error:', error.text);
            alert('Something went wrong with the adoption application. Please try again.');
        });
    };

    return (
        <div className='adoptform'>
            <h2 style={{textAlign:'center'}}>Adoption Form</h2>
            <h3 style={{textAlign:'center'}}>Thank you applying to adopt a {animalType}</h3>
            <div className='AnimalImage'>
                <img src={animalImage || ''} alt={breedName} className='animal_image'/>
                {!animalImage && <p>No image found</p>}
            </div>
            <div className='adoption_details'>
                <p><strong>Breed:</strong> {breedName || 'Unknown'}</p>
                <p><strong>Adopter's Username:</strong> {loggedInUsername}</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className='form'>
                <input type='hidden' name='animal_type' value={animalType} />
                <input type='hidden' name='animal_image' value={animalImage} />
                <input type='hidden' name='breed_name' value={breedName} />
                <input type='hidden' name='username' value={loggedInUsername} />

                <label>
                    Your Name:
                    <input type='text' name='user_name' className='name' placeholder='Enter your name' required />
                </label>
                <label>
                    Your Address:
                    <input type='text' name='user_address' className='address' placeholder='Enter your address' required />
                </label>
                <label>
                    Contact Number:
                    <input type='tel' name='user_contact' className='number' maxLength={8} minlength={8} placeholder='Enter your contact number' required />
                </label>
                <button type='submit'>Submit Adoption</button>
            </form>
        </div>
    );
};

export default AdoptionForm;
