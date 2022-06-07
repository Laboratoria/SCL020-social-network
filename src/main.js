import { myFunction } from './lib/index.js';
import { login } from './lib/view/templateLogIn.js';
import { createUser } from './lib/view/templateCreateUser.js';

myFunction();
document.getElementById('root').innerHTML = login();
document.getElementById('root').appendChild(createUser());
