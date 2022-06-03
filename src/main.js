// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { menu } from "./lib/views/templateMenu.js"
import { home } from "./lib/views/templateHome.js"
import { login } from "./lib/views/templateLogin.js"
import { age } from "./lib/views/templateAge.js"
import { ageRedirect } from "./lib/views/templateAgeRedirect.js"
import { signUp } from "./lib/views/templateSignUp.js"
myFunction();

document.getElementById("root").innerHTML = menu();
// document.getElementById("root").appendChild(home());
// document.getElementById("root").appendChild(login());
// document.getElementById("root").appendChild(age());
// document.getElementById("root").appendChild(ageRedirect());
// document.getElementById("root").appendChild(signUp());


