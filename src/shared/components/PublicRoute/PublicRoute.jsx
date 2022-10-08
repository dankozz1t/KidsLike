import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth.selector';

const PublicRoute = props => {
  const { restricted = false, redirectTo = '/' } = props;

  const isLoggedIn = useSelector(getLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;
