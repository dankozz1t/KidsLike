import React from 'react';
import ClientsRoutes from 'ClientsRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ClientsRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
