import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
// import Container from '../Components/Container';
import ChatContainer from './ChatContainer';
import useAuth from '../hooks/useAuth';
import routes from '../routes';

const MainPage = () => {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      navigate(routes.loginPagePath());
    }
  }, []);
  return (
    <ChatContainer />
  );
};

export default MainPage;