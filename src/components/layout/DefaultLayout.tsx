import { Outlet } from 'react-router-dom';
import classes from './DefaultLayout.module.scss';
import Header from '../common/Header/Header';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className={classes['default-layout']}>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
