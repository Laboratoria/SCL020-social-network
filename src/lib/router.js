import { intro } from './views/templateintro.js';
import { login } from './views/templatelogin.js';
import { users } from './views/templateusers.js';
import {error} from'./views/error.js';
import {wall} from'./views/templatewall.js';

export const changeRouter = (hash) => {
    if (hash === '#/login') {
        return showTemplate(hash)
    } else if (hash === '#/intro'){
        return showTemplate(hash)
    } else if (hash === '#/users'){
        return showTemplate(hash)
     } else if (hash === '#/wall'){
        return showTemplate(hash)
     } else if (hash === '#/'){
        return showTemplate(hash)
     } else if (hash === ''){
        return showTemplate(hash)
     } else {
        return showTemplate(hash)
    }
};

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    switch (hash) {
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case '#/users':
            containerRoot.appendChild(users());
            break;
        case '#/wall':
            containerRoot.appendChild(wall());
            break;
        case '#/':
            containerRoot.appendChild(intro());
            break;
        case '':
            containerRoot.appendChild(intro());
            break;
        default:
            containerRoot.appendChild(error());
            break;

    };

};