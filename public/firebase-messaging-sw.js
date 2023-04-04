// eslint-disable-next-line no-undef
importScripts(
  'https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js'
);
// eslint-disable-next-line no-undef
importScripts(
  'https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js'
);

const firebaseConfig = {
  apiKey: 'AIzaSyCrM9f1q0F4M-rg7yE5XfXHqcSifr5vNqs',
  authDomain: 'fir-push-notification-we-de0a3.firebaseapp.com',
  projectId: 'fir-push-notification-we-de0a3',
  storageBucket: 'fir-push-notification-we-de0a3.appspot.com',
  messagingSenderId: '83827647295',
  appId: '1:83827647295:web:9118652d32d3520e7be98a',
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
