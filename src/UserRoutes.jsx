import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const RegisterPege = lazy(() => import('pages/RegisterPege/RegisterPege'));
const MyPhonebook = lazy(() => import('pages/MyPhonebook/MyPhonebook'));
const LoginPege = lazy(() => import('pages/LoginPege/LoginPege'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/register" element={<RegisterPege />} />
        <Route path="/login" element={<LoginPege />} />
        <Route path="/contacts" element={<MyPhonebook />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
