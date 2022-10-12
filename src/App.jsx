import React from 'react';
import ClientsRoutes from 'ClientsRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserThunk } from 'redux/auth/auth.thunk';

const App = () => {
  const [sercheParams] = useSearchParams();
  const token = sercheParams.get('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserThunk(token));
    }
  }, [token, dispatch]);
  return (
    <>
      <ClientsRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
