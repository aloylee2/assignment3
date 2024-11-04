// Button.js
import React from 'react';

const Button = ({ onClick, label, className, type = 'button' }) => {
    return (
        <button onClick={onClick} className={`button ${className}`} type={type}>
            {label}
        </button>
    );
};

export default Button;
