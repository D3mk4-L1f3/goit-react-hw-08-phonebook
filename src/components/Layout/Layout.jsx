import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navigation />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
