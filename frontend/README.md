## Book Review CRUD Application (MERN Stack)
This is a full-stack CRUD application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to create, read, update, and delete book reviews. Each review includes the book's title, author, rating (1-5), and a review text.

# Features
1. Create a Review: Users can add a new review with the book's title, author, rating, and review text.
2. Read Reviews: Users can view all reviews listed with their details.
3. Update a Review: Users can edit an existing review.
4. Delete a Review: Users can delete a review.
5. Responsive Interface: The frontend is responsive and works well on different screen sizes.

# Tech Stack
Frontend: React.js
Backend: Node.js with Express.js
Database: MongoDB
API Communication: Axios
Environment Variables: dotenv
Styling: Default (can be customized further)

# Getting Started
Prerequisites

Node.js and npm installed on your local machine.
MongoDB running locally or using MongoDB Atlas for cloud database setup.

# Clone the Repository

Clone this repository to your local machine:

git clone https://github.com/yourusername/book-review-app.git
cd book-review-app

## Backend Setup

1. Navigate to the backend folder:

cd backend

2. Install the dependencies:

npm install

3. Set up your environment variables:

Create a .env file in the backend folder.

Add the following lines to .env:

PORT=5000
MONGO_URI=mongodb+srv://bookreview:qwert12345@cluster0.cp6vc.mongodb.net/

4. Start the backend server using nodemon for auto-reloading during development:

npm run dev

The server will be running on http://localhost:5000.

## Frontend Setup

1. Navigate to the frontend folder:

cd ../frontend

2. Install the frontend dependencies:

npm install

3. Start the React development server:

npm start

The frontend will be running on http://localhost:3000.

# API Endpoints

GET /reviews: Retrieve all reviews.
POST /reviews: Create a new review.
PUT /reviews/:id: Update a specific review by ID.
DELETE /reviews/:id: Delete a specific review by ID.
