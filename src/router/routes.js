import { login } from '../templates/login.js';
import { profile } from '../templates/profile.js';
import { register } from '../templates/register.js';
import { news } from '../templates/news.js';
import { publications } from '../templates/publications.js'; 
import { groups } from '../templates/groups.js';

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
    template: news(),
  },
  publications: {
    path: '/publications',
    template: publications(),
  },
  profile: {
    path: '/profile',
    template: profile(),
  }, 
  groups: {
    path: '/groups',
    template: groups(),
  }
};

function navigate(route) {
  const template = routes[route].template;
  const path = routes[route].path;
  history.pushState({}, route, path);
  const root = document.getElementById('root');
  root.innerHTML = ' ';
  root.appendChild(template);
  // console.log(template);
}

export { navigate };
