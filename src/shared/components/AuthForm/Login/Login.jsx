import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginThunk, registerThunk } from 'redux/auth/auth.thunk';
import s from './Login.module.scss';
import Button from 'shared/components/Button';

const Login = () => {
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
    if (user.email === '' || user.password === '') {
      return;
    }

    try {
      await dispatch(registerThunk(user));
      setUser(initialValue);
      // navigate('/', { replace: true });
    } catch (error) {
      // toast.error('Try Again');
    }
  };

  const login = async () => {
    if (user.email === '' && user.password === '') {
      return;
    }
    try {
      await dispatch(loginThunk(user));
      setUser(initialValue);
      // navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
      // toast.error('Try Again');
    }
  };

  return (
    <div>
      <h1 className={s.hero__title}>
        Do your homework, get some great prizes!
      </h1>

      <form className={s.form}>
        <p className={s.title}>You can login with Google Account:</p>
        <Button
          type="button"
          onClick={login}
          // className={s.btn__google}
          style={{ backgroundColor: '#F6F7FB', color: 'black' }}
        >
          Google
        </Button>
        <p className={s.text}>
          Or log in with e-mail and password after registering:
        </p>
        <label>
          <span className={s.label}>E-mail:</span>
          <input
            placeholder="your@email.com"
            className={s.input}
            type="email"
            name="email"
            value={user.email}
            required
            onChange={handleChangeUser}
          />
        </label>
        <label>
          <span className={s.label}>Password:</span>
          <input
            placeholder="••••••••"
            className={s.input}
            type="password"
            name="password"
            value={user.password}
            required
            onChange={handleChangeUser}
          />
        </label>

        <div className={s.boxButton}>
          <Button type="button" onClick={login}>
            Log In
          </Button>
          <Button type="button" onClick={registration}>
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
