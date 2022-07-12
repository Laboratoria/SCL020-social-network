// Este es el punto de entrada de tu aplicacion

import { menu } from './lib/views/templateMenu.js';
import { changeRoutes } from './lib/router.js';

//
const init = () => {
    document.getElementById('root').innerHTML = menu();
    changeRoutes(window.location.hash);
    window.addEventListener('hashchange', () => {
       
        changeRoutes(window.location.hash);
    })
}

window.addEventListener('load', init);