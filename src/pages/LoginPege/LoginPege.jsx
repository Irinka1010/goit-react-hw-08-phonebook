import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/authOperetion';

export default function LoginPege() {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h1>LoginPege</h1>
      <LoginForm onSubmit={onLogin} />
      {/* {status & <p>yfhgfhufh</p>} */}
    </div>
  );
}
