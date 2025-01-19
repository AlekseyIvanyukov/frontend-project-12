import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Container from '../Components/Container';

const MainPage = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (!token) {
      navigate('/login');
    }
  }, );
  return (
    <Container />
  );
};

export default MainPage;