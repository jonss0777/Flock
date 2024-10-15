// src/app/login/page.js
'use client'
import React from 'react';
import LoginForm from '../login/LoginForm';
import { Container } from '@mui/material';

export default function LoginPage(){
 
  return (
    <Container component="main" maxWidth="xs">
      <LoginForm />
    </Container>
  );
};

