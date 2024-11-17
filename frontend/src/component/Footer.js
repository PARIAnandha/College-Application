import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1f4037', color: '#fff', padding: 2, textAlign: 'center' }}>
      <Typography variant="body2">&copy;Jerusalem College of Engineering. All Rights Reserved.</Typography>
      <Box>
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit">
          Terms of Service
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
