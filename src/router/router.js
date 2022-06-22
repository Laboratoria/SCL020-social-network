import {interpLogIn} from "../lib/views/viewLogIn.js";
import {interpSignUp} from "../lib/views/viewSignUp.js";
import {interpHome} from "../lib/views/viewHome.js";
import { interpProfile } from "../lib/views/viewProfile.js";

export const changeRoute = (hash) => {
    if (hash) {
        return showTemplate(hash)
    } else {
        return showTemplate(hash)
    }
};

const showTemplate = (hash) => {
    const containerIndex = document.getElementById("screen1");
    // containerIndex.innerHTML = interpLogIn();

    switch (hash) {
       
        case "#/viewSignUp":
            containerIndex.appendChild(interpSignUp());
            break;
        case "#/viewHome":
            containerIndex.appendChild(interpHome());
            break;
        case "#/viewProfile":
            containerIndex.appendChild(interpProfile());
            break;
        case "#/":
            containerIndex.appendChild(interpLogIn());
            break;
        // debo tener tantos casos como vistas hay
        default:
            containerIndex.innerHTML= `<p>no existe</p>`
    }
};



