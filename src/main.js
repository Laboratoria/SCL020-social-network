import { root } from './router/router.js';// Este es el punto de entrada de tu aplicación

import { routes } from './router/routes.js';
// import { myFunction } from './lib/index.js';

// myFunction();

// console.log(window.location.pathname);

root.innerHTML = routes[window.location.pathname];
