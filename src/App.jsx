import React, { useEffect } from 'react';
import ClientsRoutes from 'ClientsRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserInfoThunk } from 'redux/auth/auth.thunk';

const App = () => {
  const [searchParams] = useSearchParams();
  const tokenParam = searchParams.get('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (tokenParam) {
      dispatch(getUserInfoThunk(tokenParam));
    }
  }, [tokenParam, dispatch]);
  return (
    <>
      <ClientsRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
