import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const RegisterPege = lazy(() => import('pages/RegisterPege/RegisterPege'));
const MyPhonebook = lazy(() => import('pages/MyPhonebook/MyPhonebook'));
const LoginPege = lazy(() => import('pages/LoginPege/LoginPege'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPege />} />
          <Route path="/login" element={<LoginPege />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<MyPhonebook />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
