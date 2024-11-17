import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton, Button, TextField } from '@mui/material';
import { Mail, Phone, LocationOn } from '@mui/icons-material';
import { submitContactForm } from './api'; // Import your API function

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);  // To show loading indicator
  const [error, setError] = useState(null); // For handling error messages
  const [success, setSuccess] = useState(false); // For successful form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    setLoading(true); // Start loading
    setError(null); // Reset error
    setSuccess(false); // Reset success
    try {
      const response = await submitContactForm(formData); // Call the submitContactForm function
      console.log('Form submitted successfully:', response);
      setSuccess(true); // If successful, set success state
      setFormData({
        name: '',
        email: '',
        message: ''
      }); // Reset form fields
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setError('There was an error submitting the form. Please try again later.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #1f4037, #99f2c8)',
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: 800,
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        {/* Header */}
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4" fontWeight="bold" color="#1f4037">
            Contact Us
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            We're here to help! Reach out to us anytime.
          </Typography>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} sm={4} textAlign="center">
          <IconButton sx={{ backgroundColor: '#1f4037', color: '#fff', '&:hover': { backgroundColor: '#99f2c8' } }}>
            <Phone fontSize="large" />
          </IconButton>
          <Typography variant="h6" color="#1f4037" mt={1}>
            Contact NO:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            +91 75400 37999
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} textAlign="center">
          <IconButton sx={{ backgroundColor: '#1f4037', color: '#fff', '&:hover': { backgroundColor: '#99f2c8' } }}>
            <Mail fontSize="large" />
          </IconButton>
          <Typography variant="h6" color="#1f4037" mt={1}>
            Email Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jerusalemg@college.edu
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} textAlign="center">
          <IconButton sx={{ backgroundColor: '#1f4037', color: '#fff', '&:hover': { backgroundColor: '#99f2c8' } }}>
            <LocationOn fontSize="large" />
          </IconButton>
          <Typography variant="h6" color="#1f4037" mt={1}>
            Visit Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Main Block, Velachery Main Rd, Narayanapuram, Pallikaranai, Chennai, Tamil Nadu 600100
          </Typography>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} textAlign="center" mt={3}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Name Input */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Name"
                  name="name"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>

              {/* Email Input */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Email"
                  name="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  type="email"
                  required
                />
              </Grid>

              {/* Message Input */}
              <Grid item xs={12}>
                <TextField
                  label="Your Message"
                  name="message"
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#1f4037',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#99f2c8', color: '#1f4037' },
                    paddingX: 4,
                  }}
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Grid>
            </Grid>
          </form>

          {/* Error or Success Message */}
          {error && <Typography color="error" mt={2}>{error}</Typography>}
          {success && <Typography color="success" mt={2}>Your message has been sent successfully!</Typography>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
