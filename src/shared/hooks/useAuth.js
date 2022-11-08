import { useSelector } from 'react-redux';
import { isLogin } from 'redux/Auth/authSelectors';
const useAuth = () => {
  const result = useSelector(isLogin);
  return result;
};
export default useAuth;
