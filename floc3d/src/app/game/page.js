"use client"
import ProtectedRoute from '../components/ProtectedRoute';
import Game from './components/Game';


const GamePage = () => {
  return (
     <ProtectedRoute>
      <Game/>
    </ProtectedRoute> 
  );
};

export default GamePage;
