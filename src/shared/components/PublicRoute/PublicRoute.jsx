import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getLoggedIn } from 'redux/auth/authAPI/authSlice';

const PublicRoute = props => {
  const { restricted = false, redirectTo = '/' } = props;

  // const isLoggedIn = useSelector(getLoggedIn);
  const isLoggedIn = true;
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;
