// controllers/contactController.js
const Contact = require('./messageModel');

// Controller to handle the contact form submission
const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the input data
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    // Save the contact data to the database
    await newContact.save();

    return res.status(200).json({ success: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};

module.exports = { submitContactForm };
