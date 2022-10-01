import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import { RootState } from './redux/store';

import './app.scss';

const App: React.FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    isAuth ? navigate('/') : navigate('/login');
  }, [navigate, isAuth]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
