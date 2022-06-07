import { createUser } from './view/templateCreateUser.js';
import { logIn } from './view/templateLogIn.js';
import { home } from './view/templateHome.js';

export const changeRoute = (hash) => {
    if (hash === '#/') {
        return showTemplates(hash)
    }
    else if (hash === '#/crearUsuario'){
        return showTemplates(hash)
    } else {
        return showTemplates(hash)
    }
}

const showTemplates = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
    switch(hash) {
    case '#/createNewUser':
    containerRoot.appendChild(createUser());
        break;
    case '#/home':
    containerRoot.appendChild(home());
        break;
    case '#/userProfile':
    containerRoot.appendChild(createUser());
        break;
    default:
    containerRoot.innerHTML = `<h2>No existe 404</h2>`
    }
}