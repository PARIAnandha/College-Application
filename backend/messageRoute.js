// routes/contactRoutes.js
const express = require('express');
const { submitContactForm } = require('./messageController');
const messageapplication=require('./messageController')
const router = express.Router();

// Define the POST route for submitting the contact form
router.post('/',messageapplication.submitContactForm);

module.exports = router;
