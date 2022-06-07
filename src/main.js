import { myFunction } from './lib/index.js';
import { logIn } from './lib/view/templateLogIn.js';
import { createUser } from './lib/view/templateCreateUser.js';
import { home } from './lib/view/templateHome.js';
import { changeRoute } from './lib/router.js';

const init = () => {
    document.getElementById('root').innerHTML = logIn();
    window.addEventListener('hashchange', () => {
        myFunction();
        changeRoute(window.location.hash)
    })
}

window.addEventListener('load', init)
