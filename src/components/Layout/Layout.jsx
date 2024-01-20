import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Header } from '../Header/Header';
import { selectLoading } from '../../redux/selectors';

export const Layout = () => {
  const loading = useSelector(selectLoading);
  return (
    <>
      {loading && <Loader />}
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
