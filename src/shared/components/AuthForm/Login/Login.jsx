import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { loginThunk, registerThunk } from 'redux/auth/auth.thunk';
import s from './Login.module.scss';
import Button from 'shared/components/Button';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from 'shared/components/Google/GoogleIcon';

const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const initialValue = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(initialValue);
  const [emailRequared, setEmailRequared] = useState(false);
  const [passwordRequared, setPasswordRequared] = useState(false);

  const validateForm = () => {
    if (!emailRegexp.test(user.email)) {
      return setEmailRequared(true);
    }

    if (user.email.length < 3 || user.email.length > 254) {
      return;
    }

    if (user.password.length < 8 || user.password.length > 100) {
      return setPasswordRequared(true);
    }

    return true;
  };

  const handleChangeUser = ev => {
    const { name, value } = ev.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const registration = async () => {
    const resultValidate = validateForm();

    if (!resultValidate) {
      return;
    }

    try {
      await dispatch(registerThunk(user)).unwrap();
      toast.success('Congratulations on Your successful registration');
      navigate('/', { replace: true });
      setUser(initialValue);
    } catch (error) {
      toast.error(error);
    }
  };

  const login = async () => {
    const resultValidate = validateForm();

    if (!resultValidate) {
      return;
    }

    try {
      await dispatch(loginThunk(user)).unwrap();
      toast.success('Success');
      navigate('/', { replace: true });
      setUser(initialValue);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <h1 className={s.hero__title}>
        Do your homework, get some great prizes!
      </h1>

      <form className={s.form}>
        <p className={s.title}>You can login with Google Account:</p>
        <Button type="button" onClick={login} classAccent="grey">
          <GoogleIcon />
        </Button>
        <p className={s.text}>
          Or log in with e-mail and password after registering:
        </p>
        <label className={s.label__input}>
          {emailRequared ? (
            <span className={s.label__text}>
              <span className={s.error}>*</span>Email:
            </span>
          ) : (
            <span className={s.label__text}>Email:</span>
          )}
          <input
            placeholder="your@email.com
            "
            className={s.input}
            type="email"
            name="email"
            value={user.email}
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
            required
            onChange={handleChangeUser}
          />
          {emailRequared ? (
            <p className={s.text__req}>Email should have correct format</p>
          ) : null}
        </label>
        <label className={s.label__input}>
          {passwordRequared ? (
            <span className={s.label__text}>
              <span className={s.error}>*</span>Password:
            </span>
          ) : (
            <span className={s.label__text}>Password:</span>
          )}
          <input
            placeholder="fjsd6ywe3"
            className={s.input}
            type="password"
            name="password"
            value={user.password}
            required
            onChange={handleChangeUser}
          />
          {passwordRequared ? (
            <p className={s.text__req}>Password is wrong</p>
          ) : null}
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
