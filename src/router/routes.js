import { login } from '../templates/login.js';
import { profile } from '../templates/profile.js';
import { register } from '../templates/register.js';
import { publications } from '../templates/publications.js'; 
import { addPost } from '../templates/addPost.js';

const routes = {
  login: {
    path: '/',
    template: login(),
  },
  register: {
    path: '/register',
    template: register(),
  },
  publications: {
    path: '/publications',
    template: publications(),
  },
  profile: {
    path: '/profile',
    template: profile(),
  }, 
  addPost: {
    path: '/addPost',
    template: addPost(),
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
