import React from 'react';
import Rating from 'react-rating-stars-component';
const Ratingstar = ({ rating }) => {
    const numStars = Math.round(rating);
    return (
        <Rating
            count={5} // Total number of stars
            value={numStars} // Number of filled stars
            size={24} // Size of the stars
            edit={false} // Disable user interaction
        />
    );
};

export default Ratingstar;