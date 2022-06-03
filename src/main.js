// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { login } from './lib/views/templateLogin.js';
import { err404 } from './lib/views/template404.js';
import { age } from './lib/views/templateAge.js';
import { ageRedirect } from './lib/views/templateAgeRedirect.js';
import { deleteComment } from './lib/views/templateDeleteComment.js';
import { feed } from './lib/views/templateFeed.js';
import { home } from './lib/views/templateHome.js';
import { logoutConfirmation } from './lib/views/templateLogoutConfirmation.js';
import { menu } from './lib/views/templateMenu.js';
import { profile } from './lib/views/templateProfile.js';
import { signUp } from './lib/views/templateSignUp.js';
import { welcome } from './lib/views/templateWelcome.js';
import { changeRoute} from './lib/router.js';

myFunction();


const init = ()=> {
    document.getElementById("root").innerHTML = menu();
    window.addEventListener('hashchange',()=>{
        myFunction();
        console.log (window.location.hash);
        changeRoute(window.location.hash);
    })
}
window.addEventListener('load', init) 