import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewItem';

const HomePage = () => {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        const { data } = await axios.get('http://localhost:5000/reviews');
        setReviews(data);
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div>
            <ReviewForm fetchReviews={fetchReviews} />
            <ReviewList reviews={reviews} />
        </div>
    );
};

export default HomePage;
