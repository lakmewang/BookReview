const express = require('express');
const Review = require('../models/Review');

const router = express.Router();

// Get All Reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a New Review
router.post('/', async (req, res) => {
    const { title, author, rating, reviewText } = req.body;
    try {
        const newReview = new Review({ title, author, rating, reviewText });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a Review
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author, rating, reviewText } = req.body;
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            id,
            { title, author, rating, reviewText },
            { new: true }
        );
        res.json(updatedReview);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a Review
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Review.findByIdAndDelete(id);
        res.json({ message: 'Review deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
