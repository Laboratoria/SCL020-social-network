//Importamos las funciones de crear los templates
import { intro } from './views/templateintro.js';
import { register } from './views/templateregister.js';
import { login } from './views/templatelogin.js';
import { error } from './views/error.js';
import { wall } from './views/templatewall.js';
import { divNewPost, post } from './views/templatepost.js';


//Creamos una función, la cuál toma el div vacio que esta en el html
//y le inyectamos la función de crear los templates
const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    switch (hash) {
        case '#/intro':
            containerRoot.appendChild(intro());
            break;

        case '#/register':
            containerRoot.appendChild(register());
            break;
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case '#/wall':
            containerRoot.appendChild(wall());
            divNewPost();
            break;
        case '#/post':
            containerRoot.appendChild(post());
            divNewPost();
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
//Creamos la función que realiza el enrutamiento
export const changeRouter = (hash) => {
    if (hash === '#/register') {
        return showTemplate(hash)
    } else if (hash === '#/intro') {
        return showTemplate(hash)
    } else if (hash === '#/login') {
        return showTemplate(hash)
    } else if (hash === '#/wall') {
        return showTemplate(hash)
    } else if (hash === '#/post') {
        return showTemplate(hash)
    } else if (hash === '#/') {
        return showTemplate(hash)
    } else if (hash === '') {
        return showTemplate(hash)
    } else {
        return showTemplate(hash)
    }
};














































































