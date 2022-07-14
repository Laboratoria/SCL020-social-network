// Este es el punto de entrada de tu aplicacion

//Rutas
//import { menuLogin } from './lib/views/templateMenu.js';
import { changeRoutes } from './lib/router.js';

;

//Contiene o llama el div del html
export const root =  document.getElementById('root');

//Init del router
const init = () => {
   // document.getElementById('root').innerHTML = menuLogin();
    changeRoutes(window.location.hash);
    window.addEventListener('hashchange', () => {
       
        changeRoutes(window.location.hash);
    })


    
}

//carga el init
window.addEventListener('load', init);



