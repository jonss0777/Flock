// src/app/layout.js
'use client'
import './globals.css'; // Import global styles
import Navbar from './components/Navbar';
import { AuthProvider  } from '@/context/AuthContext';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <title>Floc</title>
      <body>
        <Navbar/>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;



