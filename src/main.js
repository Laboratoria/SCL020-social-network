//import { myFunction } from './lib/index.js';
import { home } from './lib/Views/templateHome.js';
import { changeRoute } from './lib/router.js';

// myFunction();
window.addEventListener('load', () =>{
    window.history.replaceState({}, '', window.location.origin+'#/home' )
})

const init = () => {
    
    window.addEventListener('hashchange', () =>{
    document.getElementById('root').innerHTML = home();
    changeRoute(window.location.hash)
    })
    changeRoute(window.location.hash)
}

window.addEventListener('load', init)