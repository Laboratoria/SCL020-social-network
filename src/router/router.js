import Login from '../views/login.js';
import  Home  from '../views/home.js';

const routes = {
  '/': Login(),
  '/home': Home(),
};

const root = document.getElementById('root');

const navigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
 
  root.innerHTML="";
  root.appendChild(routes[pathname]);
};

export { routes, navigate };
