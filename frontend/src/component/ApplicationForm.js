import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid, Typography, Snackbar, Alert, Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Person, Mail, Phone, Home, School } from '@mui/icons-material';
import { submitApplication } from './api';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    email: '',
    dob: null,
    address: '',
    streetAddress: '',
    city: '',
    state: '',
    pin: '',
    courseAppliedFor: '',
    lastHighSchoolName: '',
    yearGraduated: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dob: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitApplication(formData)
      .then((response) => {
        console.log('Application submitted', response);
        setOpenSnackbar(true);
        setFormData({
          firstName: '',
          lastName: '',
          gender: '',
          mobile: '',
          email: '',
          dob: null,
          address: '',
          streetAddress: '',
          city: '',
          state: '',
          pin: '',
          courseAppliedFor: '',
          lastHighSchoolName: '',
          yearGraduated: '',
        });
      })
      .catch((error) => {
        console.error('There was an error submitting the form!', error);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to right, #1f4037, #99f2c8)',
          padding: 2,
        }}
      >
        <Grid item xs={12} md={8} lg={6}>
          <Box
            sx={{
              boxShadow: 4,
              padding: 4,
              borderRadius: 2,
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" color="#1f4037" fontWeight="bold" gutterBottom>
              Application Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: <Person color="primary" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: <Person color="primary" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Gender</InputLabel>
                    <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    fullWidth
                    required
                    inputProps={{ maxLength: 10 }}
                    InputProps={{
                      startAdornment: <Phone color="primary" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: <Mail color="primary" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="Date of Birth"
                    value={formData.dob}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: <Home color="primary" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Street Address" name="streetAddress" value={formData.streetAddress} onChange={handleChange} fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="City" name="city" value={formData.city} onChange={handleChange} fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="State" name="state" value={formData.state} onChange={handleChange} fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Pin Code" name="pin" value={formData.pin} onChange={handleChange} fullWidth required inputProps={{ maxLength: 6 }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Course Applied For</InputLabel>
                    <Select label="Course Applied For" name="courseAppliedFor" value={formData.courseAppliedFor} onChange={handleChange}>
                      <MenuItem value="Engineering">Engineering</MenuItem>
                      <MenuItem value="Arts">Arts</MenuItem>
                      <MenuItem value="Science">Science</MenuItem>
                      <MenuItem value="Commerce">Commerce</MenuItem>
                      <MenuItem value="Medicine">Medicine</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Last High School Name"
                    name="lastHighSchoolName"
                    value={formData.lastHighSchoolName}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputProps={{
                      startAdornment: <School color="primary" />,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Year Graduated" name="yearGraduated" type="number" value={formData.yearGraduated} onChange={handleChange} fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" sx={{ backgroundColor: '#1f4037', color: '#fff' }} type="submit" fullWidth>
                    Submit Application
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Application submitted successfully!
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
};

export default ApplicationForm;
