//import { myFunction } from './lib/index.js';
import { home } from './lib/Views/templateHome.js';
import { changeRoute } from './lib/router.js';

// myFunction();
// document.getElementById('root').innerHTML = home();

const init = () => {
    
    window.addEventListener('hashchange', () =>{
    document.getElementById('root').innerHTML = home();
    changeRoute(window.location.hash)
    })
    changeRoute(window.location.hash)
}

window.addEventListener('load', init)