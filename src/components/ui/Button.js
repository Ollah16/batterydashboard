import React from 'react';

const Button = ({ onClick, children, className, ariaLabel }) => {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={`p-2 rounded-lg transition-colors duration-300 focus:outline-none ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
