import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperetion';
import { isLogin } from 'redux/auth/authSelectors';

export default function LoginPege() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);
  const onLogin = data => {
    dispatch(login(data));
  };
  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h1>LoginPege</h1>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
}
