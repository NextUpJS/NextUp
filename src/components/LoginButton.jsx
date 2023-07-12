import React from 'react';
import '../styles/LoginButton.css';
import Button from '@mui/material/Button';

const LoginButton = () => {
  return (
    <div class='login-button'>
      <a href='https://api.nextup.rocks/login'>
        <Button variant='contained'>Create a Party!</Button>
      </a>
    </div>
  );
};

export default LoginButton;
