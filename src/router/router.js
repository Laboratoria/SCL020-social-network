/* eslint-disable import/no-cycle */
import Login from '../views/login.js';
import Home from '../views/home.js';
import Register from '../views/register.js';

const routes = {
  '/': Login(),
  '/home': Home(),
  '/register': Register(),
};

const root = document.getElementById('root');

const navigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  root.innerHTML = '';
  root.appendChild(routes[pathname]);
};

export { routes, navigate };
