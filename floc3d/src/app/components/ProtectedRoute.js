import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push('/login'); // Redirect to login if not authenticated
  }
 
  return isAuthenticated ? children : null; // Render children if authenticated
};

export default ProtectedRoute;

