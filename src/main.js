import { myFunction } from './lib/index.js';
import { creatUser } from './lib/view/templateCreateUser.js';

myFunction();
document.getElementById('root').innerHTML = creatUser();
