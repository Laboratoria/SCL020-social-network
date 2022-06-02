import { root } from './router/router.js';// Este es el punto de entrada de tu aplicación

import { routes } from './router/routes.js';
// import { myFunction } from './lib/index.js';

// myFunction();

const splitPath = window.location.pathname.split('/')[1];
root.innerHTML = routes[splitPath].template;
