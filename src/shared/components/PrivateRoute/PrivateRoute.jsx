import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth.selector';

const PrivateRoute = props => {
  const { redirectTo = '/' } = props;

  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
