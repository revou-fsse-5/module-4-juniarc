import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GettingStartedPage from './pages/GettingStartedPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GettingStartedPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
      <Route path="/sign-in" element={<SigninPage />} />
    </Routes>
  );
}

export default App;
