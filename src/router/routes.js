import { login } from '../templates/login.js';
import { profile } from '../templates/profile.js';
import { register } from '../templates/register.js';

const routes = {
  login: {
    path: '/',
    template: login(),
  },
  register: {
    path: '/register',
    template: register(),
  },
  news: {
    path: '/news',
    template: '<h1>Noticias</h1>',
  },
  publications: {
    path: '/publications',
    template: '<h1>Publicaciones</h1>',
  },
  profile: {
    path: '/profile',
    template: profile(),
  },
};

function navigate(route) {
  const template = routes[route].template;
  const path = routes[route].path;
  history.pushState({}, route, path);
  const root = document.getElementById('root');
  root.innerHTML = ' ';
  root.appendChild(template);
  console.log(template);
}

export { navigate };
