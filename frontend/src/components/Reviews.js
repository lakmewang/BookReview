import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const response = await axios.get('http://localhost:5000/reviews');
    setReviews(response.data);
  };

  const deleteReview = async (id) => {
    await axios.delete(`http://localhost:5000/reviews/${id}`);
    fetchReviews(); // Refresh the list
  };

  const startEditing = (review) => {
    setEditingReview(review);
  };

  const cancelEditing = () => {
    setEditingReview(null);
  };

  return (
    <div>
      <h2>All Reviews</h2>
      <ReviewForm review={editingReview} cancelEditing={cancelEditing} fetchReviews={fetchReviews} />
      <ul>
        {reviews.map((review) => (
          <ReviewItem
            key={review._id}
            review={review}
            deleteReview={deleteReview}
            startEditing={startEditing}
          />
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
