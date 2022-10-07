import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

const PrivateRoute = props => {
  const { redirectTo = '/' } = props;

  // const isLoggedIn = useSelector(getLoggedIn);
  const isLoggedIn = true;

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
