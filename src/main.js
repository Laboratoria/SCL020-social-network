// Este es el punto de entrada de tu aplicacion

import { home } from './lib/views/templateHome.js';
import { login } from './lib/views/templateLogin.js';
import { menu } from './lib/views/templateMenu.js';
import { changeRoutes } from './lib/router.js';
import { myFunction} from './lib/index.js';


//
const init = () => {
    document.getElementById('root').innerHTML = menu();
    window.addEventListener('hashchange', () => {
        myFunction();
        console.log("holaa");
        changeRoutes(window.location.hash);
    })
}

window.addEventListener('load', init);
