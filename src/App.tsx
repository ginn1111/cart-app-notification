import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import ProductList from 'pages/ProductList/ProductList';
import ProductDetail from 'pages/ProductDetail/ProductDetail';
import Cart from 'pages/Cart/Cart';
import NotFound from 'pages/NotFound/NotFound';
import Camera from 'pages/Camera/Camera';

import usePermission from 'hooks/usePermission';

import DefaultLayout from 'components/layout/DefaultLayout';
import Toast from 'components/common/Toast/Toast';
import { getTokenMessaging, onMessageListener } from 'services/firebase';

function App() {
  usePermission('notifications');
  useEffect(() => {
    (async () => {
      try {
        const token = await getTokenMessaging();
        console.log(token);
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const message = (await onMessageListener()) as {
          notification: Notification;
        };
        toast(
          <Toast
            title={message.notification.title}
            message={message.notification.body}
          />,
          {
            type: 'success',
          }
        );
        console.log(message);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
