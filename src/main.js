// Este es el punto de entrada de tu aplicacion

import { indexScreen } from './lib/views/templateIndex';
import { loginScreen } from './lib/views/templateLogin.js';
import { registerScreen } from './lib/views/templateRegister.js';
import { menu } from './lib/views/templateMenu.js';
import { changeroutes } from './lib/routes';


// const index =  document.getElementById('view1').innerHTML = indexScreen();
// const login =  document.getElementById('view2').innerHTML += loginScreen();


//
const init = () => {
    document.getElementById('view1').innerHTML = menu();
    window.addEventListener('hashchange', () => {

        changeroutes(window.location.hash);
    })
}

window.addEventListener('load', init);