// Este es el punto de entrada de tu aplicacion

import { interpIndex } from "./lib/views/index.js";
import { interpSignUp } from "./lib/views/viewSignUp.js";
// import { changeRoute } from "./router/router.js";

const showIndex = (document.getElementById("screen1").innerHTML = interpIndex());

// const showSignUp = (document.getElementById("screen2").innerHTML += interpSignUp());
document.getElementById("screen1").innerHTML = interpIndex();

const init = () => {

        window.addEventListener("hashchange", () => {
            changeRoute(window.location.hash)
        })
};

// window.addEventListener("load", init)

