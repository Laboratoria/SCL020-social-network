import { indexScreen } from './lib/views/templateIndex';
import { loginScreen } from './lib/views/templateLogin.js';
import { registerScreen } from './lib/views/templateRegister.js';




//Rutas
export const routes = {
   '/': indexScreen,
   '/Login': loginScreen,
   '/Register' : registerScreen
}


