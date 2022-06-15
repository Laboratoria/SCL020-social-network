// import { myFunction } from './lib/index.js';
import { logIn } from './lib/view/templateLogIn.js';
import { createUser } from './lib/view/templateCreateUser.js';
import { home } from './lib/view/templateHome.js';
import { showTemplates } from './lib/router.js';
import { login, signup, logout } from './firebase/auth.js';

const init = () => {
    document.querySelector('#root').innerHTML = logIn();
    showTemplates(window.location.hash)
    window.addEventListener('hashchange', () => {
        showTemplates(window.location.hash)
    })
}

window.addEventListener('load', init)