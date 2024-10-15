// src/components/LoginForm.js
"use client"
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // Simulate a login
  //   // getting token from API
  //   const token = 'your-auth-token'

  //   console.log('Logging in with:', email, password);
  //   login(token); // Update authentication state
  //   router.push('/game'); // Redirect to home or dashboard
  // };


  const handleSubmit =  (event) => {
    event.preventDefault();
    // Simulate a login
    // getting token from API
    const token = 'your-auth-token'

    console.log('Logging in with:', email, password);
    login(token); // Update authentication state
    router.push('/game'); // Redirect to home or dashboard
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginForm;
