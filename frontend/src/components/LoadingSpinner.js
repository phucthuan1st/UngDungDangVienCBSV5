import React from 'react';
import '../styles/LoadingSpinner.css'; // Import CSS for styling

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default LoadingSpinner;
