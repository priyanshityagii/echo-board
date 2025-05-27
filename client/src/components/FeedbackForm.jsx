import React, { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating';

// Assuming you have a CSS file for styles
const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');
  const [ratings, setRatings] = useState({
    overall: 0,
    design: 0,
    features: 0,
    performance: 0,
  });

  const handleRatingChange = (type, value) => {
    setRatings((prev) => ({ ...prev, [type]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      name,
      product,
      message,
      ratings,
    };

    try {
      const res = await axios.post('http://localhost:5000/feedback', feedbackData);
      if (res.data.status) {
        alert('Feedback submitted successfully!');
        setName('');
        setProduct('');
        setMessage('');
        setRatings({
          overall: 0,
          design: 0,
          features: 0,
          performance: 0,
        });
      } else {
        alert(res.data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Feedback Page : User’s Review</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="form-label">Product</label>
        <select
          className="form-input"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        >
          <option value="">Select Product</option>
          <option value="Product A">Product A</option>
          <option value="Product B">Product B</option>
        </select>

        <StarRating
          label="How would you rate your overall experience?"
          value={ratings.overall}
          onChange={(value) => handleRatingChange('overall', value)}
        />
        <StarRating
          label="How would you rate overall design?"
          value={ratings.design}
          onChange={(value) => handleRatingChange('design', value)}
        />
        <StarRating
          label="How would you rate overall features?"
          value={ratings.features}
          onChange={(value) => handleRatingChange('features', value)}
        />
        <StarRating
          label="How would you rate overall performance?"
          value={ratings.performance}
          onChange={(value) => handleRatingChange('performance', value)}
        />

        <label className="form-label">
          Kindly take a moment to tell us what you think.
        </label>
        <textarea
          className="form-textarea"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="form-input" style={{ marginTop: "20px" }}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
