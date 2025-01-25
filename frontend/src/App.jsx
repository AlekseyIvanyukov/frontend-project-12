import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Navigation from './Components/navigation.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import routes from './routes.js';
import MainPage from './Pages/MainPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';

const App = () => (
  <div className="d-flex flex-column h-100">
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
        <Navigation />
        <Routes>
          <Route path={routes.mainPagePath()} element={<MainPage />} />
          <Route path={routes.loginPagePath()} element={<LoginPage />} />
          <Route path={routes.signupPagePath()} element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </div>
  );

export default App;