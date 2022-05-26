// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

console.log(window.location.pathname);

const home = '<h1>Home</h1>'

const contact = '<h1>Contact</h1>'

const routes = {'/home' : home, '/contact' : contact}

const root = document.getElementById('root');

root.innerHTML = routes[window.location.pathname];
