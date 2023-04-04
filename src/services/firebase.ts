import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCrM9f1q0F4M-rg7yE5XfXHqcSifr5vNqs',
  authDomain: 'fir-push-notification-we-de0a3.firebaseapp.com',
  projectId: 'fir-push-notification-we-de0a3',
  storageBucket: 'fir-push-notification-we-de0a3.appspot.com',
  messagingSenderId: '83827647295',
  appId: '1:83827647295:web:9118652d32d3520e7be98a',
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const getTokenMessaging = () =>
  getToken(messaging, {
    vapidKey:
      'BJNyQDEFIbP7ePF8K21VcFW5Zom2oju66LemQROyUDEAlFf5Unk9ZXZceqd_9zUyFQJ8CJ1Ku0rGkaeMjpKB7vs',
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => resolve(payload));
  });
