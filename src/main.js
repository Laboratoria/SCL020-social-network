// Este es el punto de entrada de tu aplicacion

import { menuLogin } from './lib/views/templateMenu.js';
import { changeRoutes } from './lib/router.js';

//
const init = () => {
    document.getElementById('root').innerHTML = menuLogin();
    changeRoutes(window.location.hash);
    window.addEventListener('hashchange', () => {
       
        changeRoutes(window.location.hash);
    })
}

window.addEventListener('load', init);
