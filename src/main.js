// Este es el punto de entrada de tu aplicacion
import { home } from "./lib/views/templateHome.js";
import { showTemplate } from "./lib/router.js";


const init = ()=> {
    document.getElementById("root").innerHTML = home();
    showTemplate(window.location.hash);

    window.addEventListener("hashchange",()=>{
        
        console.log (window.location.hash);
        showTemplate(window.location.hash);
    })
}
window.addEventListener("load", init); 