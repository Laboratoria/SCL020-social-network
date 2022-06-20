import {interpIndex} from "./liv/views/index.js";
import {viewSignUp} from "./liv/views/viewSignUp.js";

export const changeRoute = (hash) => {
    if (hash === "#/index") {
        return showTemplate(hash)
    } else if (hash === "#/viewSignUp") {
        return showTemplate(hash)
    } else {
        return showTemplate(hash)
    }
};

const showTemplate = (hash) => {
    const containerIndex = document.getElementById("screen1");
    containerIndex.innerHTML = formIndex();

    switch (hash) {
        case "#/index":
            containerIndex.appendChild(formIndex());
            break;
        case "#/viewSignUp":
            containerIndex.appendChild(viewSignUp());
            break;
        default:
            containerIndex.innerHTML= `<p>no existe</p>`
    }
};



