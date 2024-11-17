const mongoose = require('mongoose');

// Define schema for the application form
const applicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
  mobile: { 
    type: String, 
    required: true, 
    validate: {
      validator: function (value) { return /^\d{10}$/.test(value); },
      message: 'Mobile number must be 10 digits'
    } 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true, 
    validate: {
      validator: function (value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); },
      message: 'Invalid email format'
    }
  },
  dob: { type: Date, required: true },
  address: { type: String, required: true, trim: true },
  streetAddress: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  pin: { 
    type: String, 
    required: true, 
    validate: {
      validator: function (value) { return /^\d{6}$/.test(value); },
      message: 'Pin code must be 6 digits'
    } 
  },
  courseAppliedFor: { type: String, required: true, enum: ['Engineering', 'Arts', 'Science', 'Commerce', 'Medicine'] },
  lastHighSchoolName: { type: String, required: true, trim: true },
  yearGraduated: { 
    type: Number, 
    required: true, 
    validate: {
      validator: function (value) { 
        const currentYear = new Date().getFullYear();
        return value > 1900 && value <= currentYear; 
      },
      message: 'Year graduated must be a valid year'
    } 
  },
  appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
