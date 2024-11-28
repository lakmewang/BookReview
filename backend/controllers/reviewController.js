const Review = require('../models/Review');

// Get all reviews
const getReviews = async (req, res) => {
    const reviews = await Review.find();
    res.json(reviews);
};

// Create a new review
const createReview = async (req, res) => {
    const review = new Review(req.body);
    const savedReview = await review.save();
    res.status(201).json(savedReview);
};

// Update a review
const updateReview = async (req, res) => {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedReview);
};

// Delete a review
const deleteReview = async (req, res) => {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: 'Review deleted' });
};

module.exports = { getReviews, createReview, updateReview, deleteReview };
