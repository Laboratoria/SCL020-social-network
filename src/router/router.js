import { login } from './login.js';
import { Home } from './home.js';

const routes = {
  '/': login,
  '/home': Home,
};

const navigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  document.getElementById('root').innerHTML = routes[pathname];
};

export { routes, navigate };
