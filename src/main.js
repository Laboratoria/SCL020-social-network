// import { myFunction } from './lib/index.js';
import { logIn } from './lib/view/templateLogIn.js';
import { createUser } from './lib/view/templateCreateUser.js';
import { home } from './lib/view/templateHome.js';
import { changeRoute } from './lib/router.js';
import { login, signup, logout } from './firebase/auth.js';

const init = () => {
    document.querySelector('#root').innerHTML = logIn();
    window.addEventListener('hashchange', () => {
        changeRoute(window.location.hash)
    })
}

window.addEventListener('load', init)