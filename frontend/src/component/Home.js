import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, IconButton } from '@mui/material';
import { School, EmojiEvents, ContactMail, Info } from '@mui/icons-material';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #1f4037, #99f2c8)',
        color: '#fff',
        padding: 4,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: 6,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Welcome to Jerusalem College of Engineering
        </Typography>
        <Typography variant="subtitle1" mt={2}>
        Main Block, Velachery Main Rd, Narayanapuram, Pallikaranai, Chennai, Tamil Nadu 600100
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: 4,
            backgroundColor: '#1f4037',
            color: '#fff',
            '&:hover': { backgroundColor: '#99f2c8', color: '#1f4037' },
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Highlight Sections */}
      <Grid container spacing={3}>
        {/* About Us Section */}
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              backgroundColor: '#fff',
              color: '#1f4037',
              textAlign: 'center',
              boxShadow: 4,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <IconButton
                sx={{
                  backgroundColor: '#1f4037',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#99f2c8' },
                  marginBottom: 2,
                }}
              >
                <Info fontSize="large" />
              </IconButton>
              <Typography variant="h6" fontWeight="bold">
                About Us
              </Typography>
              <Typography variant="body2" mt={1}>
                Discover our history, mission, and commitment to academic excellence.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Courses Section */}
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              backgroundColor: '#fff',
              color: '#1f4037',
              textAlign: 'center',
              boxShadow: 4,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <IconButton
                sx={{
                  backgroundColor: '#1f4037',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#99f2c8' },
                  marginBottom: 2,
                }}
              >
                <School fontSize="large" />
              </IconButton>
              <Typography variant="h6" fontWeight="bold">
                Courses
              </Typography>
              <Typography variant="body2" mt={1}>
                Explore a variety of undergraduate and postgraduate programs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Achievements Section */}
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              backgroundColor: '#fff',
              color: '#1f4037',
              textAlign: 'center',
              boxShadow: 4,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <IconButton
                sx={{
                  backgroundColor: '#1f4037',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#99f2c8' },
                  marginBottom: 2,
                }}
              >
                <EmojiEvents fontSize="large" />
              </IconButton>
              <Typography variant="h6" fontWeight="bold">
                Achievements
              </Typography>
              <Typography variant="body2" mt={1}>
                Celebrating milestones and successes in academics and beyond.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} md={3}>
          <Card
            sx={{
              backgroundColor: '#fff',
              color: '#1f4037',
              textAlign: 'center',
              boxShadow: 4,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <IconButton
                sx={{
                  backgroundColor: '#1f4037',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#99f2c8' },
                  marginBottom: 2,
                }}
              >
                <ContactMail fontSize="large" />
              </IconButton>
              <Typography variant="h6" fontWeight="bold">
                Contact Us
              </Typography>
              <Typography variant="body2" mt={1}>
                Get in touch for inquiries and support.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
