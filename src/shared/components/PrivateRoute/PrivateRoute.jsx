import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth.selector';
import { getUserInfoThunk } from 'redux/auth/auth.thunk';

const PrivateRoute = ({ redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfoThunk());
    }
  }, [dispatch, isLoggedIn]);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
