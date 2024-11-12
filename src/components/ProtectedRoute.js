import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/Login', { replace: true });
    }
  }, [token, navigate]);

  // Si no hay token, evita renderizar el componente hasta que se redirija
  if (!token) return null;

  return children;
};

export default ProtectedRoute;
