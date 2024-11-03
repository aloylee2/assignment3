// Button.js
import React from 'react';
import './Button.css'; // Optional styling

const Button = ({ onClick, label, className, type = 'button' }) => {
    return (
        <button onClick={onClick} className={`button ${className}`} type={type}>
            {label}
        </button>
    );
};

export default Button;
