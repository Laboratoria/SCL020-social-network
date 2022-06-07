import { createUser } from './lib/view/templateCreateUser.js';
import { login } from './view/templateLogIn.js';

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
    containerRoot.innerHTML = login();
    switch(hash) {
    case '#/':
    containerRoot.appendChild(home());
        break;
    case '#/personajes':
    containerRoot.appendChild(personajes());
        break;
    default:
    containerRoot.innerHTML = `<h2>No existe</h2>`
    }
}