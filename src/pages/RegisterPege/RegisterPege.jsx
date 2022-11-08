import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/authOperetion';

export default function RegisterPege() {
  const dispatch = useDispatch();

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h1>RegisterPege</h1>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
}
