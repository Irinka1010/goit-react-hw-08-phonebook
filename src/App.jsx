import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from 'redux/auth/authOperetion';
import Navigation from 'components/Navdar/Navigation';
import { getLoadingUserStatus } from 'redux/auth/authSelectors';
import LinearIndeterminate from 'components/LinearIndeterminate/LinearIndeterminate';
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
        <LinearIndeterminate />
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
