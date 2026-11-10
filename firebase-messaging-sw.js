/* Service worker push notification — KPI & Performance Appraisal (Firebase Cloud Messaging) */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyC1XeL4Ow588LZUDmu9Ui9rqb2X_FaWGno',
  authDomain: 'kpi-paramount.firebaseapp.com',
  projectId: 'kpi-paramount',
  storageBucket: 'kpi-paramount.firebasestorage.app',
  messagingSenderId: '1013165214449',
  appId: '1:1013165214449:web:422fda51cce4965ea87750'
});

var messaging = firebase.messaging();

/* Notifikasi dari server sudah berisi judul & isi, jadi ditampilkan otomatis oleh Firebase
   saat aplikasi tertutup / di latar belakang. Klik notifikasi membuka aplikasi. */
messaging.onBackgroundMessage(function () {});

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
