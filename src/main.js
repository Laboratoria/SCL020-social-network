import { home } from './lib/Views/templateHome.js';
import { registration } from './lib/Views/templateRegister.js'

document.getElementById('root').innerHTML = home ();
document.getElementById('root').innerHTML += registration ();