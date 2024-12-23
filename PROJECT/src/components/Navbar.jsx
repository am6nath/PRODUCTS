import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
  
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}><center>
          PRODUCT STORE</center>
        </Typography>
        <Button color="inherit" component={Link} to="/H">HOME</Button>
        <Button color="inherit" component={Link} to="/add">ADD PRODUCT</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;