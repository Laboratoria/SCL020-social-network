/* eslint-disable import/no-cycle */
import Login from '../views/login.js';
import Home from '../views/home.js';
import Register from '../views/register.js';
import Post from '../views/post.js';
import Map from '../views/map.js';
import {validateState} from '../firebase/auth.js';

const routes = {
  '/': Login(),
  '/home': Home(),
  '/register': Register(),
  '/post': Post(),
  '/map': Map(),
};

const root = document.getElementById('root');

const next = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = '';
  root.appendChild(routes[pathname]);
};

const navigate =(pathname)=>{validateState(next,pathname);}

window.onpopstate = () => {
  root.innerHTML = '';
  root.appendChild(routes[window.location.pathname]);
};

export {navigate};

/* onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('user logged in:', user.uid);
    navigate(window.location.pathname);
  } else {
    console.log('user logged out');
    navigate('/');
  }
});
 */