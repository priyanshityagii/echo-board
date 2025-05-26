import React from 'react';
import StarRating from './StarRating';

const FeedbackForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-heading">Feedback Page : User’s Review</h2>
      <form className="feedback-form">
        <label className="form-label">Name</label>
        <input type="text" className="form-input" />

        <label className="form-label">Product</label>
        <select className="form-input">
          <option>Select Product</option>
          <option>Product A</option>
          <option>Product B</option>
        </select>

        <StarRating label="How would you rate your overall experience?" />
        <StarRating label="How would you rate overall design?" />
        <StarRating label="How would you rate overall features?" />
        <StarRating label="How would you rate overall performance?" />

        <label className="form-label">
          Kindly take a moment to tell us what you think.
        </label>
        <textarea className="form-textarea" rows="3"></textarea>
      </form>
    </div>
  );
};

export default FeedbackForm;
