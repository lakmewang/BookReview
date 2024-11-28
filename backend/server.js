const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error(err));

const reviewRoutes = require('./routes/reviewRoutes');
app.use('/reviews', reviewRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
