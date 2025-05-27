import React from 'react';

const StarRating = ({ label, value = 0, onChange = () => {} }) => {
  return (
    <div className="star-rating">
      <p>{label}</p>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < value ? 'filled' : ''}`}
          onClick={() => onChange(index + 1)}
        >
          {index < value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
