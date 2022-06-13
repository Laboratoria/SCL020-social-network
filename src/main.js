// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { introduccion } from './lib/views/introduccion.js';
import { loguearse } from './lib/views/loguearse.js';
import { changeRouter } from './lib/router.js';
//myFunction();






const init = () => {
    document.getElementById("root").innerHTML = introduccion();
    document.getElementById("root").innerHTML = loguearse();
    window.addEventListener("hashchange", () => {
        myFunction();
        console.log(window.location.hash);
        changeRouter(window.location.hash);
    })
}
window.addEventListener('load', init);