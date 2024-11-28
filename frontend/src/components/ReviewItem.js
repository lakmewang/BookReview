import React from 'react';

const ReviewItem = ({ review, deleteReview, startEditing }) => {
  return (
    <li>
      <h3>{review.title} by {review.author}</h3>
      <p>Rating: {review.rating} stars</p>
      <p>{review.reviewText}</p>
      <button onClick={() => startEditing(review)}>Edit</button>
      <button onClick={() => deleteReview(review._id)}>Delete</button>
    </li>
  );
};

export default ReviewItem;
