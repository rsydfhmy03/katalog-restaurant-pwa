import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;


// import runtime from 'serviceworker-webpack-plugin/lib/runtime';

// const swRegister = async () => {
//   if ('serviceWorker' in navigator) {
//     await runtime.register();
//     return;
//   }
//   console.log('Service worker not supported in this browser');
// };

// export default swRegister;
