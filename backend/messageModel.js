// models/Contact.js
const mongoose = require('mongoose');

// Create the Contact schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
  },
  message: {
    type: String,
    required: true,
  },
});

// Create the model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
