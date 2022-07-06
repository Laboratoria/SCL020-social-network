// Este es el punto de entrada de tu aplicacion

import { home } from './lib/views/templateHome.js';
import { login } from './lib/views/templateLogin.js';
import { register } from './lib/views/templateRegister.js';
import { menu } from './lib/views/templateMenu.js';
import { changeRoutes } from './lib/router.js';
import { myFunction} from './lib/index.js';



//document.getElementById('root').appendChild(home())

document.getElementById('root').innerHTML = menu();
//
const init = () => {
   
    window.addEventListener('hashchange', () => {
        myFunction();
        console.log("holaa");
        changeRoutes(window.location.hash);
    })
}

window.addEventListener('load', init);


// const init = () => {
//     document.getElementById('root').innerHTML = home();
//     window.addEventListener('hashchange', () => {

//         showTemplate(window.location.hash);
//     })
// }

// window.addEventListener('load', init);