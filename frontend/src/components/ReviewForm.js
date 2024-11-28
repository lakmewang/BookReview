import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewForm = ({ review, cancelEditing, fetchReviews }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    if (review) {
      setTitle(review.title);
      setAuthor(review.author);
      setRating(review.rating);
      setReviewText(review.reviewText);
    }
  }, [review]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = { title, author, rating, reviewText };

    if (review) {
      // Edit review
      await axios.put(`http://localhost:5000/reviews/${review._id}`, newReview);
    } else {
      // Create new review
      await axios.post('http://localhost:5000/reviews', newReview);
    }

    fetchReviews(); // Refresh the list
    cancelEditing(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
      </div>
      <div>
        <label>Review:</label>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">{review ? 'Update' : 'Add'} Review</button>
        {review && <button type="button" onClick={cancelEditing}>Cancel</button>}
      </div>
    </form>
  );
};

export default ReviewForm;
