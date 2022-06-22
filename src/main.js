// Este es el punto de entrada de tu aplicacion, main enlasa HTML con toda la logica de  usabilidad de la pag. con router
// y con index

import { interpLogIn } from "./lib/views/viewLogIn.js";
import { interpSignUp } from "./lib/views/viewSignUp.js";
import { changeRoute } from "./router/router.js";


const init = () => {
    document.getElementById("screen1").innerHTML = interpLogIn();
        window.addEventListener("hashchange", () => {
            changeRoute(window.location.hash)
        })
};

window.addEventListener("load", init)

console.log(interpSignUp);

