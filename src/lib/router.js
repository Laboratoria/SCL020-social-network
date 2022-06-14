import { home } from '../templates/templateHome.js';
import { registration } from '../templates/templateRegister.js';
import { wall } from '../templates/templateWall.js';
import { bForm } from '../templates/templateBullyingForm.js';

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
  containerRoot.innerHTML = '';
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
    containerRoot.appendChild(bForm());
      break;
    default:
    containerRoot.innerHTML = `<h2>Esta página no existe</h2>`
  }
}