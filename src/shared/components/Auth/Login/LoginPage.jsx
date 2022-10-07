import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  loginThunk,
  registerThunk,
} from '../../../service/redux/auth/thunk.auth';
import s from './Login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValue = {
    email: '',
    password: '',
  };

  const [user, setUser] = useState(initialValue);

  const handleChangeUser = ev => {
    const { name, value } = ev.target;
    
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const registration = async () => {
    try {
      await dispatch(registerThunk(user)).unwrap();
      setUser(initialValue);
      // navigate('/', { replace: true });
    } catch (error) {
      // toast.error('Try Again');
    }
  };

  const login = async () => {
    try {
      await dispatch(loginThunk(user)).unwrap();
      setUser(initialValue);
      // navigate('/', { replace: true });
    } catch (error) {
      // toast.error('Try Again');
    }
  };


  return (
    <div className={s.wrapper}>
      <form className={s.form}>
        <label>
          <span className={s.label}>Email</span>
          <input
            className={s.input}
            type="email"
            name="email"
            value={user.email}
            required
            onChange={handleChangeUser}
          />
        </label>
        <label>
          <span className={s.label}>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            value={user.password}
            required
            onChange={handleChangeUser}
          />
        </label>
        {/* <Link className={s.link} to="/registration">
          Dont have account?
        </Link> */}

        <button type="button" onClick={login}>
          Log In
        </button>
        <button type="button" onClick={registration}>
          Registration
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
