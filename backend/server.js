require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const applicationRoutes = require('./applicationRoutes');
const cors=require('cors')
const contactRoutes = require('./messageRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit on failure
  }
};


// Use application routes
app.use('/api/college', applicationRoutes);
app.use('/api/contact', contactRoutes);


// Call the database connection function
connectDB();



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
