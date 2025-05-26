import React, { useState } from 'react';

const StarRating = ({ label }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating">
      <p>{label}</p>
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fa-star star ${index < rating ? 'fas' : 'far'}`}
          onClick={() => setRating(index + 1)}
        ></i>
      ))}
    </div>
  );
};

export default StarRating;
