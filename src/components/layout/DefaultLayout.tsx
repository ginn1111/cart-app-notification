import { Outlet } from 'react-router-dom';
import Header from 'components/common/Header/Header';

import './defaultLayout.scss';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="default-layout">
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
