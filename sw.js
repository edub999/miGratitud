const CACHE_NAME = 'gratitud-v2';

// Instalación
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activación
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Escuchar mensajes del sistema (Opcional para el futuro)
self.addEventListener('push', (event) => {
  const options = {
    body: 'Es momento de agradecer por 3 cosas.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2904/2904979.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2904/2904979.png'
  };
  event.waitUntil(
    self.registration.showNotification('🙏 Gratitud Diaria', options)
  );
});
