import { intro } from './views/templateintro.js';
import { register } from './views/templateregister.js';
import { login } from './views/templatelogin.js';
import { error } from './views/error.js';
import { wall } from './views/templatewall.js';

export const changeRouter = (hash) => {
    if (hash === '#/register') {
        return showTemplate(hash)
    } else if (hash === '#/intro') {
        return showTemplate(hash)
    } else if (hash === '#/login') {
        return showTemplate(hash)
    } else if (hash === '#/wall') {
        return showTemplate(hash)
    } else if (hash === '#/') {
        return showTemplate(hash)
    } else if (hash === '') {
        return showTemplate(hash)
    } else {
        return showTemplate(hash)
    }
};

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    switch (hash) {
        case '#/register':
            containerRoot.appendChild(register());
            break;
        case '#/login':
            containerRoot.appendChild(login());
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