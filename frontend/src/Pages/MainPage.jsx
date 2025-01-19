import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

const HomePage = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (!token) {
      navigate('/login');
    }
  }, );
  return (
    <h1>Страничка с чатом</h1>
  );
};

export default HomePage;