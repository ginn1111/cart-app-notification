import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/common/Header';

import './defaultLayout.scss';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="default-layout">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default DefaultLayout;
