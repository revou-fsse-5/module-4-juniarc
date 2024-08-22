import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import GettingStartedPage from './pages/GettingStartedPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import api from './network/api';
import { useAuthContext } from './contexts/authContext';

function App() {
  const { accessToken, setAccessToken } = useAuthContext();
  const [ cookies ] = useCookies(['authToken']);

  useEffect(() => {
    const token = api.getAccessToken();
    if(cookies.authToken) {
      setAccessToken(cookies.authToken);
    } else if(token) {
      setAccessToken(token);
    }
  }, [setAccessToken, cookies]);

  if (accessToken === undefined || accessToken === null) {
    return (
      <Routes>
        <Route path="/" element={<GettingStartedPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
