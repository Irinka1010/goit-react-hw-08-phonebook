import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from 'redux/Auth/authOperetion';
import Navigation from 'components/Navdar/Navigation';
import { getLoadingUserStatus } from 'redux/Auth/authSelectors';
import UserRoutes from 'UserRoutes';
const App = () => {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <div>
      {isLoadingUser ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navigation />
          <UserRoutes />
        </>
      )}
    </div>
  );
};
export default App;
