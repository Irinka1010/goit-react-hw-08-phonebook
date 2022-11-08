import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperetion';
import { getUser } from 'redux/auth/authSelectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { email } = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>{`${email}`} </p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
