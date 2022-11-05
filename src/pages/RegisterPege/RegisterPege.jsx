import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from 'redux/auth/authOperetion';
import { isLogin } from 'redux/auth/authSelectors';

export default function RegisterPege() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);
  const onRegister = data => {
    dispatch(signup(data));
  };
  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <h1>RegisterPege</h1>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
}
