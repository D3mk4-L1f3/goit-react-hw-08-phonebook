import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/selectors';
import { useEffect } from 'react';
import { refresh } from 'redux/operations';
import RestrictedRoute from './RestrictedRout/RestrictedRout';
import PrivateRout from './PrivateRout/PrivateRout';
import NotFound from 'pages/ErrorPage';
import { Loader } from './Loader/Loader';

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRout component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
