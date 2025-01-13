import { Link } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    <AppBar position="static" color="primary">
    <Toolbar>
      {/* Left-aligned icon */}
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>

      {/* Centered or left-aligned title */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Broadband Connect
      </Typography>

      {/* Right-aligned buttons */}
      <Button color="inherit">Login</Button>
      <Button color="inherit">Sign Up</Button>
    </Toolbar>
  </AppBar>
};

    export default Header;