import { home } from './Views/templateHome.js';
import { registration } from './Views/templateRegister.js';
import { wall } from './Views/templateWall.js';

export const changeRoute = (hash) => {
  if ( hash === '#/') {
    return showTemplates(hash)
  } else if ( hash === '#/register' ) {
    return showTemplates(hash)
  } else if ( hash === '#/wall') {
    return showTemplates(hash)
  } else if ( hash === '#/bullyingForm') {
    return showTemplates(hash)
  } else {
    return showTemplates(hash)
}
}

const showTemplates = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = 0;

  switch(hash) {
    case '#/home':
    containerRoot.appendChild(home());
      break;
    case '#/register':
    containerRoot.appendChild(registration());
      break;
    case '#/wall':
    containerRoot.appendChild(wall());
      break;
    case '#/bullyingForm':
    containerRoot.appendChild(bullyingForm());
      break;
    default:
    containerRoot.innerHTML = `<h2>Esta página no existe</h2>`
  }
}