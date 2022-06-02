import {init} from '../templates/login.js'
const routes = {
  login: {
    path: '/',
    template: init(),
  },
  register: {
    path: '/register',
    template: '<h1>Regístrate</h1>',
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
    template: '<h1>Perfil</h1>',
  },
};

export { routes };
