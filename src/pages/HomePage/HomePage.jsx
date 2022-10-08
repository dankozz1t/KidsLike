import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth.selector';

const HomePage = () => {
  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn ? <Navigate to={'/main'} /> : <Navigate to={'/auth'} />;
};

export default HomePage;
