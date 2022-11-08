import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperetion';
import { getUser } from 'redux/auth/authSelectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);
  console.log(name);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>{`Welcome back, ${name}`} </p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
