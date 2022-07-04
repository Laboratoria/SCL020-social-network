// Este es el punto de entrada de tu aplicacion

import { intro } from './lib/views/templateintro.js';
/*import { users } from './lib/views/templateusers';*/
import { changeRouter } from './lib/router.js';
//myFunction();



//document.getElementById("root").innerHTML = loguearse();


const init = () => {
    window.addEventListener("hashchange", () => {
    document.getElementById("root").innerHTML = intro();

        changeRouter(window.location.hash);
    })

    changeRouter(window.location.hash);  
}
window.addEventListener('load', init);

 console.log(window.location.hash);